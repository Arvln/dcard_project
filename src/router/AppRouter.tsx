import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { SharingComponent } from "../components/common";
import * as Pages from "../pages";

function AppRouter() {
  return (
    <Router>
      {/* index */}
      <Route exact path="/">
        <Redirect to="/f" />
      </Route>
      <Route
        exact
        path="/f"
        children={<SharingComponent MainCreator={Pages.Home} />}
      />

      {/* nav */}
      <Route path="/search" children={<Pages.Search />} />
      <Route path="/signup" children={<Pages.SignUp />} />
      <Route path="/terms" children={<Pages.Trems />} />
      <Route path="/faq" children={<Pages.Faq />} />
      <Route path="/brand" children={<Pages.Brand />} />
      <Route path="/download" children={<Pages.Download />} />
      <Route path="/my" children={<Pages.User />} />

      {/* aside */}
      <Route path="/forum/all" children={<Pages.ForumAll />} />
      <Route path="/forum/popular" children={<Pages.ForumPopular />} />
      <Route path="/goods" children={<Pages.Goods />} />
      <Route path="/def/gamezone" children={<Pages.Gamezone />} />
      <Route path="/f/sections" children={<Pages.Sections />} />
    </Router>
  );
}

export default AppRouter;
