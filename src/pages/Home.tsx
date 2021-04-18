import { Link, useRouteMatch } from 'react-router-dom';
// style
import { Wrapper } from "../components/style/HomeWrapper";
// components
import TopNavBar from "../components/common/TopNavBar";
import * as HomeComponents from "../components/content/home";


function Home() {
  const { url } = useRouteMatch();

  return (
    <Wrapper>
      <TopNavBar />
      <nav className="forum-subnav">
        <div className="top-nav">
          <HomeComponents.TopSubNav />
        </div>
        <div className="botton-nav">
          <HomeComponents.PopularSubNav />
          <HomeComponents.RecommandSubNav />
        </div>
      </nav>
      <section className="forum-content"></section>
      <aside className="forum-msg"></aside>
    </Wrapper>
  )
}

export default Home
