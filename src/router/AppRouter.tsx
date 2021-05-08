import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { SiteLayout } from "../components/common";
import * as Pages from "../pages";
import SearchRouter from "./SearchRouter";
import GoodsRouter from "./GoodsRouter";
import { useDispatch, useSelector } from "react-redux";
import { FetchRequest } from "../store/redux/FetchActions";
import { InitialState } from "../store/redux/FetchReducer";
import { RootState } from "../components/common/SiteLayout";
import { Forum } from "../model";
import { NavBarClassName } from "../pages/sections/Sections";

function AppRouter() {
  const rootState: InitialState = useSelector((state: RootState) => ({
    loading: state.FetchReducer.loading,
    forums: state.FetchReducer.forums,
    categorization: state.FetchReducer.categorization,
    categories: state.FetchReducer.categories,
    selections: state.FetchReducer.selections,
    bulletin: state.FetchReducer.bulletin,
    error: state.FetchReducer.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchRequest());
  }, []);

  return (
    <Router>
      {/* index */}
      <Route exact path="/">
        <Redirect to="/f" />
      </Route>

      {/* index */}
      <Route
        exact
        path="/f"
        children={
          <SiteLayout
            MainCreator={
              <Pages.Home navBarClassName={NavBarClassName.Popular} />
            }
          />
        }
      />

      <Route
        path="/f/latest"
        children={
          <SiteLayout
            MainCreator={
              <Pages.Home navBarClassName={NavBarClassName.Latest} />
            }
          />
        }
      />
      <Route
        path="/f/pessoal"
        children={
          <SiteLayout
            MainCreator={
              <Pages.Home navBarClassName={NavBarClassName.Pessoal} />
            }
          />
        }
      />

      {/* nav */}
      <Route path="/search" children={<SearchRouter />} />
      <Route path="/signup" children={<Pages.SignUp />} />
      <Route path="/terms" children={<Pages.Trems />} />
      <Route path="/brand" children={<Pages.Brand />} />
      <Route path="/download" children={<Pages.Download />} />
      <Route path="/my" children={<Pages.User />} />
      <Route path="/my/configs" children={<Pages.User />} />

      {/* aside */}
      <Route
        path="/forum/all"
        children={<SiteLayout MainCreator={<Pages.ForumAll />} />}
      />
      <Route
        path="/forum/popular"
        children={<SiteLayout MainCreator={<Pages.ForumPopular />} />}
      />
      <Route path="/goods" children={<GoodsRouter />} />
      <Route
        path="/def/gamezone"
        children={<SiteLayout MainCreator={<Pages.Gamezone />} />}
      />
      {rootState.forums &&
        rootState.forums.result.map((forumId: string) => {
          const forum: Forum = rootState.forums.entities.Forums[forumId];
          return (
            <React.Fragment key={forum.id}>
              <Route
                exact
                path={`/f/${forum.alias}`}
                children={
                  <SiteLayout
                    MainCreator={
                      <Pages.Sections
                        {...forum}
                        navBarClassName={NavBarClassName.Popular}
                      />
                    }
                  />
                }
              />
              <Route
                path={`/f/${forum.alias}/latest`}
                children={
                  <SiteLayout
                    MainCreator={
                      <Pages.Sections
                        {...forum}
                        navBarClassName={NavBarClassName.Latest}
                      />
                    }
                  />
                }
              />
              <Route
                path={`/f/${forum.alias}/rule`}
                children={
                  <SiteLayout
                    MainCreator={
                      <Pages.Sections
                        {...forum}
                        navBarClassName={NavBarClassName.Rule}
                      />
                    }
                  />
                }
              />
            </React.Fragment>
          );
        })}

      {/* articles */}
      <Route path="*/p/*" children={<Pages.SectionsArticle />} />
    </Router>
  );
}

export default AppRouter;
