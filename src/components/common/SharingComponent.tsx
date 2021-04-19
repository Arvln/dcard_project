import { Link, useRouteMatch } from "react-router-dom";
// style
import { Wrapper } from "../style/SharingComponentWrapper";
// components
import TopNavBar from "./TopNavBar";
import TopSubNav from "./TopSubNav";
import PopularSubNav from "./PopularSubNav";
import RecommandSubNav from "./RecommandSubNav";


type MainCreatorProps = {
  MainCreator: () => JSX.Element;
}

function SharingComponent({MainCreator}: MainCreatorProps) {
  const { url } = useRouteMatch();

  return (
    <Wrapper>
      <TopNavBar />
      <nav className="forum-subnav">
        <div className="top-nav">
          <TopSubNav />
        </div>
        <div className="botton-nav">
          <PopularSubNav />
          <RecommandSubNav />
        </div>
      </nav>
      <section className="forum-content">
        <MainCreator />
      </section>
      <aside className="forum-msg"></aside>
    </Wrapper>
  );
}

export default SharingComponent;
