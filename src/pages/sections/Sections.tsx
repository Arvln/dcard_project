import { Link, useRouteMatch } from "react-router-dom";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Wrapper } from "../style/SectionsWrapper";
import {
  RelatedForums,
  ArticleItem,
  FollowButton,
} from "../../components/common";
import { Bulletin, SectionPosts, Image } from "../../model";
import { ApiType } from "../../types/FetchApiType";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchPostRequest,
  FetchSectionPostsRequest,
  SetNavbarClassName,
  SetPostId,
  SetSectionAlias,
  SetSectionPostsStart,
} from "../../store/redux/section_posts/FetchSectionPostsActions";
import {
  initialDataForEachSectionState,
  InitialDataForEachSectionState,
} from "../../store/redux/section_posts/InitialDataState";
import { RootStoreContext } from "../../components/common/SiteLayout";
import { ApiParamsType, Gender, NavbarClassType, PostType, SectionPostsType } from "../../types";
import { UserPersonalIcon } from "../../components/content/sections";
import { CombineTwoArray } from "../../utils";
export const SectionStoreContext = React.createContext(
  initialDataForEachSectionState
);

type Props = {
  id: string;
  name: string;
  alias: string;
  heroImage: Image;
  logo: Image;
  navbarClassName: NavbarClassType;
};

export type SectionState = {
  FetchReducer: InitialDataForEachSectionState;
};

export const youtubeVedioTest: RegExp = /^https:\/\/youtu/;

