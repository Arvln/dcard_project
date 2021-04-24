import { Wrapper } from "../style/ForumAllWrapper";
import { FollowButton } from "../../components/common";
import { useState } from "react";


// TODO: if user click button, get the id of item and modify icon direction, max-height by id!
function ForumAll() {
  const [isClickArrowIcon, setIsClickArrowIcon] = useState(false);
  function clickArrowIconHandler(): void {
    isClickArrowIcon && setIsClickArrowIcon(false);
    isClickArrowIcon || setIsClickArrowIcon(true);
  }

  return (
    <Wrapper isClickArrowIcon={isClickArrowIcon}>
      <div className="all-forums-title">
        <h1>看板分類</h1>
      </div>
      <ul>
        <li>
          <header>
            <h3>📢 最新看板 - 天竺鼠車車 | Clubhouse</h3>
            <div className="forums-arrow-icon-wrapper" style={{ transform: `${isClickArrowIcon ? `rotate(180deg)` : `rotate(0)`}`}} onClick={clickArrowIconHandler}>
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
          <div className="forums-list" style={{maxHeight: `${isClickArrowIcon ? `440px` : 0}`}}>
            <ol>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
              <li>
                <article>
                  <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="28" height="28" loading="lazy" alt="Logo" />
                  <h4>股票</h4>
                  <FollowButton />
                </article>
              </li>
            </ol>
          </div>
        </li>
        <li>
          <header>
            <h3>💄 美容保養 - 美妝 | 醫美 | 生理用品</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>👚️ 穿搭時尚 - 穿搭 | 香氛 | 僞娘</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>🛍️ 購物支付 - 網購 | 省錢 | 超商</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>💗️ 感情生活 - 女孩 | 感情 | 結婚</h3>
            <div className="forums-arrow-icon-wrapper">
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
        <li>
          <header>
            <h3>📢 最新看板 - 天竺鼠車車 | Clubhouse</h3>
            <div>
              <svg viewBox="0 0 24 24" focusable="false" width="18" height="18" role="img" aria-hidden="true" className="all-forums-arrow-icon"><path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
            </div>
          </header>
        </li>
      </ul>

    </Wrapper>
  )
}

export default ForumAll
