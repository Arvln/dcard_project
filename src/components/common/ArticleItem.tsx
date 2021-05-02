import { Link, useRouteMatch } from "react-router-dom";
import { Wrapper } from "../style/ArticleItemWrapper";

function ArticleItem() {
  const { path } = useRouteMatch();

  return (
    <Wrapper>
      <Link to={`${path}/p/235868431`}>
        <article className="article-conatiner">
          <div className="article-header">
            <div className="category-icon">
              <svg
                viewBox="0 0 100 100"
                focusable="false"
                width="16"
                height="16"
                fill="rgb(0, 106, 166)"
              >
                <title>官方</title>
                <path d="M100 50A50 50 0 110 50a50 50 0 01100 0"></path>
                <g fill="#FFF">
                  <path d="M61 43.7a4.9 4.9 0 00-5 5c0 2.6 2.3 4.8 5 4.8s4.9-2.2 4.9-4.9-2.2-4.9-5-4.9"></path>
                  <path d="M69.7 55.8l-.1 1.8a3.9 3.9 0 01-3.2.6c-1.6-.5-3.1-1.4-4.3-2.5l-4.1 4c2.5 2.5 5.7 4.2 9.4 4.7-3 5.3-8.8 9-15.3 9H34.5V49.5a44 44 0 0029.4-17.2c1.5 1 2.8 2.2 3.7 3.5 1.3 2.5 2 5.3 2 8.3v11.6zM52 20.8H28.6v58.4h23.5c13 0 23.4-10.5 23.4-23.4V44.2a23.4 23.4 0 00-23.4-23.4z"></path>
                </g>
                <path fill="none" d="M20.8 20.8h58.3v58.3H20.8z"></path>
              </svg>
            </div>
            <div className="category-title">官方公告</div>
            <div className="category-info">小天使</div>
            <div className="category-top">置頂</div>
          </div>
          <div className="article-title">
            <h1>Dcard 創作者俱樂部開張🎊申請加入享有專屬個板！</h1>
          </div>
          <div className="article-content">
            <p>
              一直以來，在各個看板、各種不同領域，Dcard
              上都有許多創作者寫下他們自己的故事，無論是美食遊記、彩妝試色、圖文創作或是心情抒發等等，這些文章都深受卡友的喜愛，慢慢地他們寫出無數作品，也漸漸累積了粉
            </p>
          </div>
          <div className="article-footer">
            <div className="moods">
              <img
                src="https://megapx-assets.dcard.tw/images/52057289-337a-4f2f-88c0-cb8a77ee422a/orig.png"
                title="愛心"
                style={{ zIndex: 3 }}
              />
              <img
                src="https://megapx-assets.dcard.tw/images/042b27f9-b507-473b-8f36-654aedcc37df/orig.png"
                title="森77"
                style={{ zIndex: 2 }}
              />
              <img
                src="https://megapx-assets.dcard.tw/images/9a7cc9af-9f81-43ea-8d9b-968a6441ae51/orig.png"
                title="哈哈"
                style={{ zIndex: 1 }}
              />
              <span>643</span>
            </div>
            <div className="comment">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgb(51, 151, 207)"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M1.3330000000000002 12a10.667 10.667 0 1021.334 0 10.667 10.667 0 10-21.334 0zM15.5 6.5h-7A3.5 3.5 0 005 10v3.5A3.5 3.5 0 008.5 17H9v1.369a.75.75 0 001.238.57L12.5 17h3a3.5 3.5 0 003.5-3.5V10a3.5 3.5 0 00-3.5-3.5z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span>132</span>
            </div>
            <div className="save">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgb(225, 225, 225)"
                focusable="false"
                role="img"
                aria-hidden="true"
              >
                <path d="M17.65 21.39L12 17.5l-5.65 3.88A1.5 1.5 0 014 20.15V5a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 5v15.15a1.5 1.5 0 01-2.35 1.24z"></path>
              </svg>
              <span>收藏</span>
            </div>
          </div>
          <img
            className="article-img"
            src="https://imgur.dcard.tw/JY9ngM4b.jpg"
            width="84px"
            height="84px"
            alt=""
            loading="lazy"
          />
        </article>
      </Link>
    </Wrapper>
  );
}

export default ArticleItem;
