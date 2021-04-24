import { Wrapper } from "../style/SectionsWrapper";
import { RelatedForums, ArticleItem } from "../../components/common";
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";

function Sections() {
  const { url } = useRouteMatch();
  const [navBarClassName, setNavBarClassName] = useState("");
  const [isReachLeftEnd, setIsReachLeftEnd] = useState(true);
  const [isReachRightEnd, setIsReachRightEnd] = useState(false);
  const initialPosition: HTMLElement | null = document.getElementById("root");
  let scrollElement: HTMLElement | null;

  useEffect(() => {
    const forumTitlePosition: HTMLElement | null = document.getElementById(
      "forum-title-point"
    );

    url === "/f/sections" && setNavBarClassName("popular");
    url === "/f/sections/latest" && setNavBarClassName("latest");
    url === "/f/sections/rule" && setNavBarClassName("rule");
    initialPosition?.scrollIntoView();
    // 跳轉頁面到版標
    url === "/f/sections" && forumTitlePosition?.scrollIntoView();
  }, [url]);

  function leftArrowIconHandler(): void {
    scrollElement = document.getElementById("scroll-element");
    if (isReachLeftEnd || !scrollElement) {
      return;
    }
    scrollElement.scrollLeft -= 750;
  }

  function rightArrowIconHandler(): void {
    scrollElement = document.getElementById("scroll-element");
    if (isReachRightEnd || !scrollElement) {
      return;
    }
    scrollElement.scrollLeft += 750;
  }

  function scrollHandler(): void {
    scrollElement = document.getElementById("scroll-element");
    if (scrollElement?.scrollLeft === 0) {
      setIsReachLeftEnd(true);
    } else if (scrollElement?.scrollLeft === 3556) {
      setIsReachRightEnd(true);
    } else {
      setIsReachLeftEnd(false);
      setIsReachRightEnd(false);
    }
  }

  return (
    <Wrapper navBarClassName={navBarClassName}>
      <div className="top-banner">
        <img
          src="https://megapx-assets.dcard.tw/images/b7d2dc32-cccb-4afa-8291-781164fd4691/1280.jpeg"
          alt="20190926_forums_and_image/image/relationship-cover.jpg"
          width="100%"
        />
        <div id="forum-title-point"></div>
      </div>

      <div className="top-navbar">
        <div className="logo-container">
          <img
            src="https://megapx-assets.dcard.tw/images/c99966a1-03f9-4a69-86d4-df979a970496/full.jpeg"
            width="40"
            height="40"
            loading="lazy"
            alt="Logo"
            style={{ borderRadius: "50%" }}
          />
          <Link to="/f/sections">
            <h1>感情</h1>
          </Link>
          <button type="button">追蹤</button>
        </div>
        <ul className="top-navbar-items-wrapper">
          <li className="popular">
            <Link to="/f/sections">
              <span>熱門</span>
            </Link>
          </li>
          <li className="latest">
            <Link to="/f/sections/latest">
              <span>最新</span>
            </Link>
          </li>
          <li className="rule">
            <Link to="/f/sections/rule">
              <span>板規</span>
            </Link>
          </li>
        </ul>
      </div>

      {navBarClassName === "popular" && (
        <div className="first-banner">
          <a
            href="https://youtu.be/ETogpwOdkSY"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img
              src="https://megapx-assets.dcard.tw/images/120e66b3-da52-4959-b4e0-f4807e5a84a7/full.png"
              alt="(banner)0421_Dcard尋奇EP27.png"
              width="1800"
              height="600"
            />
          </a>
        </div>
      )}

      {navBarClassName === "rule" || (
        <ul className="main-container">
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          {navBarClassName === "popular" && (
            <div className="month-popular-wrapper">
              <h2 className="month-popular">本月熱門</h2>
              <div className="article-card-wrapper">
                <div
                  className="article-card-container"
                  id="scroll-element"
                  onScroll={scrollHandler}
                >
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">女友是手作之鬼吧</h2>
                    <div className="article-card-content">
                      /更，原本只是想分享我收到禮物的喜悅，沒想到受到那麼多人愛戴（；´༎ຶД༎ຶ`），真的受寵若驚，謝謝大家的喜歡！被稱讚的都是女友結果我比女友還興奮️，一開始標題不知道怎麼下
                      也沒想這麼多想說是手工禮物所
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                    <img
                      src="https://imgur.dcard.tw/iFRIijXb.jpg"
                      width="84px"
                      height="84px"
                      alt=""
                      loading="lazy"
                      className="article-card-picture"
                    />
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                  <a href="#" className="article-card">
                    <h2 className="article-card-title">
                      這大概就是最好的分手吧
                    </h2>
                    <div className="article-card-content">
                      「我們數321，然後一起掛電話吧。」「3、2、1，再見了。」想不到我們竟然如此平靜的結束最後的視訊，高中第一次排座位，你坐在我好朋友的後面，看到你這麼熱情，以為你們是好朋友，於是我們也熟絡了起來。發現
                    </div>
                    <div className="article-author-info">
                      <svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        width="16"
                        height="16"
                      >
                        <title>女</title>
                        <path
                          fill="#F48FB1"
                          d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"
                        ></path>
                        <path
                          fill="#CB3A6B"
                          d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
                        ></path>
                      </svg>
                      <div className="author-identity">匿名</div>
                    </div>
                  </a>
                </div>
                <div
                  className="left-arrow-icon-container"
                  style={{ opacity: isReachLeftEnd ? 0 : 1 }}
                  onClick={leftArrowIconHandler}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    focusable="false"
                    width="24"
                    height="24"
                    role="img"
                    aria-hidden="true"
                    fill="rgba(0, 0, 0, 0.35)"
                  >
                    <path d="M17.65 8.65l-.79-.79a.5.5 0 00-.71 0l-5.79 5.79a.5.5 0 000 .71l5.79 5.79a.5.5 0 00.71 0l.79-.79a.5.5 0 000-.71L13 14l4.65-4.65a.5.5 0 000-.7z"></path>
                  </svg>
                </div>
                <div
                  className="right-arrow-icon-container"
                  style={{ opacity: isReachRightEnd ? 0 : 1 }}
                  onClick={rightArrowIconHandler}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    focusable="false"
                    width="24"
                    height="24"
                    role="img"
                    aria-hidden="true"
                    fill="rgba(0, 0, 0, 0.35)"
                  >
                    <path d="M17.65 8.65l-.79-.79a.5.5 0 00-.71 0l-5.79 5.79a.5.5 0 000 .71l5.79 5.79a.5.5 0 00.71 0l.79-.79a.5.5 0 000-.71L13 14l4.65-4.65a.5.5 0 000-.7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
          <ArticleItem />
          <ArticleItem />
          {navBarClassName === "popular" && <RelatedForums />}
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </ul>
      )}

      {navBarClassName === "rule" && (
        <div className="rule-container">
          <div className="forum-rule-title">
            <div className="rule-title-head">
              <h2>規範</h2>
              <div className="version-id">版本：2021.03.30</div>
            </div>
            <p>
              於看板發言時請遵守全站站規與本板板規，讓大家都有一個乾淨的討論空間。
            </p>
          </div>
          <div className="rule-description">
            <h2>全站站規</h2>
            <p>
              違反全站站規的貼文，板主刪文後系統會通知官方審核人員，依全站站規於全站停權使用者。
            </p>
          </div>
          <div className="rule-contents">
            <ul>
              <li>
                <h2>1. 中傷、歧視、挑釁或謾罵他人</h2>
                <div className="rule-contents-description">
                  <p>
                    對特定人物、使用者、族群使用歧視、挑釁、謾罵他人、不雅字詞和人身攻擊等言論，將被刪文並停權天數懲處，累犯者、情節嚴重者視情況加重停權天數。
                  </p>
                  <div>違反此站規，於此看板禁言 30 天。</div>
                </div>
              </li>
              <li>
                <h2>
                  2. 交換個人資料（電話、電子郵件、通訊軟體 ID、交友軟體 ID 等）
                </h2>
                <div className="rule-contents-description">
                  <p>
                    為了創造更佳的內容體驗，除了公開的社群網站連結及遊戲 ID
                    外（如
                    Facebook、Instagram、YouTube、Medium、Pixnet、Discord......等），
                  </p>
                  <p>
                    Dcard 全面禁止在文章與留言內留下個人聯絡方式或
                    ID，違反者將刪文並停權。
                  </p>
                  <p>
                    「個人聯絡方式」指任何可以直接聯繫到特定個人的聯絡資訊，包含但不限於電話、電子郵件、通訊軟體
                    ID、交友軟體 ID 或配對碼等。
                  </p>
                  <div>違反此站規，於此看板禁言 30 天。</div>
                </div>
              </li>
              <li>
                <h2>3. 惡意洗板、重複張貼</h2>
                <div className="rule-contents-description">
                  <p>若違反以下規範，將以「惡意洗板」為由刪文加停權 30 天：</p>
                  <p> (1) 重複張貼他人已發表過且完全相同的內容</p>
                  <p> (2) 同一人重複發表相同內容</p>
                  <p> (3) 在文章或留言內張貼大量空白或無意義字詞，影響他人閱讀體驗</p>
                  <p>&nbsp;</p>
                  <p>
                    ※
                    引用、轉貼文章、或相同文章發表在多個看板但文章皆符合該看板板旨者，不在此限。
                  </p>
                  <p>
                    ※ 時事板自 2019/8/30 起，每日每個 Dcard 帳號限發文 5
                    篇（含引用、轉貼），違者以惡意洗板懲處。
                  </p>
                  <div>違反此站規，於此看板禁言 30 天。</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default Sections;
