import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// sharing part
import { SharingComponent } from "../components/common";
// pages
import * as Pages from "../pages";
// search router
import SearchRouter from "./SearchRouter";

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
      <Route
        path="/f/latest"
        children={<SharingComponent MainCreator={Pages.Home} />}
      />
      <Route
        path="/f/pessoal"
        children={<SharingComponent MainCreator={Pages.Home} />}
      />

      {/* nav */}
      <Route path="/search" children={<SearchRouter />} />
      <Route path="/signup" children={<Pages.SignUp />} />
      <Route path="/terms" children={<Pages.Trems />} />
      <Route path="/brand" children={<Pages.Brand />} />
      <Route path="/download" children={<Pages.Download />} />
      <Route path="/my" children={<Pages.User />} />

      {/* aside */}
      <Route path="/forum/all" children={<SharingComponent MainCreator={Pages.ForumAll} />} />
      <Route path="/forum/popular" children={<Pages.ForumPopular />} />
      <Route path="/goods" children={<Pages.Goods />} />
      <Route path="/def/gamezone" children={<SharingComponent MainCreator={Pages.Gamezone} />} />
      <Route
        exact
        path="/f/sections"
        children={<SharingComponent MainCreator={Pages.Sections} />}
      />
      <Route
        path="/f/sections/latest"
        children={<SharingComponent MainCreator={Pages.Sections} />}
      />
      <Route
        path="/f/sections/rule"
        children={<SharingComponent MainCreator={Pages.Sections} />}
      />
    </Router>
  );
}

export default AppRouter;
