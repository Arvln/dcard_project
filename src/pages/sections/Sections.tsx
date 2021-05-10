import { Link, useRouteMatch } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Wrapper } from "../style/SectionsWrapper";
import {
  RelatedForums,
  ArticleItem,
  FollowButton,
} from "../../components/common";
import { Bulletin, Featured, Image } from "../../model";
import { ApiType } from "../../store/redux/initial_data_for_app/FetchApiType";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSectionPostsRequest,
  SetSectionAlias,
} from "../../store/redux/section_posts/FetchSectionPostsActions";
import { initialDataForEachSectionState, InitialDataForEachSectionState } from "../../store/redux/section_posts/InitialDataState";
import { RootStoreContext } from "../../components/common/SiteLayout";
export const SectionStoreContext = React.createContext(initialDataForEachSectionState);

export enum NavBarClassName {
  Popular = "POPULAR",
  Latest = "LATEST",
  Pessoal = "PESSOAL",
  Rule = "RULE",
}

type Props = {
  id: string;
  name: string;
  alias: string;
  heroImage: Image;
  logo: Image;
  navBarClassName: NavBarClassName;
};

export type SectionState = {
  FetchReducer: InitialDataForEachSectionState;
};

function Sections({ name, alias, heroImage, logo, navBarClassName }: Props) {
  const { path } = useRouteMatch();
  const { BULLETIN } = useContext(RootStoreContext);
  const [isReachLeftEnd, setIsReachLeftEnd] = useState(true);
  const [isReachRightEnd, setIsReachRightEnd] = useState(false);
  let scrollElement: HTMLElement | null;
  const forumTitlePosition: HTMLElement | null = document.getElementById(
    "forum-title-point"
  );
  const sectionState: InitialDataForEachSectionState = useSelector(
    (state: SectionState) => ({
      loading: state.FetchReducer.loading,
      [ApiType.Featured]: state.FetchReducer[ApiType.Featured],
      [ApiType.Related]: state.FetchReducer[ApiType.Related],
      error: state.FetchReducer.error,
    })
  );
  const dispatch = useDispatch();
  const youtubeVedioTest: RegExp = /^https:\/\/youtu/;

  useEffect(() => {
    // 跳轉熱門頁面到版標
    navBarClassName === NavBarClassName.Popular &&
      forumTitlePosition?.scrollIntoView();
    dispatch(SetSectionAlias(alias));
    dispatch(FetchSectionPostsRequest());
  }, [path]);
  console.log(sectionState);

  function leftArrowIconHandler(): void {
    scrollElement = document.getElementById("scroll-element");
    if (isReachLeftEnd || !scrollElement) {
      return;
    }
    scrollElement.scrollLeft -= 750;
  }

  function rightArrowIconHandler(): void {
    scrollElement = document.getElementById("scroll-element");
    if (isReachRightEnd || !scrollElement) {
      return;
    }
    scrollElement.scrollLeft += 750;
  }

  function scrollHandler(): void {
    scrollElement = document.getElementById("scroll-element");
    if (scrollElement?.scrollLeft === 0) {
      setIsReachLeftEnd(true);
    } else if (scrollElement?.scrollLeft === 3556) {
      setIsReachRightEnd(true);
    } else {
      setIsReachLeftEnd(false);
      setIsReachRightEnd(false);
    }
  }

  return (
    <SectionStoreContext.Provider value={{...sectionState}}>

    <Wrapper navBarClassName={navBarClassName}>
      {heroImage && (
        <div className="top-banner">
          <img
            src={heroImage.url}
            alt="20190926_forums_and_image/image/relationship-cover.jpg"
            width="100%"
          />
          <div id="forum-title-point"></div>
        </div>
      )}

      {logo && (
        <div className="top-navbar">
          <div className="logo-container">
            <img
              src={logo.url}
              width="40"
              height="40"
              loading="lazy"
              alt="Logo"
              style={{ borderRadius: "50%" }}
            />
            <Link to={`/f/${alias}`}>
              <h1>{name}</h1>
            </Link>
            <FollowButton />
          </div>
          <ul className="top-navbar-items-wrapper">
            <li className={NavBarClassName.Popular}>
              <Link to={`/f/${alias}`}>
                <span>熱門</span>
              </Link>
            </li>
            <li className={NavBarClassName.Latest}>
              <Link to={`/f/${alias}/latest`}>
                <span>最新</span>
              </Link>
            </li>
            <li className={NavBarClassName.Rule}>
              <Link to={`/f/${alias}/rule`}>
                <span>板規</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {navBarClassName === NavBarClassName.Popular &&
        path === "/f/relationship" && (
          <div className="first-banner">
            <a
              href="https://youtu.be/ETogpwOdkSY"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src="https://megapx-assets.dcard.tw/images/120e66b3-da52-4959-b4e0-f4807e5a84a7/full.png"
                alt="(banner)0421_Dcard尋奇EP27.png"
                width="1800"
                height="600"
              />
            </a>
          </div>
        )}

      {navBarClassName === NavBarClassName.Rule || (
        <ul>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          {navBarClassName === NavBarClassName.Popular && (
            <div className="month-popular-wrapper">
              <h2 className="month-popular">本月熱門</h2>
              <div className="article-card-wrapper">
                <div
                  className="article-card-container"
                  id="scroll-element"
                  onScroll={scrollHandler}
                >
                  {sectionState.FEATURED &&
                    sectionState.FEATURED.result.map((articleId: string) => {
                      const {
                        id,
                        title,
                        excerpt,
                        gender,
                        anonymousSchool,
                        school,
                        mediaMeta,
                      }: Featured = sectionState[ApiType.Featured].entities[
                        ApiType.Featured
                      ][articleId];
                      return (
                        <a href="#" className="article-card" key={id}>
                          <h2 className="article-card-title">{title}</h2>
                          <div className="article-card-content">{excerpt}</div>
                          <div className="article-author-info">
                            {gender === "F" ? (
                              <svg
                                viewBox="0 0 40 40"
                                focusable="false"
                                width="16"
                                height="16"
                              >
                                <title>"女"</title>
                                <path
                                  fill="#F48FB1"
                                  d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                                ></path>
                                <path
                                  fill="#CB3A6B"
                                  d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                viewBox="0 0 40 40"
                                focusable="false"
                                width="16"
                                height="16"
                              >
                                <title>男</title>
                                <path
                                  fill="#81D4FA"
                                  d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                                ></path>
                                <path
                                  fill="#2490BF"
                                  d="M16 7.9C12.4 7.4 9.3 6 9.3 6s5.5 4.3 5 5.3c-.4 1-4.2 0-4.2 0l4 2a9.7 9.7 0 00-1.5 4.6l.1 3.4a1.5 1.5 0 10.8 2.9 8.3 8.3 0 006.2 5.3c.6 0 .6 2 .6 3.2-1.6 1-2.5 3-2 5v2.2a20.2 20.2 0 009.9-1.6l-.7-2.7v-.4l-.2-.4-.2-.4-.2-.3-.2-.3c-.7-1-1.7-1.6-2.9-1.8l.6-2.3s1.4-1 3-2.6l.4 1.3 1.4-2.5.9-1.8s3.8-10.3.8-13.9c-2.6-3-11-1.9-14.7-2.3"
                                ></path>
                              </svg>
                            )}
                            <div className="author-identity">
                              {anonymousSchool ? "匿名" : school}
                            </div>
                          </div>
                          {mediaMeta[0] &&
                            !youtubeVedioTest.test(mediaMeta[0].url) && (
                              <img
                                src={mediaMeta[0].url}
                                width="84px"
                                height="84px"
                                alt=""
                                loading="lazy"
                                className="article-card-picture"
                              />
                            )}
                        </a>
                      );
                    })}
                </div>
                <div
                  className="left-arrow-icon-container"
                  style={{ opacity: isReachLeftEnd ? 0 : 1 }}
                  onClick={leftArrowIconHandler}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    focusable="false"
                    width="24"
                    height="24"
                    role="img"
                    aria-hidden="true"
                    fill="rgba(0, 0, 0, 0.35)"
                  >
                    <path d="M17.65 8.65l-.79-.79a.5.5 0 00-.71 0l-5.79 5.79a.5.5 0 000 .71l5.79 5.79a.5.5 0 00.71 0l.79-.79a.5.5 0 000-.71L13 14l4.65-4.65a.5.5 0 000-.7z"></path>
                  </svg>
                </div>
                <div
                  className="right-arrow-icon-container"
                  style={{ opacity: isReachRightEnd ? 0 : 1 }}
                  onClick={rightArrowIconHandler}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    focusable="false"
                    width="24"
                    height="24"
                    role="img"
                    aria-hidden="true"
                    fill="rgba(0, 0, 0, 0.35)"
                  >
                    <path d="M17.65 8.65l-.79-.79a.5.5 0 00-.71 0l-5.79 5.79a.5.5 0 000 .71l5.79 5.79a.5.5 0 00.71 0l.79-.79a.5.5 0 000-.71L13 14l4.65-4.65a.5.5 0 000-.7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
          <ArticleItem />
          <ArticleItem />
          {navBarClassName === NavBarClassName.Popular && <RelatedForums />}
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </ul>
      )}

      {navBarClassName === NavBarClassName.Rule && (
        <div className="rule-container">
          <div className="forum-rule-title">
            <div className="rule-title-head">
              <h2>規範</h2>
              <div className="version-id">版本：2021.03.30</div>
            </div>
            <p>
              於看板發言時請遵守全站站規與本板板規，讓大家都有一個乾淨的討論空間。
            </p>
          </div>
          <div className="rule-description">
            <h2>全站站規</h2>
            <p>
              違反全站站規的貼文，板主刪文後系統會通知官方審核人員，依全站站規於全站停權使用者。
            </p>
          </div>
          <div className="rule-contents">
            <ul>
              {BULLETIN &&
                BULLETIN.result.map((bulletinId: string, index: number) => {
                  const bulletinContent: Bulletin =
                    BULLETIN.entities[ApiType.Bulletin][bulletinId];
                  return (
                    <li key={bulletinContent.id}>
                      <h2>
                        {index + 1}. {bulletinContent.title}
                      </h2>
                      <div className="rule-contents-description">
                        <p>{bulletinContent.content}</p>
                        <div>
                          違反此站規，於此看板禁言 {bulletinContent.bucketDays}{" "}
                          天。
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </Wrapper>
    </SectionStoreContext.Provider>
  );
}

export default Sections;
