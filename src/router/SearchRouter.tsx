import { Route, Switch, useRouteMatch } from "react-router-dom";
import * as Pages from "../pages";


function SearchRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} children={<Pages.SearchOptions />} />
      <Route path={`${path}/posts`} children={<Pages.SearchOptions />} />
      <Route path={`${path}/forums`} children={<Pages.SearchOptions />} />
      <Route path={`${path}/topics`} children={<Pages.SearchOptions />} />
      <Route path={`${path}/personas`} children={<Pages.SearchOptions />} />
    </Switch>
  );
}

export default SearchRouter
