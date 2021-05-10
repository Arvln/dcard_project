import { useContext, useEffect, useState } from "react";
import { Wrapper } from "../style/ForumAllWrapper";
import { FollowButton } from "../../components/common";
import { RootStoreContext } from "../../components/common/SiteLayout";
import { Forum } from "../../model";
import { Link } from "react-router-dom";
import { ApiType } from "../../store/redux/initial_data_for_app/FetchApiType";

function ForumAll() {
  const [isClickForumId, setIsClickForumId] = useState("");
  const [categoryForum, setCategoryForum] = useState<Forum[]>([] as Forum[]);
  function clickArrowIconHandler(id: string): void {
    const category: Forum[] = [];
    id !== isClickForumId && setIsClickForumId(id);
    id === isClickForumId && setIsClickForumId("");
    CATEGORIES.entities[ApiType.Categories][id].forumIds &&
      CATEGORIES.entities[ApiType.Categories][id].forumIds.map((forumId: string) => {
        category.push(FORUMS.entities[ApiType.Forums][forumId]);
      });
    setCategoryForum(category);
  }
  const { FORUMS, CATEGORIZATION, CATEGORIES } = useContext(
    RootStoreContext
  );

  return (
    <Wrapper>
      <div className="all-forums-title">
        <h1>看板分類</h1>
      </div>
      <ul>
        { CATEGORIZATION && CATEGORIZATION.result.map((id: string) => {
            return (
              <li key={id}>
                <header onClick={() => clickArrowIconHandler(id)}>
                  <h3>{CATEGORIZATION.entities[ApiType.Categorization][id].name}</h3>
                  <div
                    className="forums-arrow-icon-wrapper"
                    style={{
                      transform: `${
                        id === isClickForumId ? `rotate(180deg)` : `rotate(0)`
                      }`,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      width="18"
                      height="18"
                      role="img"
                      aria-hidden="true"
                    >
                      <path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                    </svg>
                  </div>
                </header>
                <div
                  className="forums-list"
                  style={{
                    maxHeight: `${
                      id === isClickForumId
                        ? 44 * CATEGORIZATION.result.length + `px`
                        : 0
                    }`,
                  }}
                >
                  <ol>
                    {categoryForum.map((forum: Forum) => {
                      return (
                        <li key={forum.id}>
                          <Link to={`/f/${forum.alias}`}>
                            <article>
                              {forum.logo === undefined && <svg viewBox="0 0 100 100" focusable="false" width="28" height="28" role="img" aria-hidden="true" fill="rgb(227, 227, 227)"><path d="M100 50A50 50 0 110 50a50 50 0 01100 0"></path><g fill="#FFF"><path d="M61 43.7a4.9 4.9 0 00-5 5c0 2.6 2.3 4.8 5 4.8s4.9-2.2 4.9-4.9-2.2-4.9-5-4.9"></path><path d="M69.7 55.8l-.1 1.8a3.9 3.9 0 01-3.2.6c-1.6-.5-3.1-1.4-4.3-2.5l-4.1 4c2.5 2.5 5.7 4.2 9.4 4.7-3 5.3-8.8 9-15.3 9H34.5V49.5a44 44 0 0029.4-17.2c1.5 1 2.8 2.2 3.7 3.5 1.3 2.5 2 5.3 2 8.3v11.6zM52 20.8H28.6v58.4h23.5c13 0 23.4-10.5 23.4-23.4V44.2a23.4 23.4 0 00-23.4-23.4z"></path></g><path fill="none" d="M20.8 20.8h58.3v58.3H20.8z"></path></svg>}
                              {forum.logo === undefined || <img
                                src={forum.logo.url}
                                width="28"
                                height="28"
                                loading="lazy"
                                alt="Logo"
                              />}
                              <h4>{forum.name}</h4>
                              <FollowButton />
                            </article>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </li>
            );
          })}
      </ul>
    </Wrapper>
  );
}

export default ForumAll;
