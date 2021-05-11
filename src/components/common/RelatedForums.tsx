import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../style/RelatedForumsWrapper";
import { SectionStoreContext } from "../../pages/sections/Sections";
import { ApiType } from "../../types/FetchApiType";
import { Forum } from "../../model";
import { NormalizedState } from "../../store/redux/initial_data_for_app/InitialDataState";

type Props = {
  gamezoneRelated?: NormalizedState
}

function RelatedForums({ gamezoneRelated }: Props) {
  let relatedPosts: NormalizedState = {} as NormalizedState;
  const { RELATED } = useContext(SectionStoreContext);
  const [isReachLeftEnd, setIsReachLeftEnd] = useState(true);
  const [isReachRightEnd, setIsReachRightEnd] = useState(false);
  let scrollElement: HTMLElement | null;

  function leftArrowIconHandler(): void {
    scrollElement = document.getElementById("related-forums-scroll-element");
    if (isReachLeftEnd || !scrollElement) {
      return;
    }
    scrollElement.scrollLeft -= 154;
  }

  function rightArrowIconHandler(): void {
    scrollElement = document.getElementById("related-forums-scroll-element");
    if (isReachRightEnd || !scrollElement) {
      return;
    }
    scrollElement.scrollLeft += 154;
  }

  function scrollHandler(): void {
    scrollElement = document.getElementById("related-forums-scroll-element");

    if (scrollElement?.scrollLeft === 0) {
      setIsReachLeftEnd(true);
    } else if (scrollElement?.scrollLeft === 154) {
      setIsReachRightEnd(true);
    } else {
      setIsReachLeftEnd(false);
      setIsReachRightEnd(false);
    }
  }

  if (RELATED || gamezoneRelated) {
    relatedPosts = RELATED || gamezoneRelated;
  }

  return (
    <Wrapper>
      <h1>相關看板</h1>
      <div className="related-forums-wrapper">
        <div
          className="left-arrow-icon-wrapper"
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
          className="related-forums-container"
          id="related-forums-scroll-element"
          onScroll={scrollHandler}
        >
          {relatedPosts.result && relatedPosts.result.map((forumId: string, index: number) => {
              if (index === 0 || index > 5) {
                return;
              }
              const {
                id,
                alias,
                name,
                heroImage,
                logo,
                postCount,
              }: Forum = relatedPosts.entities[ApiType.Related][forumId];
              return (
                <Link
                  to={`/f/${alias}`}
                  className="related-forum-card"
                  key={id}
                >
                  <img
                    src={heroImage && heroImage.url}
                    className="logo-img"
                    alt="Banner"
                  />
                  <div className="related-forum-card-content">
                    <img
                      src={logo && logo.url}
                      width="40"
                      height="40"
                      loading="lazy"
                      alt="Logo"
                    />
                    <h3>{name}</h3>
                    <span>
                      每天有{postCount ? Math.floor(parseInt(postCount.last30Days) / 30) : 10}
                      則貼文
                    </span>
                  </div>
                </Link>
              );
            })}
        </div>
        <div
          className="right-arrow-icon-wrapper"
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
      <Link to="#">查看更多看板</Link>
      {/* <Link to="/search/forums">查看更多看板</Link> */}
    </Wrapper>
  );
}

export default RelatedForums;
