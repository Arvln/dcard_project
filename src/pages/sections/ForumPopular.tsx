import { Link } from "react-router-dom";
import { Wrapper } from "../style/ForumPopularWrapper";
import { FollowButton } from "../../components/common";
import { RootStoreContext } from "../../components/common/SiteLayout";
import { useContext, useEffect, useState } from "react";
import { Image } from "../../model";
import { SortForumsByLast30DaysPostCount } from "../../utils";

export type SortForumsType = {
  forumId: string;
  alias: string;
  name: string;
  logo: Image;
  last30DaysPostCount: number;
};

function ForumPopular() {
  const { forums } = useContext(RootStoreContext);
  const [popularForumsList, setPopularForumsList] = useState<
    SortForumsType[] | void
  >([] as SortForumsType[]);
  useEffect(() => {
    setPopularForumsList(SortForumsByLast30DaysPostCount(forums, 240));
  }, [forums]);

  return (
    <Wrapper>
      <div className="popular-forums-container">
        <h1>即時熱門看板</h1>
        {popularForumsList && (
          <ul>
            {popularForumsList.map(
              (
                { forumId, alias, name, logo }: SortForumsType,
                index: number
              ) => {
                return (
                  <li className="popluar-forum" key={forumId}>
                    <Link to={`/f/${alias}`}>
                      <div className="popular-forum-no" style={{color: `${index + 1 < 4 && "rgb(234, 92, 92)"}`}}>{index + 1}</div>
                      <img
                        src={logo && logo.url}
                        width="48"
                        height="48"
                        loading="lazy"
                        alt="Logo"
                        className="popular-forum-icon"
                      />
                      <div className="popular-forum-title">{name}</div>
                      <FollowButton />
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        )}
      </div>
    </Wrapper>
  );
}

export default ForumPopular;
