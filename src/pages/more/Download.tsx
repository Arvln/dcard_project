import { Wrapper } from "../style/more/DownloadWrapper";
import TopNavBar from "../../components/common/TopNavBar";

function Download() {
  return (
    <Wrapper>
      <TopNavBar />
      <div className="download-app-wrapper">
        <div className="download-app-container">
          <img
            loading="lazy"
            src="https://www.dcard.tw/_next/static/media/idea-b9695e0320119fd83c5561f6d37e1c28.svg"
            alt=""
          />
          <h1>年輕人都在 Dcard 上討論</h1>
          <p>
            不想錯過任何有趣的話題嗎？
            <br />
            趕快加入我們吧！
          </p>
          <div className="download-app-content">
            <a
              href="https://go.onelink.me/m131/85bf4a77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.dcard.tw/_next/static/media/google_play-492-6088c8c95b3e39e614d54d44bf51aab1.png"
                alt="Get it on Google Play"
                width="100%"
              />
            </a>
            <a
              href="https://go.onelink.me/nRB7/3f4da7b0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.dcard.tw/_next/static/media/app_store-492-756181fab2e5a68179afa3f3dffd0bc8.png"
                alt="Download on the App Store"
                width="100%"
              />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Download;
