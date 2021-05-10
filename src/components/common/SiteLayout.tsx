import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
// style
import { Wrapper } from "../style/SiteLayoutWrapper";
// components
import TopNavBar from "./TopNavBar";
import TopSubNav from "./TopSubNav";
import PopularSubNav from "./PopularSubNav";
import RecommandSubNav from "./RecommandSubNav";
import AsideTitle from "./AsideTitle";
import ServiceBar from "./ServiceBar";
import { useSelector } from "react-redux";
import {
  initialDataForAppState,
  InitialDataForAppState,
} from "../../store/redux/initial_data_for_app/InitialDataState";
import { ApiType } from "../../store/redux/initial_data_for_app/FetchApiType";
export const RootStoreContext = React.createContext(initialDataForAppState);

type Props = {
  MainCreator: JSX.Element;
};

export type RootState = {
  FetchReducer: InitialDataForAppState
};

function SharingComponent({ MainCreator }: Props) {
  const { path } = useRouteMatch();
  const [hasAsideTitle, setHasAsideTitle] = useState(false);
  const [hasFooter, setHasFooter] = useState(true);
  const initialPosition: HTMLElement | null = document.getElementById("root");
  const rootState: InitialDataForAppState = useSelector((state: RootState) => ({
    loading: state.FetchReducer.loading,
    [ApiType.Forums]: state.FetchReducer[ApiType.Forums],
    [ApiType.Categorization]: state.FetchReducer[ApiType.Categorization],
    [ApiType.Categories]: state.FetchReducer[ApiType.Categories],
    [ApiType.Selections]: state.FetchReducer[ApiType.Selections],
    [ApiType.Bulletin]: state.FetchReducer[ApiType.Bulletin],
    error: state.FetchReducer.error,
  }));

  useEffect(() => {
    initialPosition?.scrollIntoView();
    const forumPages: RegExp = /^\/f\//;
    const indexArticlePages: RegExp = /^\/f\/p\//;
    
    if (
      path !== "/f/latest" &&
      path !== "/f/pessoal" &&
      forumPages.test(path)
    ) {
      setHasAsideTitle(true);
      indexArticlePages.test(path) && setHasAsideTitle(false);
    }

    const searchPages: RegExp = /^\/search/;
    const goodsPages: RegExp = /^\/goods/;
    if (
      path === "/forum/all" ||
      path === "/forum/popular" ||
      path === "/goods" ||
      path === "/def/gamezone" ||
      searchPages.test(path) ||
      goodsPages.test(path)
    ) {
      setHasFooter(false);
    }
  }, [path]);

  return (
    <RootStoreContext.Provider value={{ ...rootState }}>
      <Wrapper>
        <TopNavBar />
        <nav className="forum-subnav">
          <div className="top-nav">
            <TopSubNav />
          </div>
          <div className="botton-nav">
            <PopularSubNav />
            <RecommandSubNav />
          </div>
        </nav>
        <section className="forum-content">
          {MainCreator}
        </section>
        <aside className="forum-msg">
          {hasAsideTitle && <AsideTitle />}
          <div className="short-msg"></div>
          <div className="short-msg"></div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdcard.topics&amp;tabs=timeline&amp;width=300&amp;height=600&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
            width="300"
            height="600"
            style={{ border: "none", overflow: "hidden", marginBottom: "8px" }}
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <div className="short-msg"></div>
          <div className="long-msg"></div>
          <ServiceBar />
        </aside>
        {hasFooter && (
          <footer className="forum-footer">
            <div className="footer-container">
              <svg
                viewBox="0 0 100 100"
                focusable="false"
                width="60"
                height="60"
                role="img"
                aria-hidden="true"
                fill="rgb(0, 106, 166)"
                style={{ marginRight: "16px" }}
              >
                <path d="M100 50A50 50 0 110 50a50 50 0 01100 0"></path>
                <g fill="#FFF">
                  <path d="M61 43.7a4.9 4.9 0 00-5 5c0 2.6 2.3 4.8 5 4.8s4.9-2.2 4.9-4.9-2.2-4.9-5-4.9"></path>
                  <path d="M69.7 55.8l-.1 1.8a3.9 3.9 0 01-3.2.6c-1.6-.5-3.1-1.4-4.3-2.5l-4.1 4c2.5 2.5 5.7 4.2 9.4 4.7-3 5.3-8.8 9-15.3 9H34.5V49.5a44 44 0 0029.4-17.2c1.5 1 2.8 2.2 3.7 3.5 1.3 2.5 2 5.3 2 8.3v11.6zM52 20.8H28.6v58.4h23.5c13 0 23.4-10.5 23.4-23.4V44.2a23.4 23.4 0 00-23.4-23.4z"></path>
                </g>
                <path fill="none" d="M20.8 20.8h58.3v58.3H20.8z"></path>
              </svg>
              <div className="footer-msg">
                <h3>上大學、出社會的你，快來板一起討論！立即加入Dcard ！</h3>
                <p>完成身份驗證即可發文、回應與抽卡認識新朋友</p>
              </div>
              <div className="footer-button">
                <div className="sign-in">
                  <a href="#">登入</a>
                </div>
                <div className="sign-up">
                  <a href="#">註冊</a>
                </div>
              </div>
            </div>
          </footer>
        )}
      </Wrapper>
    </RootStoreContext.Provider>
  );
}

export default SharingComponent;
