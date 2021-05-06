import { useContext, useEffect, useState } from "react";
import { Wrapper } from "../style/ForumAllWrapper";
import { FollowButton } from "../../components/common";
import { RootStoreContext } from "../../components/common/SiteLayout";
import { Forum } from "../../model";
import { Link } from "react-router-dom";

function ForumAll() {
  const [isClickForumId, setIsClickForumId] = useState("");
  const [categoryForum, setCategoryForum] = useState<Forum[]>([] as Forum[]);
  function clickArrowIconHandler(id: string): void {
    const category: Forum[] = [];
    id !== isClickForumId && setIsClickForumId(id);
    id === isClickForumId && setIsClickForumId("");
    categories.entities.Categories[id].forumIds.map((forumId: string) => {
      category.push(forums.entities.Forums[forumId]);
    });
    setCategoryForum(category);
  }
  const { loading, forums, categorization, categories, error } = useContext(
    RootStoreContext
  );
  console.log(categoryForum);

  return (
    <Wrapper>
      <div className="all-forums-title">
        <h1>看板分類</h1>
      </div>
      <ul>
        {loading ||
          error ||
          categorization.result.map((id: string) => {
            return (
              <li key={id}>
                <header onClick={() => clickArrowIconHandler(id)}>
                  <h3>{categorization.entities.Categorization[id].name}</h3>
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
                    maxHeight: `${id === isClickForumId ? `440px` : 0}`,
                  }}
                >
                  <ol>
                    {categoryForum.map((forum: Forum) => {
                      return (
                        <li key={forum.id}>
                          <Link to={`/f/${forum.alias}`}>
                            <article>
                              <img
                                src={forum.logo.url}
                                width="28"
                                height="28"
                                loading="lazy"
                                alt="Logo"
                              />
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
