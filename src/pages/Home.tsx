import { Wrapper } from "./style/HomeWrapper";
import { ArticleItem } from "../components/common";
import { Link, useRouteMatch } from "react-router-dom";
import {
  ApiParamsType,
  ApiType,
  Gender,
  NavbarClassType,
  SectionPostsType,
} from "../types";
import { NormalizedState } from "../store/redux/initial_data_for_app/InitialDataState";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  FetchSectionPostsRequest,
  SetSectionAlias,
  SetSectionPostsStart,
} from "../store/redux/section_posts/FetchSectionPostsActions";
import { SectionPosts } from "../model";
import { CombineTwoArray } from "../utils";

type InitialState = {
  loading: boolean;
  [ApiType.Popular]: NormalizedState;
  [ApiType.Latest]: NormalizedState;
  [ApiParamsType.SectionPostsStart]: number;
  error: string;
};

type IndexState = {
  FetchReducer: InitialState;
};

type Props = {
  navbarClassName: NavbarClassType;
};

function Home({ navbarClassName }: Props) {
  const { path } = useRouteMatch();
  const indexState: InitialState = useSelector((state: IndexState) => ({
    loading: state.FetchReducer.loading,
    [ApiType.Popular]: state.FetchReducer[ApiType.Popular],
    [ApiType.Latest]: state.FetchReducer[ApiType.Latest],
    [ApiParamsType.SectionPostsStart]:
      state.FetchReducer[ApiParamsType.SectionPostsStart],
    error: state.FetchReducer.error,
  }));
  const [popularPostsList, setPopularPostsList] = useState<SectionPosts[]>(
    [] as SectionPosts[]
  );
  const [latestPostsList, setLatestPostsList] = useState<SectionPosts[]>(
    [] as SectionPosts[]
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!indexState[ApiParamsType.SectionPostsStart]) {
      indexState[ApiParamsType.SectionPostsStart] = 0;
    }
    dispatch(SetSectionAlias(SectionPostsType.Index));
    dispatch(SetSectionPostsStart(0));
    dispatch(
      FetchSectionPostsRequest(indexState[ApiParamsType.SectionPostsStart])
    )
  }, [path]);

  useEffect(() => {
    function getPostsList(postsType: ApiType.Popular | ApiType.Latest) {
      if (!indexState[postsType]) {
        return;
      }
      let newPostsList: SectionPosts[] = [] as SectionPosts[];
      indexState[postsType].result.map((articleId: string) => {
        newPostsList.push(indexState[postsType].entities[postsType][articleId]);
      });
      if (indexState[ApiParamsType.SectionPostsStart] !== 0) {
        postsType === ApiType.Popular &&
          setPopularPostsList(CombineTwoArray(popularPostsList, newPostsList));
        postsType === ApiType.Latest &&
          setLatestPostsList(CombineTwoArray(latestPostsList, newPostsList));
      } else if (postsType === ApiType.Popular) {
        setPopularPostsList(newPostsList);
      } else {
        setLatestPostsList(newPostsList);
      }
    }
    getPostsList(ApiType.Popular);
    getPostsList(ApiType.Latest);
  }, [indexState[ApiType.Popular], indexState[ApiType.Latest]]);
  
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
          {popularPostsList.map((article: SectionPosts) => (
            <ArticleItem
              {...article}
              gender={Gender[article.gender]}
              key={article.id}
            />
          ))}
        </ul>
      )}
      {navbarClassName === NavbarClassType.Latest && (
        <ul>
          {latestPostsList.map((article: SectionPosts) => (
            <ArticleItem
              {...article}
              gender={Gender[article.gender]}
              key={article.id}
            />
          ))}
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
