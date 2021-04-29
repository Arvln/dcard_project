import { useState } from "react";
import { Wrapper } from "../style/AsideTitleWrapper";

// TODO: when user click arrow icon p svg nav switch style!
function AsideTitle() {
  const [hasClickArrowIcon, setHasClickArrowIcon] = useState(false);
  function ClickArrowIconHandler(): void {
    hasClickArrowIcon && setHasClickArrowIcon(false);
    hasClickArrowIcon || setHasClickArrowIcon(true);
  }

  return (
    <Wrapper hasClickArrowIcon={hasClickArrowIcon}>
      <header>
        <div className="forum-title-wrapper">
          <img
            src="https://megapx-assets.dcard.tw/images/c99966a1-03f9-4a69-86d4-df979a970496/full.jpeg"
            width="20"
            height="20"
            style={{ borderRadius: "50%" }}
            loading="lazy"
            alt="Logo"
          />
          <h1>感情</h1>
        </div>
        <div className="forum-posts-count">每天有 336 則貼文</div>
      </header>
      <div className="forum-introduce">
        <div className="forum-indroduce-header" onClick={ClickArrowIconHandler}>
          <p>
            無論是遠距離戀愛、情侶間的有趣互動、分手後的藕斷絲連等...都可以在感情板分享你們的愛情故事，找到愛情路上的共感。
          </p>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            focusable="false"
            role="img"
            aria-hidden="true"
          >
            <path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
        <nav>
          <ul className="forum-info-nav">
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
            <li>
              <a href="#">價值觀</a>
            </li>
          </ul>
        </nav>
      </div>
      <button className="post-article">發表文章</button>
    </Wrapper>
  );
}

export default AsideTitle;
