import { Link } from "react-router-dom";
import { Wrapper } from "../style/SubNavItemsWrapper";

function RecommandSubNav() {
  return (
    <Wrapper>
      <li>
        <h3>Dcard 精選看板</h3>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/d703756f-1bbc-494f-ae12-448e2d0d4581/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>新生季</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/441c5c5f-e579-41bb-8f09-0131e87df6d8/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>可不可真心話</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/f5ff9184-1c01-4d22-a246-20bf0b057745/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>美妝</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/fb2eb050-73eb-4d13-a200-22fbab9a4b4d/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>股票</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/9603fe75-3abb-4da0-856c-1ffde84b6c5b/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>香氛</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/bc113ec1-602f-4f85-b90d-939b9f0e5b17/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>精品</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/296d5970-41ae-4054-8c73-59171072a0a3/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>梗圖</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/25601f75-4825-453b-93ce-086a8480a3ea/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>Clubhouse</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/6f7b7827-59cc-41c6-a396-b5da8f04efc4/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>SHINee</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/71eca45d-a62a-4529-a14a-431073d3b9e8/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>NCT</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/1485ff77-546c-475d-890f-5d04fb4024cf/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>GOT7</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/8fdbbb04-0ce0-451c-a6bd-80158938b724/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>Red Velvet</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/1bed222b-4fcf-4776-8030-e8b1e68dddea/orig.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>VTuber</span>
        </Link>
      </li>
      <li>
        <Link to="/f/sections">
          <img src="https://megapx-assets.dcard.tw/images/24f4f7ef-c308-4c37-80dc-349fd47cf71a/full.jpeg" width="30" height="30" loading="lazy" alt="Logo" />
          <span>西斯</span>
        </Link>
      </li>
    </Wrapper>
  );
}

export default RecommandSubNav;
