import { Link } from "react-router-dom";
import { Wrapper } from "../style/SectionsArticleWrapper";
import { ArticleCommentItem, FollowButton } from "../../components/common";

function SectionsArticles() {
  const articleContent: string =
    "交往快3年，跟男友的共同點本就少，交流也越來越少，整體來說，就是一個熱戀期後實體相處很少、手機也沒什麼聊天的情侶。\n\n👉Line訊息回覆上：曾經不成熟鬧過，後來用溝通的方式也說，但仍然一樣，男友大致上覺得：不用特別回訊息（話本就少了一點），所以慢回少回，當然如果有大事他會在，他覺得我自己要過好，現場聊天也是用聽的沒有多少反饋，也不太會分享自己的事情....（但是他會聽，而且也會默默記得\n\n👉實體相處上：熱戀期都是他帶我出去，後來我會想一起去幹嘛不然沒共同語言（吃飯、看展、看電影等等），不然雙方也忙沒時間相處，溝通過，但男友希望我不要逼他，但他興趣又很少，曾經喜歡的東西我再找他一起他也說還好了，然後又不太想嘗試我喜歡的，後來變成兩人沒什麼相處跟共同體驗...\n\n綜合以上他好像都覺得沒關係的感覺欸，他說「我開心，他就開心了」！也希望我知道他愛我就好！\n\n但交往久了會淡掉，而且覺得變得好不熟，全憑想像在交往，所以我想創造共同點、增加相處樂趣、分享生活點滴......都有點難的感覺，這樣我開心他就開心的交往方式....是不是有點不太對....？\n\n有人是這種佛系惦記法的戀愛嗎？\n有情侶能接受這樣沒交集的嗎？然後能否不淡掉？老夫老妻是不是就這樣遠遠地愛著對方？還是是我太沒定性太追求感覺？還是他太佛系？或是現階段感情不是他的重點？\n\n補：還是是在一起久了男生就會做回自己的樣子，沒有不愛，然後就默默習慣彼此的存在這種了？\n\n求解";
  return (
    <Wrapper>
      <div className="article-wrapper">
        <header>
          <div className="article-author-state">
            <svg viewBox="0 0 40 40" focusable="false" width="32" height="32">
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
            <div className="article-author-type">匿名</div>
          </div>
          <div className="cancel-button">
            <Link to="/f/sections">
              <button aria-label="close" type="button">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  focusable="false"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M13.2 12l5.6-5.6a.4.4 0 000-.6l-.6-.6a.4.4 0 00-.6 0L12 10.8 6.4 5.2a.4.4 0 00-.6 0l-.6.6a.4.4 0 000 .6l5.6 5.6-5.6 5.6a.4.4 0 000 .6l.6.6a.4.4 0 00.6 0l5.6-5.6 5.6 5.6a.4.4 0 00.6 0l.6-.6a.4.4 0 000-.6z"></path>
                </svg>
              </button>
            </Link>
          </div>
        </header>
        <section>
          <h1>這樣的交往模式正常嗎！？沒交集？</h1>
          <div className="article-record">
            <Link to="/f/sections" className="to-relationship-link">
              感情
            </Link>
            <div className="article-published-time">4月29日 00:14</div>
          </div>
          <div className="article-content-container">
            <div className="article-content">
              <span>{articleContent}</span>
            </div>
            <div className="article-category-label">
              <Link to="#">價值觀</Link>
              <Link to="#">價值觀</Link>
              <Link to="#">價值觀</Link>
              <Link to="#">價值觀</Link>
              <Link to="#">價值觀</Link>
            </div>
            <div className="article-current-state">
              <div className="article-apply-wrapper">
                <div className="article-moods-image">
                  <img
                    src="https://megapx-assets.dcard.tw/images/52057289-337a-4f2f-88c0-cb8a77ee422a/orig.png"
                    title="愛心"
                    width="28"
                    height="28"
                    style={{ zIndex: 3 }}
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/2484e51a-2cdc-4f0e-a4ea-8d80b4589762/orig.png"
                    title="愛心"
                    width="28"
                    height="28"
                    style={{ zIndex: 2 }}
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/039a093e-93ec-476c-976c-4a53b9b6d11c/orig.png"
                    title="愛心"
                    width="28"
                    height="28"
                    style={{ zIndex: 1 }}
                  />
                </div>
                <div className="article-moods-count">491</div>
                <div className="article-apply-count">・回應 89</div>
              </div>
              <div className="article-mark">
                <button title="mood" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.5 4A5.49 5.49 0 0012 6.344 5.49 5.49 0 007.5 4 5.5 5.5 0 002 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0016.5 4z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button title="save" type="button">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M17.65 21.39L12 17.5l-5.65 3.88A1.5 1.5 0 014 20.15V5a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 5v15.15a1.5 1.5 0 01-2.35 1.24z"></path>
                  </svg>
                </button>
                <button title="notify" type="button">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M12 20.5a1.93 1.93 0 01-1.31-.5H8.85A3.48 3.48 0 0012 22a3.48 3.48 0 003.15-2h-1.84a1.93 1.93 0 01-1.31.5zm7.97-4.5a2 2 0 00-.37-1.03l-1.1-1.47v-3a6 6 0 00-4.03-5.66 2.48 2.48 0 00.03-.34A2.5 2.5 0 0012 2a2.5 2.5 0 00-2.5 2.5 2.48 2.48 0 00.03.34A6 6 0 005.5 10.5v3l-1.1 1.47A2 2 0 004.03 16H4v1a2 2 0 002 2h12a2 2 0 002-2v-1zM11 4.5a1 1 0 011-1 1 1 0 011 1v.03a6.24 6.24 0 00-.5-.03h-1c-.17 0-.33.01-.5.03V4.5z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="article-info">
              <h4>文章資訊</h4>
              <div className="forums-label">
                <img
                  src="https://megapx-assets.dcard.tw/images/c99966a1-03f9-4a69-86d4-df979a970496/full.jpeg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="Logo"
                  style={{ borderRadius: "50%" }}
                />
                <div className="forums-label-info">
                  <h5>感情</h5>
                  <span>每天有 337 則貼文</span>
                </div>
                <FollowButton />
              </div>
            </div>
          </div>
        </section>
        <div className="popular-comment">
          <h2>熱門回應</h2>
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
        </div>
        <div className="related-article-maybe-interest">
          <h4>你可能感興趣的文章</h4>
          <ul>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <h5 className="related-article-maybe-interest-title">
                  男友說我太常報備很沒有魅力
                </h5>
                <div className="related-article-maybe-interest-count">
                  <span>心情 8</span>
                  <span>回應 11</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="article-comment-wrapper">
          <div className="article-comment">
            <h4>共 89 則回應</h4>
          </div>
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
          <ArticleCommentItem />
        </div>
        <div className="article-public-comment-bar-wrapper">
          <input type="text" placeholder="回應……" />
          <button title="mood" type="button" className="apply-like-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M16.5 4A5.49 5.49 0 0012 6.344 5.49 5.49 0 007.5 4 5.5 5.5 0 002 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0016.5 4z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button title="save" type="button">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path d="M17.65 21.39L12 17.5l-5.65 3.88A1.5 1.5 0 014 20.15V5a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 5v15.15a1.5 1.5 0 01-2.35 1.24z"></path>
            </svg>
          </button>
          <button title="more" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <g transform="translate(148)">
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(-138 4)"
                ></circle>
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(-138 10)"
                ></circle>
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(-138 16)"
                ></circle>
              </g>
            </svg>
          </button>
          <button title="to-bottom" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              role="img"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.72 12.988L12.707 18a1 1 0 01-1.414 0L8.28 14.988a.751.751 0 01.531-1.281H11v-7a1 1 0 012 0v7h2.189a.751.751 0 01.531 1.281z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default SectionsArticles;
