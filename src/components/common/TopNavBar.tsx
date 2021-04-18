import tw from "twin.macro";
import { Wrapper } from "../style/TopNavBarWrapper";


function TopNavBar() {
  return (
    <Wrapper>
      <div className="top-container">
        <div className="container-left">
          <img src="https://www.dcard.tw/_next/static/media/logo-2ef7b50901acaa284f36a0484329ec05.svg" alt="Dcard" />
          <div className="search-bar">
            <input type="text" placeholder="搜尋"/>
            <button>
              <svg viewBox="0 0 28 28" focusable="false" width="20" height="20" fill="#fff" role="img" aria-hidden="true">
                <path d="M22.9 21.2l-4.5-4.5A7.5 7.5 0 1017 18l4.5 4.5a.5.5 0 00.8 0l.5-.5a.5.5 0 000-.8zm-10.4-3.5a5.6 5.6 0 115.6-5.6 5.6 5.6 0 01-5.6 5.6z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="container-right">
          <a href="/signup" tw="hidden lg:block">
            <span>註冊 / 登入</span>
          </a>
          <svg className="drop-menu" tw="hidden lg:block" viewBox="0 0 24 24" focusable="false" width="24" height="24" fill="#fff" role="img" aria-hidden="true">
            <path d="M11.08 15.62l-4.69-4.69a1.31 1.31 0 01.92-2.24h9.38a1.31 1.31 0 01.92 2.24l-4.69 4.69a1.3 1.3 0 01-1.84 0z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
      </div>
    </Wrapper>
  )
}

export default TopNavBar
