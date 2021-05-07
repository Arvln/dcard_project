import { Link, useRouteMatch } from "react-router-dom";
import { Wrapper } from "../style/SubNavItemsWrapper";
import { useContext } from "react";
import { RootStoreContext } from "../common/SiteLayout";
import { Forum } from "../../model";

type Props = {
  alias: string;
  logo: {
    url: string;
    type: string;
    width: number;
    height: number;
  };
  name: string;
};

function RecommandForum({ alias, logo, name }: Props) {
  const { path } = useRouteMatch();
  return (
    <li
      style={{
        backgroundColor:
          path === `/f/${alias}` ? "rgba(255, 255, 255, 0.3)" : "transparent",
      }}
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

function RecommandSubNav() {
  const { forums, selections } = useContext(RootStoreContext);

  return (
    <Wrapper>
      <li>
        <h3>Dcard 精選看板</h3>
      </li>
      {forums &&
        selections &&
        selections.result.map((recommandForumId: string) => {
          const recommandForum: Forum = forums.entities.Forums[recommandForumId];
          return (
            <RecommandForum {...recommandForum} key={recommandForum.id} />
          );
        })}
    </Wrapper>
  );
}

export default RecommandSubNav;
