import { useContext, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Forum } from "../../model";
import { Wrapper } from "../style/AsideTitleWrapper";
import { RootStoreContext } from "./SiteLayout";

// TODO: when user click arrow icon p svg nav switch style!
function AsideTitle() {
  const { forums } = useContext(RootStoreContext);
  const { path } = useRouteMatch();
  const [forum, setForum] = useState<Forum>({} as Forum);
  const [hasClickArrowIcon, setHasClickArrowIcon] = useState(false);
  function ClickArrowIconHandler(): void {
    hasClickArrowIcon && setHasClickArrowIcon(false);
    hasClickArrowIcon || setHasClickArrowIcon(true);
  }

  useEffect(() => {
    forums && forums.result.map(forumId => "/f/" + forums.entities.Forums[forumId].alias === path && setForum(forums.entities.Forums[forumId]))
  }, [])

  return (
    <Wrapper Wrapper hasClickArrowIcon = { hasClickArrowIcon } topics={forum.topics} >
      {forum.id && <header>
        <div className="forum-title-wrapper">
          <img
            src={forum.logo && forum.logo.url}
            width="20"
            height="20"
            style={{ borderRadius: "50%" }}
            loading="lazy"
            alt="Logo"
          />
          <h1>{ forum.name}</h1>
        </div>
        <div className="forum-posts-count">每天有 {Math.floor(parseInt(forum.postCount.last30Days) / 30)} 則貼文</div>
      </header>}
      {forum.id && <div className="forum-introduce">
        <div className="forum-indroduce-header" onClick={ClickArrowIconHandler}>
          <p>
            {forum.description}
          </p>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            focusable="false"
            role="img"
            aria-hidden="true"
          >
            <path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
        <nav>
          <ul className="forum-info-nav">
            {forum.topics.map((topic: string, index: number) => {
              return (
                <li key={index}>
                  <a href={`/topics/${topic}`}>{ topic}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>}
      <button className="post-article">發表文章</button>
    </Wrapper>
  );
}

export default AsideTitle;
