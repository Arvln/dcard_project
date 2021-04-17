import { Link, useRouteMatch } from 'react-router-dom';
// style
import { Wrapper } from "../components/style/HomeWrapper";
// components
import TopNavBar from "../components/common/TopNavBar";


function Home() {
  const { url } = useRouteMatch();

  return (
    <>
      <TopNavBar />
      <Wrapper>
      </Wrapper>
    </>
  )
}

export default Home
