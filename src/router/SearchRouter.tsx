import { Route, Switch, useRouteMatch } from "react-router-dom";
import { SharingComponent } from "../components/common";
import * as Pages from "../pages";


function SearchRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} children={<SharingComponent MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/posts`} children={<div>123</div>} />
      <Route path={`${path}/forums`} children={<Pages.SearchOptions />} />
      <Route path={`${path}/topics`} children={<Pages.SearchOptions />} />
      <Route path={`${path}/personas`} children={<Pages.SearchOptions />} />
    </Switch>
  );
}

export default SearchRouter
