import { useContext, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { SortForumsType } from "../../pages/sections/ForumPopular";
import { SortForumsByLast30DaysPostCount } from "../../utils";
import { Wrapper } from "../style/SubNavItemsWrapper";
import { RootStoreContext } from "./SiteLayout";

// TODO: when user in forum page, switch nav bar color
function PopularSubNav() {
  const { FORUMS } = useContext(RootStoreContext);
  const { path } = useRouteMatch();
  const [popularForumsList, setPopularForumsList] = useState<
    SortForumsType[] | void
  >([] as SortForumsType[]);
  useEffect(() => {
    setPopularForumsList(SortForumsByLast30DaysPostCount(FORUMS, 8));
  }, [FORUMS]);

  return (
    <Wrapper>
      <li>
        <h3>即時熱門看板</h3>
      </li>
      {popularForumsList &&
        popularForumsList.map(
          ({ forumId, alias, name, logo }: SortForumsType) => {
            return (
              <li
                style={{
                  backgroundColor:
                    path === `/f/${alias}`
                      ? "rgba(255, 255, 255, 0.3)"
                      : "transparent",
                }}
                key={forumId}
              >
                <Link to={`/f/${alias}`}>
                  <img
                    src={logo && logo.url}
                    width="30"
                    height="30"
                    loading="lazy"
                    alt="Logo"
                  />
                  <span>{name}</span>
                </Link>
              </li>
            );
          }
        )}
      {popularForumsList && <li>
        <Link to="/forum/popular">
          <div className="icon-wrapper"></div>
          <span>更多</span>
        </Link>
      </li>}
    </Wrapper>
  );
}

export default PopularSubNav;
