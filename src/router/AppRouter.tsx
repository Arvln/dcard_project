import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import { SiteLayout } from "../components/common";
import * as Pages from "../pages";
import SearchRouter from "./SearchRouter";
import GoodsRouter from "./GoodsRouter";
import { useDispatch, useSelector } from "react-redux";
import { InitialDataForAppState } from "../store/redux/initial_data_for_app/InitialDataState";
import { RootState } from "../components/common/SiteLayout";
import { Forum } from "../model";
import { FetchRequest } from "../store/redux/initial_data_for_app/FetchActions";
import { ApiType } from "../types/FetchApiType";
import { NavbarClassType } from "../types";

function AppRouter() {
  const rootState: InitialDataForAppState = useSelector((state: RootState) => ({
    loading: state.FetchReducer.loading,
    [ApiType.Forums]: state.FetchReducer[ApiType.Forums],
    [ApiType.Categorization]: state.FetchReducer[ApiType.Categorization],
    [ApiType.Categories]: state.FetchReducer[ApiType.Categories],
    [ApiType.Selections]: state.FetchReducer[ApiType.Selections],
    [ApiType.Bulletin]: state.FetchReducer[ApiType.Bulletin],
    error: state.FetchReducer.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchRequest())
  }, [])

  return (
    <Router>
      {/* index */}
      <Route exact path="/">
        <Redirect to="/f" />
      </Route>

      <Route
        exact
        path="/f"
        children={
          <SiteLayout
            MainCreator={
              <Pages.Home navbarClassName={NavbarClassType.Popular} />
            }
          />
        }
      />
      <Route
        path="/f/p/*"
        children={
          <SiteLayout
            MainCreator={
              <Pages.Home navbarClassName={NavbarClassType.Popular} />
            }
          />
        }
      />
      <Route
        path="/f/latest"
        children={
          <SiteLayout
            MainCreator={
              <Pages.Home navbarClassName={NavbarClassType.Latest} />
            }
          />
        }
      />
      <Route
        path="/f/pessoal"
        children={
          <SiteLayout
            MainCreator={
              <Pages.Home navbarClassName={NavbarClassType.Pessoal} />
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
      <Route exact path="/my" children={<Pages.User />} />
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
      {rootState[ApiType.Forums] &&
        rootState[ApiType.Forums].result.map((forumId: string) => {
          const forum: Forum = rootState[ApiType.Forums].entities[ApiType.Forums][forumId];
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
                        navbarClassName={NavbarClassType.Popular}
                      />
                    }
                  />
                }
              />
              <Route
                path={`/f/${forum.alias}/p`}
                children={
                  <SiteLayout
                    MainCreator={
                      <Pages.Sections
                        {...forum}
                        navbarClassName={NavbarClassType.Popular}
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
                        navbarClassName={NavbarClassType.Latest}
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
                        navbarClassName={NavbarClassType.Rule}
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
