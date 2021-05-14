import { Link } from "react-router-dom";
import { Wrapper } from "../style/SectionsArticleWrapper";
import { ArticleCommentItem, FollowButton } from "../../components/common";
import { InitialPostData } from "../../store/redux/section_posts/InitialDataState";
import { useSelector } from "react-redux";
import { ApiType, PostType, SectionPostsType } from "../../types";
import { SectionPosts } from "../../model";
import { UserPersonalIcon } from "../../components/content/sections";
import { TransformTimeFormat } from "../../utils";

type SectionArticleState = {
  FetchReducer: InitialPostData
}

function SectionsArticles() {
  const postState: InitialPostData = useSelector((state: SectionArticleState) => ({
    loading: state.FetchReducer.loading,
    [ApiType.Post]: state.FetchReducer[ApiType.Post],
    [ApiType.Forums]: state.FetchReducer[ApiType.Forums],
    navbarClassName: state.FetchReducer.navbarClassName,
    sectionAlias: state.FetchReducer.sectionAlias,
    error: state.FetchReducer.error
  }))
  const post: SectionPosts = postState[ApiType.Post];

  return (
    <Wrapper>
      {post && <div className="article-wrapper" key={post.id}>
        <header>
          <div className="article-author-state">
            <UserPersonalIcon gender={post.gender} />
            {<div className="article-author-type">{post.anonymousSchool ? "匿名" : post.school}</div>}
          </div>
          <div className="cancel-button">
            <Link to={`/${postState.sectionAlias === SectionPostsType.Gamazone ? "def" : "f"}/${postState.sectionAlias === SectionPostsType.Index ? "" : postState.sectionAlias + "/"}${postState.navbarClassName === PostType.Latest ? "latest": ""}`}>
              <button aria-label="close" type="button">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  focusable="false"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M13.2 12l5.6-5.6a.4.4 0 000-.6l-.6-.6a.4.4 0 00-.6 0L12 10.8 6.4 5.2a.4.4 0 00-.6 0l-.6.6a.4.4 0 000 .6l5.6 5.6-5.6 5.6a.4.4 0 000 .6l.6.6a.4.4 0 00.6 0l5.6-5.6 5.6 5.6a.4.4 0 00.6 0l.6-.6a.4.4 0 000-.6z"></path>
                </svg>
              </button>
            </Link>
          </div>
        </header>
        <section>
          <h1>{post.title}</h1>
          <div className="article-record">
            <Link to={`/f/${post.forumAlias}`} className="to-section-link">
              {post.forumName}
            </Link>
            <div className="article-published-time">{TransformTimeFormat(post.updatedAt)}</div>
          </div>
          <div className="article-content-container">
            <div className="article-content">
              <span>{post.content}</span>
            </div>
            <div className="article-category-label">
              {post.topics.map((topic: string, index: number) => {
                return <Link to="#" key={index}>{topic}</Link>
              })}
            </div>
            <div className="article-current-state">
              <div className="article-apply-wrapper">
                <div className="article-moods-image">
                  <img
                    src="https://megapx-assets.dcard.tw/images/52057289-337a-4f2f-88c0-cb8a77ee422a/orig.png"
                    title="愛心"
                    width="28"
                    height="28"
                    style={{ zIndex: 3 }}
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/2484e51a-2cdc-4f0e-a4ea-8d80b4589762/orig.png"
                    title="愛心"
                    width="28"
                    height="28"
                    style={{ zIndex: 2 }}
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/039a093e-93ec-476c-976c-4a53b9b6d11c/orig.png"
                    title="愛心"
                    width="28"
                    height="28"
                    style={{ zIndex: 1 }}
                  />
                </div>
                <div className="article-moods-count">{post.likeCount}</div>
                <div className="article-apply-count">・回應 {post.commentCount}</div>
              </div>
              <div className="article-mark">
                <button title="mood" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.5 4A5.49 5.49 0 0012 6.344 5.49 5.49 0 007.5 4 5.5 5.5 0 002 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0016.5 4z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button title="save" type="button">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M17.65 21.39L12 17.5l-5.65 3.88A1.5 1.5 0 014 20.15V5a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 5v15.15a1.5 1.5 0 01-2.35 1.24z"></path>
                  </svg>
                </button>
                <button title="notify" type="button">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M12 20.5a1.93 1.93 0 01-1.31-.5H8.85A3.48 3.48 0 0012 22a3.48 3.48 0 003.15-2h-1.84a1.93 1.93 0 01-1.31.5zm7.97-4.5a2 2 0 00-.37-1.03l-1.1-1.47v-3a6 6 0 00-4.03-5.66 2.48 2.48 0 00.03-.34A2.5 2.5 0 0012 2a2.5 2.5 0 00-2.5 2.5 2.48 2.48 0 00.03.34A6 6 0 005.5 10.5v3l-1.1 1.47A2 2 0 004.03 16H4v1a2 2 0 002 2h12a2 2 0 002-2v-1zM11 4.5a1 1 0 011-1 1 1 0 011 1v.03a6.24 6.24 0 00-.5-.03h-1c-.17 0-.33.01-.5.03V4.5z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="article-info">
              <h4>文章資訊</h4>
              <div className="forums-label">
                <img
                  src="https://megapx-assets.dcard.tw/images/c99966a1-03f9-4a69-86d4-df979a970496/full.jpeg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="Logo"
                  style={{ borderRadius: "50%" }}
                />
                <div className="forums-label-info">
                  <h5>{post.forumName}</h5>
                  <span>每天有 {
                    Math.floor(parseInt(postState[ApiType.Forums].entities[ApiType.Forums][post.forumId].postCount.last30Days) / 30)
                  } 則貼文</span>
                </div>
                <FollowButton />
              </div>
            </div>
          </div>
        </section>
        <div className="popular-comment">
          <h2>熱門回應</h2>
          {post.reactions.map((reaction: { id: string, count: number }) => <ArticleCommentItem {...reaction} key={reaction.id} />)}
        </div>
        <div className="related-article-maybe-interest">
          <h4>你可能感興趣的文章</h4>
          <ul>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="article-comment-wrapper">
          <div className="article-comment">
            <h4>共 {post.reactions.length} 則回應</h4>
          </div>
          {post.reactions.map((reaction: { id: string, count: number }) => <ArticleCommentItem {...reaction} key={reaction.id} />)}
        </div>
        <div className="article-public-comment-bar-wrapper">
          <input type="text" placeholder="回應……" />
          <button title="mood" type="button" className="apply-like-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M16.5 4A5.49 5.49 0 0012 6.344 5.49 5.49 0 007.5 4 5.5 5.5 0 002 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0016.5 4z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button title="save" type="button">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path d="M17.65 21.39L12 17.5l-5.65 3.88A1.5 1.5 0 014 20.15V5a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 5v15.15a1.5 1.5 0 01-2.35 1.24z"></path>
            </svg>
          </button>
          <button title="more" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <g transform="translate(148)">
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(-138 4)"
                ></circle>
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(-138 10)"
                ></circle>
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(-138 16)"
                ></circle>
              </g>
            </svg>
          </button>
          <button title="to-bottom" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.72 12.988L12.707 18a1 1 0 01-1.414 0L8.28 14.988a.751.751 0 01.531-1.281H11v-7a1 1 0 012 0v7h2.189a.751.751 0 01.531 1.281z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
          </button>
        </div>
      </div>}
    </Wrapper >
  );
}

export default SectionsArticles;
