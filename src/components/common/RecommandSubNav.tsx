import { Link, useRouteMatch } from "react-router-dom";
import { Wrapper } from "../style/SubNavItemsWrapper";
import { useContext } from "react";
import { RootStoreContext } from "../common/SiteLayout";
import { Forum } from "../../model";
import { ApiType } from "../../store/redux/initial_data_for_app/FetchApiType";

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
  const { FORUMS, SELECTIONS } = useContext(RootStoreContext);

  return (
    <Wrapper>
      <li>
        <h3>Dcard 精選看板</h3>
      </li>
      {FORUMS &&
        SELECTIONS &&
        SELECTIONS.result.map((recommandForumId: string) => {
          const recommandForum: Forum = FORUMS.entities[ApiType.Forums][recommandForumId];
          return (
            <RecommandForum {...recommandForum} key={recommandForum.id} />
          );
        })}
    </Wrapper>
  );
}

export default RecommandSubNav;
