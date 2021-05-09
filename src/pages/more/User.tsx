import { Link, useRouteMatch } from "react-router-dom";
import { Wrapper } from "../style/more/UserWrapper";
import TopNavBar from "../../components/common/TopNavBar";
import { ServiceBar } from "../../components/common";
import { UserConfig } from "../more/user/";

function User() {
  const { path } = useRouteMatch();
  return (
    <Wrapper>
      <TopNavBar />
      <main>
        <div className="user-info-wrapper">
          <div className="user-info-container">
            <div className="user-info">
              <div className="user-picture">
                <svg
                  viewBox="0 0 80 80"
                  focusable="false"
                  width="100"
                  height="100"
                >
                  <title>匿名</title>
                  <path fill="#cfd8dc" d="M0 0h80v80H0z"></path>
                  <path
                    fill="#37474f"
                    d="M74.7 79.8c-5.6-7.2-13.5-6.4-19-10-.7-.4-4.2-5.6-4.5-6-.4-.7-.1-6.6 0-7.4 0 0 5.5-3.1 6.7-13 0 0 2.9.2 3.6-4.2.7-4-.4-5.5-1.9-5.7 0 0 0-4.3.2-6.8 1.3-14.4-20.3-27.4-33-12.8-9 4-7.2 15.1-6 19.5-.7 0-2 .7-1.5 4.9.6 5.3 3.1 5 3.6 5 0 0 .7 9.5 7.2 13 0 0 .5 6.8.3 7.6a71.7 71.7 0 01-4.8 6c-4.8 3.6-13.3 2-19.2 8.8l-1 1.4H75z"
                  ></path>
                </svg>
              </div>
              <div className="username">訪客</div>
              <div className="user-msg">
                立即啓用 Dcard 完整功能
                <br />
                點擊登入/註冊
              </div>
              <Link to="/signup">
                <button type="button">登入/註冊</button>
              </Link>
            </div>
            <div className="user-record">
              <Link to="#">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  width="24"
                  height="24"
                  fill="#3397cf"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M17.65 21.39L12 17.5l-5.65 3.88A1.5 1.5 0 014 20.15V5a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 5v15.15a1.5 1.5 0 01-2.35 1.24z"></path>
                </svg>
                我的收藏
              </Link>
              <Link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  width="24"
                  height="24"
                  fill="#BF8FF0"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M20.5 14h-3.8l.7-4h3.1a1.5 1.5 0 100-3h-2.6l.6-3.2a1.5 1.5 0 00-3-.6L15 7h-5l.6-3.2a1.5 1.5 0 00-3-.6L7 7H3.5a1.5 1.5 0 100 3h2.8l-.7 4H3.5a1.5 1.5 0 000 3h1.6l-.6 3.2A1.5 1.5 0 005.7 22a1.5 1.5 0 00.3 0 1.5 1.5 0 001.5-1.2L8 17h5l-.6 3.2a1.5 1.5 0 001.2 1.8 1.5 1.5 0 00.3 0 1.5 1.5 0 001.5-1.2L16 17h4.4a1.5 1.5 0 000-3zM8.7 14l.7-4h5l-.8 4z"></path>
                </svg>
                我追蹤的話題
              </Link>
              <Link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  width="24"
                  height="24"
                  fill="#ea5c5c"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M14.75 10.5a4.216 4.216 0 012.25.65 4.216 4.216 0 012.25-.65 4.239 4.239 0 012.23.64A7.341 7.341 0 0022 8.5 5.5 5.5 0 0016.5 3 5.512 5.512 0 0012 5.34 5.512 5.512 0 007.5 3 5.5 5.5 0 002 8.5C2 15 12 21 12 21s.54-.32 1.37-.9c-1.44-1.37-2.87-3.25-2.87-5.35a4.259 4.259 0 014.25-4.25z"></path>
                  <path d="M19.25 12A2.741 2.741 0 0017 13.176 2.741 2.741 0 0014.75 12 2.75 2.75 0 0012 14.75C12 18 17 21 17 21s5-3 5-6.25A2.75 2.75 0 0019.25 12z"></path>
                </svg>
                我追蹤的卡稱
              </Link>
              <Link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  width="24"
                  height="24"
                  fill="#3397cf"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    d="M20 4v16a2.006 2.006 0 01-2 2H6a2.006 2.006 0 01-2-2V9h5a2 2 0 002-2V2h7a2.006 2.006 0 012 2zM9 2L4 7h4.5a.5.5 0 00.5-.5zM7 16.5l-.852 2.981a.3.3 0 00.371.37L9.5 19l7-7L14 9.5zm11.293-7.707l-1.086-1.086a1 1 0 00-1.414 0L15 8.5l2.5 2.5.793-.793a1 1 0 000-1.414z"
                    fill-rule="evenodd"
                    fill="#3397cf"
                  ></path>
                </svg>
                我發表的文章
              </Link>
              <Link to="#">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  width="24"
                  height="24"
                  fill="#3397cf"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M19 3h-9a2 2 0 00-1.85 1.26L3.47 5.51a2 2 0 00-1.41 2.45l3.36 12.56A2 2 0 007.36 22a1.99 1.99 0 00.52-.07l3.48-.93H19a2 2 0 002-2V5a2 2 0 00-2-2zM7.85 19.87a.5.5 0 01-.61-.35L4.13 7.92a.5.5 0 01.35-.6L8 6.36V19a2 2 0 00.16.79z"></path>
                </svg>
                抽卡自我介紹
              </Link>
              <Link to="#">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  width="24"
                  height="24"
                  fill="#fff"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M21.4 15.6a.97.97 0 01-.12.31l-1.25 2.18a1 1 0 01-1.1.47l-.15-.03-2.28-.54a7.5 7.5 0 01-.71.47l-.08.05a7.48 7.48 0 01-.79.4l-.71 2.38a1 1 0 01-.96.71h-2.51a1 1 0 01-.6-.2 1 1 0 01-.22-.22 1 1 0 01-.14-.3l-.72-2.37a7.31 7.31 0 01-.79-.4l-.08-.05a7.56 7.56 0 01-.7-.47l-2.44.57a1.03 1.03 0 01-.32.02 1 1 0 01-.77-.5L2.7 15.91a.99.99 0 01-.13-.62 1 1 0 01.27-.57l1.71-1.81A7.4 7.4 0 014.5 12a7.4 7.4 0 01.06-.91L2.85 9.27a1 1 0 01-.26-.57.99.99 0 01.12-.61L3.97 5.9a1 1 0 01.77-.5 1.03 1.03 0 01.32.03L7.5 6a7.56 7.56 0 01.7-.47l.08-.05a7.48 7.48 0 01.8-.4l.7-2.38a1.01 1.01 0 01.15-.3 1 1 0 01.22-.22 1 1 0 01.6-.2h2.5a.99.99 0 01.33.05 1 1 0 01.5.38 1.01 1.01 0 01.14.29l.71 2.38a7.48 7.48 0 01.8.4l.07.04a7.5 7.5 0 01.7.48l2.26-.53.18-.05a1 1 0 011.1.48l1.26 2.17a.97.97 0 01.11.32 1 1 0 01-.25.87l-1.71 1.81a7.4 7.4 0 01.05.92 7.4 7.4 0 01-.06.91l1.71 1.82a1 1 0 01.25.87zM12 7a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5z"></path>
                </svg>
                設定
              </Link>
            </div>
          </div>
          <div className="user-config-wrapper">
            <div className="user-config-container">
              {path === "/my/configs" && <UserConfig />}
            </div>
            <footer>
              <ServiceBar />
              <div className="copyright">
                Copyright © Dcard Taiwan Ltd. 2021
              </div>
            </footer>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default User;
