import { Wrapper } from "./style/HomeWrapper";
import { ArticleItem } from "../components/common";
import { useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const { url } = useRouteMatch();
  const [navBarClassName, setNavBarClassName] = useState("popular");
  useEffect(() => {
    url === "/f" && setNavBarClassName("popular");
    url === "/f/latest" && setNavBarClassName("latest");
    url === "/f/pessoal" && setNavBarClassName("pessoal");
  }, [url]);

  return (
    <Wrapper navBarClassName={navBarClassName}>
      <div className="top-navbar">
        <ul className="top-navbar-items-wrapper">
          <li className="popular">
            <a href="/f">
              <span>熱門</span>
            </a>
          </li>
          <li className="latest">
            <a href="/f/latest">
              <span>最新</span>
            </a>
          </li>
          <li className="pessoal">
            <a href="/f/pessoal">
              <span>追蹤</span>
            </a>
          </li>
        </ul>
      </div>
      {navBarClassName === "popular" && (
        <a
          href="https://youtu.be/ETogpwOdkSY"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img
            src="https://megapx-assets.dcard.tw/images/120e66b3-da52-4959-b4e0-f4807e5a84a7/full.png"
            alt="(banner)0421_Dcard尋奇EP27.png"
            width="100%"
            style={{ opacity: 1 }}
          />
        </a>
      )}
      {navBarClassName === "pessoal" || (
        <ul className="main-content">
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
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </ul>
      )}
      {navBarClassName === "pessoal" && (
        <div className="pessoal-container">
          <div className="login-msg">
            <img
              src="https://www.dcard.tw/_next/static/media/noFollowing-1f473c65cdedb9bc8d2798c4b24a63f7.png"
              alt="Please Login"
              width="280"
              height="160"
            />
            <h2>尚未登入</h2>
            <p>追蹤喜歡的內容建立專屬文章列表</p>
            <a href="/signup">
              <button type="button">立即登入</button>
            </a>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default Home;
