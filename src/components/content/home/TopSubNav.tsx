import { Wrapper } from "../../style/SubNavItemsWrapper";

function TopSubNav() {
  return (
    <Wrapper>
      <li>
        <a href="/forum/all">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff" focusable="false" role="img" aria-hidden="true"><path d="M18.95 3H5.05A2.04 2.04 0 003 5.04v13.91A2.04 2.04 0 005.05 21h13.9A2.05 2.05 0 0021 18.96V5.03A2.05 2.05 0 0018.95 3zM6.68 17.73a1.64 1.64 0 111.64-1.64 1.64 1.64 0 01-1.64 1.64zm0-4.1A1.64 1.64 0 118.32 12a1.64 1.64 0 01-1.64 1.64zm0-4.08A1.64 1.64 0 118.32 7.9a1.64 1.64 0 01-1.64 1.64zm11.86 6.77a1 1 0 01-1 1h-6.59a1 1 0 01-1-1v-.46a1 1 0 011-1h6.6a1 1 0 011 1zm0-4.1a1 1 0 01-1 1h-6.59a1 1 0 01-1-1v-.45a1 1 0 011-1h6.6a1 1 0 011 1zm0-4.08a1 1 0 01-1 1h-6.59a1 1 0 01-1-1v-.46a1 1 0 011-1h6.6a1 1 0 011 1z" data-name="icon_md_forum"></path></svg>
          </div>
          <span>所有看板</span>
        </a>
      </li>
      <li>
        <a href="/forum/popular">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff" focusable="false" role="img" aria-hidden="true"><path d="M19.5 14.5a7.5 7.5 0 01-15 0 12.9 12.9 0 012.21-7.25l.02-.03a.18.18 0 01.04-.05.5.5 0 01.31-.15.51.51 0 01.55.46A3.36 3.36 0 0010.9 10a3.26 3.26 0 003.2-3.5 16.5 16.5 0 00-.32-2.9 1.63 1.63 0 01-.04-.19V3.4a.5.5 0 01.49-.5.51.51 0 01.28.08.45.45 0 01.1.09A15.95 15.95 0 0119.5 14.5zm-3.59-1.55a12.97 12.97 0 00-.22-1.32.5.5 0 00-.83-.27 7.93 7.93 0 01-3.73 1.77 2.94 2.94 0 00-2.63 2.93c0 2.55 3.3 4.32 5.95 1.5a5.75 5.75 0 001.46-4.6z" data-name="ic_hot"></path></svg>
          </div>
          <span>即時熱門看板</span>
        </a>
      </li>
      <li>
        <a href="/goods">
          <div className="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff" focusable="false" role="img" aria-hidden="true">
            <path d="M20.962 9l-.994-5a2.156 2.156 0 00-1.987-2H6.019a2.156 2.156 0 00-1.987 2l-.994 5A2.34 2.34 0 004 11.269V20a2 2 0 002 2h12a2 2 0 002-2v-8.731A2.34 2.34 0 0020.962 9zM6.019 10a1 1 0 01-.993-1l.993-5H7v5.042a.993.993 0 01-.981.958zM9 9V4h2v5a1 1 0 01-2 0zm5.5 11h-5v-5.143a.937.937 0 011-.857h3a.937.937 0 011 .857zM15 9a1 1 0 01-2 0V4h2zm2.981 1A.993.993 0 0117 9.042V4h.981l.993 5a1 1 0 01-.993 1z"></path><path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
          </div>
          <span>好物研究室</span>
        </a>
      </li>
      <li>
        <a href="/def/gamezone">
          <div className="icon-wrapper game-icon"></div>
          <span>遊戲專區</span>
        </a>
      </li>
    </Wrapper>
  )
}

export default TopSubNav
