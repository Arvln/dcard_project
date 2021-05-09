import { Wrapper } from "../style/ServiceBarWrapper";

function ServiceBar() {
  return (
    <Wrapper>
      <div className="service-bar-wrapper">
        <li>
          <a href="/terms">服務條款</a>
        </li>
        <li>
          <a href="https://about.dcard.tw/faq" target="_blank">
            常見問題
          </a>
        </li>
        <li>
          <a href="/brand" target="_blank">
            品牌識別
          </a>
        </li>
        <li>
          <a href="https://join.dcard.today/" target="_blank">
            徵才
          </a>
        </li>
        <li>
          <a href="https://about.dcard.tw/business" target="_blank">
            商業合作
          </a>
        </li>
      </div>
    </Wrapper>
  );
}

export default ServiceBar;
