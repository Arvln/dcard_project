import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { SiteLayout } from "../components/common";
import * as Pages from "../pages";
import SearchRouter from "./SearchRouter";
import GoodsRouter from "./GoodsRouter";
import { useDispatch, useSelector } from "react-redux";
import { FetchRequest } from "../store/redux/FetchActions";
import { Forum } from "../model";

type RootState = {
  FetchReducer: {
    loading: boolean;
    data: Forum[];
    error: string;
  };
};

function AppRouter() {
  const selectionForums = useSelector((state: RootState) => ({
    loading: state.FetchReducer.loading,
    data: state.FetchReducer.data,
    error: state.FetchReducer.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchRequest());
  }, []);

  const selectionForumsUrl = [];
  // for (let selectionForum of selectionForums.data) {
  //   selectionForumsUrl.push({
  //     id: selectionForum.id,
  //     url: `/f/${selectionForum.alias}`,
  //   });
  // }

  return (
    <Router>
      {/* index */}
      <Route exact path="/">
        <Redirect to="/f" />
      </Route>
      <Route
        path="/f/latest"
        children={<SiteLayout MainCreator={Pages.Home} />}
      />
      <Route
        path="/f/pessoal"
        children={<SiteLayout MainCreator={Pages.Home} />}
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
        children={<SiteLayout MainCreator={Pages.ForumAll} />}
      />
      <Route
        path="/forum/popular"
        children={<SiteLayout MainCreator={Pages.ForumPopular} />}
      />
      <Route path="/goods" children={<GoodsRouter />} />
      <Route
        path="/def/gamezone"
        children={<SiteLayout MainCreator={Pages.Gamezone} />}
      />
      {/* {selectionForumsUrl.map(({ id, url }) => {
        return (
          <React.Fragment key={id}>
            <Route
              path={`${url}/latest`}
              children={<SiteLayout MainCreator={Pages.Sections} />}
            />
            <Route
              path={`${url}/rule`}
              children={<SiteLayout MainCreator={Pages.Sections} />}
            />
            <Route
              path={url}
              children={<SiteLayout MainCreator={Pages.Sections} />}
            />
          </React.Fragment>
        );
      })} */}

      {/* index */}
      <Route path="/f" children={<SiteLayout MainCreator={Pages.Home} />} />

      {/* articles */}
      <Route path="*/p/*" children={<Pages.SectionsArticle />} />
    </Router>
  );
}

export default AppRouter;
