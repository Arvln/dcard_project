import { Wrapper } from "../../style/more/user/UserConfigWrapper";

function UserConfig() {
  return (
    <Wrapper>
      <h1 className="config-title">設定</h1>
      <div className="service-area-wrapper">
        <div className="service-area">
          <h3>偏好的服務地區</h3>
          <button type="button">更改</button>
        </div>
        <p>我們將依據你選擇的服務地區，顯示該地區的相關看板與內容。</p>
        <div className="area-position">臺灣</div>
      </div>
    </Wrapper>
  );
}

export default UserConfig;
