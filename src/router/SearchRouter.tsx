import { Route, Switch, useRouteMatch } from "react-router-dom";
import { SharingComponent } from "../components/common";
import * as Pages from "../pages";


function SearchRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} children={<SharingComponent MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/posts`} children={<SharingComponent MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/forums`} children={<SharingComponent MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/topics`} children={<SharingComponent MainCreator={Pages.SearchOptions} />} />
      <Route path={`${path}/personas`} children={<SharingComponent MainCreator={Pages.SearchOptions} />} />
    </Switch>
  );
}

export default SearchRouter
