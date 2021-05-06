import { Route, Switch, useRouteMatch } from "react-router-dom";
import { SiteLayout } from "../components/common";
import * as Pages from "../pages";


function SearchRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} children={<SiteLayout MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/posts`} children={<SiteLayout MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/forums`} children={<SiteLayout MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/topics`} children={<SiteLayout MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/personas`} children={<SiteLayout MainCreator={Pages.SearchOptions} />} />
    </Switch>
  );
}

export default SearchRouter
