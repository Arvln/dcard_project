import { Wrapper } from "../style/SubNavItemsWrapper";

// TODO: when user in forum page, switch nav bar color
function PopularSubNav() {
  return (
    <Wrapper>
      <li>
        <h3>即時熱門看板</h3>
      </li>
      <li style={{backgroundColor: "rgba(255, 255, 255, 0.3)"}}>
        <a href="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/c99966a1-03f9-4a69-86d4-df979a970496/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>感情</span>
        </a>
      </li>
      <li>
        <a href="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/dfe250b0-f60c-420a-a099-5eafd107ae31/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>閒聊</span>
        </a>
      </li>
      <li>
        <a href="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/f1be2fc4-d860-4853-a7df-0a9fe0a2dc38/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>心情</span>
        </a>
      </li>
      <li>
        <a href="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/f5ff9184-1c01-4d22-a246-20bf0b057745/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>美妝</span>
        </a>
      </li>
      <li>
        <a href="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/d45f9407-d676-4e38-9da3-2a99cf2f0895/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>有趣</span>
        </a>
      </li>
      <li>
        <a href="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/0bba80d2-1a43-4f58-ac9a-a195e049a6a4/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>女孩</span>
        </a>
      </li>
      <li>
        <a href="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/c75cd7bd-50b2-46e3-bebc-641d978c30d3/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>追星</span>
        </a>
      </li>
      <li>
        <a href="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/296d5970-41ae-4054-8c73-59171072a0a3/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>梗圖</span>
        </a>
      </li>
      <li>
        <a href="/f/sections">
          <div className="icon-wrapper"></div>
          <span>更多</span>
        </a>
      </li>
    </Wrapper>
  )
}

export default PopularSubNav
