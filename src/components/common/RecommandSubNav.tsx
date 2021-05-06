import { Link } from "react-router-dom";
import { Wrapper } from "../style/SubNavItemsWrapper";
import { useContext } from "react";
import { RootStoreContext } from "../common/SiteLayout";

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
  return (
    <li>
      <Link to={`/f/${alias}`}>
        <img src={logo.url} width="30" height="30" loading="lazy" alt="Logo" />
        <span>{name}</span>
      </Link>
    </li>
  );
}

function RecommandSubNav() {
  // const { loading, data } = useContext(SelectionForumsContext);

  // return (
  //   <Wrapper>
  //     <li>
  //       <h3>Dcard 精選看板</h3>
  //     </li>
  //     {loading ||
  //       data.map((selectionForum) => (
  //         <RecommandForum {...selectionForum} key={selectionForum.id} />
  //       ))}
  //   </Wrapper>
  // );
}

export default RecommandSubNav;
