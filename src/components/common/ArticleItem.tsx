import { Link, useRouteMatch } from "react-router-dom";
import { Gender } from "../../types";
import { MediaMeta } from "../../model";
import { UserPersonalIcon } from "../content/sections";
import { Wrapper } from "../style/ArticleItemWrapper";
import { youtubeVedioTest } from "../../pages/sections/Sections";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FetchPostRequest, SetPostId } from "../../store/redux/section_posts/FetchSectionPostsActions";

type Props = {
  id: string;
  school: string;
  title: string;
  excerpt: string;
  likeCount: number;
  commentCount: number;
  anonymousSchool: boolean;
  gender: Gender;
  mediaMeta: MediaMeta[];
  categories?: string[];
};

export const vividVedioTest: RegExp = /^https:\/\/www\.dcard\.tw\/v2\/vivid\/videos/;

function ArticleItem({
  id,
  school,
  title,
  excerpt,
  likeCount,
  commentCount,
  anonymousSchool,
  gender,
  mediaMeta,
  categories,
}: Props) {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const ClcikHandler = useCallback(() => {
    dispatch(SetPostId(id));
    dispatch(FetchPostRequest());
  }, [id]);

  return (
    <Wrapper mediaMeta={mediaMeta}>
      <Link to={`${path}/p/${id}`} onClick={ClcikHandler}>
        <article className="article-conatiner">
          <div className="article-header">
            <div className="category-icon">
              <UserPersonalIcon gender={gender} />
            </div>
            <div className="category-info">
              {anonymousSchool ? "匿名" : school}
            </div>
            {gender === Gender.D && <div className="category-top">置頂</div>}
          </div>
          <div className="article-title">
            <h1>{title}</h1>
          </div>
          <div className="article-content">
            <p>{excerpt}</p>
          </div>
          <div className="article-footer">
            <div className="moods">
              <img
                src="https://megapx-assets.dcard.tw/images/52057289-337a-4f2f-88c0-cb8a77ee422a/orig.png"
                title="愛心"
                style={{ zIndex: 3 }}
              />
              {categories ? null : (
                <>
                  <img
                    src="https://megapx-assets.dcard.tw/images/042b27f9-b507-473b-8f36-654aedcc37df/orig.png"
                    title="森77"
                    style={{ zIndex: 2 }}
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/9a7cc9af-9f81-43ea-8d9b-968a6441ae51/orig.png"
                    title="哈哈"
                    style={{ zIndex: 1 }}
                  />
                </>
              )}
              <span>{likeCount}</span>
            </div>
            <div className="comment">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgb(51, 151, 207)"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M1.3330000000000002 12a10.667 10.667 0 1021.334 0 10.667 10.667 0 10-21.334 0zM15.5 6.5h-7A3.5 3.5 0 005 10v3.5A3.5 3.5 0 008.5 17H9v1.369a.75.75 0 001.238.57L12.5 17h3a3.5 3.5 0 003.5-3.5V10a3.5 3.5 0 00-3.5-3.5z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span>{commentCount}</span>
            </div>
            <div className="save">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgb(225, 225, 225)"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path d="M17.65 21.39L12 17.5l-5.65 3.88A1.5 1.5 0 014 20.15V5a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 5v15.15a1.5 1.5 0 01-2.35 1.24z"></path>
              </svg>
              <span>收藏</span>
            </div>
          </div>
          {mediaMeta[0] &&
            !vividVedioTest.test(mediaMeta[0].url) &&
            !youtubeVedioTest.test(mediaMeta[0].url) && (
              <img
                className="article-img"
                src={mediaMeta[0].url}
                width="84px"
                height="84px"
                alt=""
                loading="lazy"
              />
            )}
        </article>
      </Link>
    </Wrapper>
  );
}

export default ArticleItem;
