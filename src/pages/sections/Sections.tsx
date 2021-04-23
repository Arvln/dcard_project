import { Wrapper } from "../style/SectionsWrapper";
import { ArticleItem } from "../../components/common";
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";

function Sections() {
  const { url } = useRouteMatch();
  const [navBarClassName, setNavBarClassName] = useState("");
  const initialPosition: HTMLElement | null = document.getElementById("root");
  const forumTitlePosition: HTMLElement | null = document.getElementById(
    "forum-title-point"
  );

  // 來到專版時，跳轉到版標位置
  initialPosition && initialPosition.scrollIntoView();
  if (url === "/f/sections" && forumTitlePosition) {
    forumTitlePosition.scrollIntoView();
  }

  useEffect(() => {
    url === "/f/sections" && setNavBarClassName("popular");
    url === "/f/sections/latest" && setNavBarClassName("latest");
    url === "/f/sections/rule" && setNavBarClassName("rule");
  }, [url]);

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
      {navBarClassName === "rule" && <div className="rule-container">123</div>}
    </Wrapper>
  );
}

export default Sections;