function Sections({ name, alias, heroImage, logo, navbarClassName }: Props) {
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
      [ApiType.Popular]: state.FetchReducer[ApiType.Popular],
      [ApiType.Latest]: state.FetchReducer[ApiType.Latest],
      [ApiParamsType.SectionNavberClassName]: state.FetchReducer[ApiParamsType.SectionNavberClassName],
      [ApiParamsType.SectionPostsStart]:
        state.FetchReducer[ApiParamsType.SectionPostsStart],
      error: state.FetchReducer.error,
    })
  );
  const [popularPostsList, setPopularPostsList] = useState<SectionPosts[]>(
    [] as SectionPosts[]
  );
  const [latestPostsList, setLatestPostsList] = useState<SectionPosts[]>(
    [] as SectionPosts[]
  );
  const dispatch = useDispatch();
  let topShowCount: number = 2;

  useEffect(() => {
    // ???????????????????????????
    navbarClassName === NavbarClassType.Popular &&
      forumTitlePosition?.scrollIntoView();
    dispatch(SetSectionAlias(alias));
    dispatch(SetNavbarClassName(navbarClassName === NavbarClassType.Popular ? PostType.Popular : PostType.Latest));
    // ??????redux??????
    dispatch(SetPostId("reset"))
    dispatch(FetchPostRequest());
    dispatch(SetSectionPostsStart(0)); 
    dispatch(
      FetchSectionPostsRequest(sectionState[ApiParamsType.SectionPostsStart])
    );
  }, [path]);

  useEffect(() => {
    function getPostsList(postsType: ApiType.Popular | ApiType.Latest) {
      if (!sectionState[postsType]) {
        return;
      }
      let newPostsList: SectionPosts[] = [] as SectionPosts[];
      sectionState[postsType].result.map((articleId: string) => {
        newPostsList.push(
          sectionState[postsType].entities[postsType][articleId]
        );
      });
      if (sectionState[ApiParamsType.SectionPostsStart] !== 0) {
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
  }, [sectionState[ApiType.Popular], sectionState[ApiType.Latest]]);

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
                           
  const ClcikHandler = useCallback((id: string) => {
    dispatch(SetPostId(id));
    dispatch(SetNavbarClassName(PostType.Featured))
    dispatch(FetchPostRequest());
  }, []);

  return (
    <SectionStoreContext.Provider value={{ ...sectionState }}>
      <Wrapper navbarClassName={navbarClassName}>
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
              <li className={NavbarClassType.Popular}>
                <Link to={`/f/${alias}`}>
                  <span>??????</span>
                </Link>
              </li>
              <li className={NavbarClassType.Latest}>
                <Link to={`/f/${alias}/latest`}>
                  <span>??????</span>
                </Link>
              </li>
              <li className={NavbarClassType.Rule}>
                <Link to={`/f/${alias}/rule`}>
                  <span>??????</span>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {navbarClassName === NavbarClassType.Popular &&
          path === "/f/relationship" && (
            <div className="first-banner">
              <a
                href="https://youtu.be/ETogpwOdkSY"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img
                  src="https://megapx-assets.dcard.tw/images/120e66b3-da52-4959-b4e0-f4807e5a84a7/full.png"
                  alt="(banner)0421_Dcard??????EP27.png"
                  width="1800"
                  height="600"
                />
              </a>
            </div>
          )}

        {navbarClassName === NavbarClassType.Popular && (
          <ul>
            {popularPostsList.map((article: SectionPosts, index: number) => {
              article.categories && article.categories[0] === "??????" && (
                <ArticleItem {...article} gender={Gender[article.gender]} />
              );
              if (article.gender === Gender.D) {
                topShowCount++;
              }
              if (index > topShowCount) {
                return;
              }
              return (
                <ArticleItem
                  {...article}
                  gender={Gender[article.gender]}
                  key={article.id}
                />
              );
            })}
            {navbarClassName === NavbarClassType.Popular && (
              <div className="month-popular-wrapper">
                <h2 className="month-popular">????????????</h2>
                <div className="article-card-wrapper">
                  <div
                    className="article-card-container"
                    id="scroll-element"
                    onScroll={scrollHandler}
                  >
                    {sectionState[ApiType.Featured] &&
                      sectionState[ApiType.Featured].result.map(
                        (articleId: string) => {
                          const {
                            id,
                            title,
                            excerpt,
                            gender,
                            anonymousSchool,
                            school,
                            mediaMeta,
                          }: SectionPosts = sectionState[
                            ApiType.Featured
                            ].entities[ApiType.Featured][articleId];
                          return (
                            <Link to={`${path}/p/${id}`} className="article-card" onClick={() => ClcikHandler(id)} key={id}>
                              <h2 className="article-card-title">{title}</h2>
                              <div className="article-card-content">
                                {excerpt}
                              </div>
                              <div className="article-author-info">
                                <UserPersonalIcon gender={gender} />
                                <div className="author-identity">
                                  {anonymousSchool ? "??????" : school}
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
                            </Link>
                          );
                        }
                      )}
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
            {popularPostsList.map((article: SectionPosts, index: number) => {
              if (index <= topShowCount || index > topShowCount + 2) {
                return;
              }
              return (
                <ArticleItem
                  {...article}
                  gender={Gender[article.gender]}
                  key={article.id}
                />
              );
            })}
            {navbarClassName === NavbarClassType.Popular && <RelatedForums />}
            {popularPostsList.map((article: SectionPosts, index: number) => {
              if (index <= topShowCount + 2) {
                return;
              }
              return (
                <ArticleItem
                  {...article}
                  gender={Gender[article.gender]}
                  key={article.id}
                />
              );
            })}
          </ul>
        )}

        {navbarClassName === NavbarClassType.Latest && (
          <ul>
            {latestPostsList.map((article: SectionPosts) => {
              return (
                <ArticleItem
                  {...article}
                  gender={Gender[article.gender]}
                  key={article.id}
                />
              );
            })}
          </ul>
        )}

        {navbarClassName === NavbarClassType.Rule && (
          <div className="rule-container">
            <div className="forum-rule-title">
              <div className="rule-title-head">
                <h2>??????</h2>
                <div className="version-id">?????????2021.03.30</div>
              </div>
              <p>
                ??????????????????????????????????????????????????????????????????????????????????????????????????????
              </p>
            </div>
            <div className="rule-description">
              <h2>????????????</h2>
              <p>
                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
                            ????????????????????????????????????{" "}
                            {bulletinContent.bucketDays} ??????
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
