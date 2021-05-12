import { Wrapper } from "./style/HomeWrapper";
import { ArticleItem } from "../components/common";
import { Link, useRouteMatch } from "react-router-dom";
import { ApiParamsType, ApiType, Gender, NavbarClassType, SectionPostsType } from "../types";
import { NormalizedState } from "../store/redux/initial_data_for_app/InitialDataState";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchSectionPostsRequest, SetSectionAlias } from "../store/redux/section_posts/FetchSectionPostsActions";
import { SectionPosts } from "../model";

type InitialState = {
  loading: boolean,
  [ApiType.Popular]: NormalizedState,
  [ApiType.Latest]: NormalizedState,
  [ApiParamsType.SectionPostsStart]: number,
  error: string
};

type IndexState = {
  FetchReducer: InitialState;
};

type Props = {
  navbarClassName: NavbarClassType
}

function Home({ navbarClassName }: Props) {
  const indexState: InitialState = useSelector((state: IndexState) => ({
    loading: state.FetchReducer.loading,
    [ApiType.Popular]: state.FetchReducer[ApiType.Popular],
    [ApiType.Latest]: state.FetchReducer[ApiType.Latest],
    [ApiParamsType.SectionPostsStart]: state.FetchReducer[ApiParamsType.SectionPostsStart],
    error: state.FetchReducer.error
  }))

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetSectionAlias(SectionPostsType.Index));
    indexState[ApiParamsType.SectionPostsStart] && dispatch(FetchSectionPostsRequest(indexState[ApiParamsType.SectionPostsStart]));
  }, [])
  

  return (
    <Wrapper navBarClassName={navbarClassName}>
      <div className="top-navbar">
        <ul className="top-navbar-items-wrapper">
          <li className={NavbarClassType.Popular}>
            <Link to="/f">
              <span>熱門</span>
            </Link>
          </li>
          <li className={NavbarClassType.Latest}>
            <Link to="/f/latest">
              <span>最新</span>
            </Link>
          </li>
          <li className={NavbarClassType.Pessoal}>
            <Link to="/f/pessoal">
              <span>追蹤</span>
            </Link>
          </li>
        </ul>
      </div>
      {navbarClassName === NavbarClassType.Popular && (
        <a
          href="https://youtu.be/ETogpwOdkSY"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="first-banner"
        >
          <img
            src="https://megapx-assets.dcard.tw/images/120e66b3-da52-4959-b4e0-f4807e5a84a7/full.png"
            alt="(banner)0421_Dcard尋奇EP27.png"
            width="1800"
            height="600"
          />
        </a>
      )}
      {navbarClassName === NavbarClassType.Popular && (
        <ul>
          {indexState[ApiType.Popular] && indexState[ApiType.Popular].result.map((articleId: string) => {
            const article: SectionPosts = indexState[ApiType.Popular].entities[ApiType.Popular][articleId];
            return <ArticleItem {...article} gender={Gender[article.gender]} key={article.id} />
          })}
        </ul>
      )}
      {navbarClassName === NavbarClassType.Latest && (
        <ul>
          {indexState[ApiType.Latest] && indexState[ApiType.Latest].result.map((articleId: string) => {
            const article: SectionPosts = indexState[ApiType.Latest].entities[ApiType.Latest][articleId];
            return <ArticleItem {...article} gender={Gender[article.gender]} key={article.id} />
          })}
        </ul>
      )}
      {navbarClassName === NavbarClassType.Pessoal && (
        <div className="pessoal-container">
          <div className="login-msg">
            <img
              src="https://www.dcard.tw/_next/static/media/noFollowing-1f473c65cdedb9bc8d2798c4b24a63f7.png"
              alt="Please Login"
              width="280"
              height="160"
            />
            <h2>尚未登入</h2>
            <p>追蹤喜歡的內容建立專屬文章列表</p>
            <Link to="/signup">
              <button type="button">立即登入</button>
            </Link>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default Home;
