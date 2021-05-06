import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../style/SignUpWrapper";
import TopNavBar from "../../components/common/TopNavBar";

function SignUp() {
  const [isMissValidationMail, setIsMissValidationMail] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  return (
    <Wrapper>
      <TopNavBar />
      <div className="signup-wrapper">
        <div className="signup-picture">
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
          <Link to="/f">
            <button type="button">先看討論區</button>
          </Link>
        </div>
        <div className="signup-form-wrapper">
          <div className="signup-form">
            <div className="third-party-register-or-login">
              <button type="button" className="signup-fb">
                <div className="signup-fb-content">
                  <svg
                    viewBox="0 0 408.8 408.8"
                    width="18"
                    height="18"
                    fill="#FFF"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M353.7 0H55.1A55 55 0 000 55v298.7a55 55 0 0055 55h147.4l.2-146h-38a9 9 0 01-8.9-9l-.2-47a9 9 0 019-9h37.9v-45.5c0-52.8 32.2-81.5 79.3-81.5h38.7a9 9 0 019 9v39.6a9 9 0 01-9 9h-23.8c-25.6 0-30.5 12.2-30.5 30v39.4h56.3a9 9 0 018.8 10l-5.5 47.1a9 9 0 01-9 8h-50.4l-.2 146h87.6a55 55 0 0055-55.1V55.1a55 55 0 00-55-55.1z"></path>
                  </svg>
                  Facebook 註冊 / 登入
                </div>
              </button>
              <button type="button" className="signup-google">
                <div className="signup-google-content">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      fill="#FBBB00"
                      d="M5.8 14.3l-.8 3H2A11.2 11.2 0 012 6.8l2.5.5 1.1 2.5a6.6 6.6 0 00-.4 2.2c0 .8.2 1.6.5 2.3"
                    ></path>
                    <path
                      fill="#518EF8"
                      d="M23 9.9l.2 2.1a11.2 11.2 0 01-4.2 8.7l-3.2-.1-.4-2.9a6.6 6.6 0 002.8-3.4h-6V10H23z"
                    ></path>
                    <path
                      fill="#28B446"
                      d="M19 20.7a11.2 11.2 0 01-16.9-3.4l3.7-3a6.6 6.6 0 006.2 4.4 6.6 6.6 0 003.4-1l3.6 3z"
                    ></path>
                    <path
                      fill="#F14336"
                      d="M19.2 3.4l-3.7 3a6.7 6.7 0 00-9.8 3.4l-3.6-3a11.2 11.2 0 0117-3.4"
                    ></path>
                  </svg>
                  Google 註冊 / 登入
                </div>
              </button>
              <button type="button" className="signup-apple">
                <div className="signup-apple-content">
                  <svg
                    viewBox="0 0 170 170"
                    width="18"
                    height="18"
                    focusable="false"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 01-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z"
                      fill="#FFF"
                    ></path>
                  </svg>
                  Apple 註冊 / 登入
                </div>
              </button>
            </div>
            <div className="split-line">
              <span>或</span>
            </div>
            <ul>
              <li className="email-wrapper">
                <label htmlFor="email">常用信箱</label>
                <input
                  type="text"
                  placeholder="輸入信箱"
                  name="email"
                  id="email"
                />
              </li>
              <li className="pwd-wrapper">
                <label htmlFor="pwd">密碼</label>
                <div className="pwd-content">
                  <input
                    type="text"
                    placeholder="輸入密碼"
                    name="pwd"
                    id="pwd"
                  />
                  <button type="button" className="pwd-visible">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      focusable="false"
                      role="img"
                      aria-hidden="true"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
            <div className="submit-button">
              <button type="button">註冊/登入</button>
            </div>
            <div className="signup-problem">
              <div
                className="miss-validation-mail"
                onClick={() => setIsMissValidationMail(true)}
              >
                未收到驗證信
              </div>
              ・
              <div
                className="forget-pwd"
                onClick={() => setIsForgetPassword(true)}
              >
                忘記密碼
              </div>
            </div>
            {(isMissValidationMail || isForgetPassword) && (
              <div className="validation-form-Wrapper">
                <div className="validation-form">
                  {isMissValidationMail && <header>收不到驗證信嗎？</header>}
                  {isForgetPassword && <header>密碼重設驗證信</header>}
                  <div className="valid-info">
                    {isMissValidationMail && "重寄驗證信"}
                    {isForgetPassword && "請輸入你的常用信箱/學校信箱"}
                    <input type="email" name="email" id="email" />
                  </div>
                  <footer>
                    <button
                      type="button"
                      className="validation-form-cancel"
                      onClick={() => {
                        setIsMissValidationMail(false);
                        setIsForgetPassword(false);
                      }}
                    >
                      取消
                    </button>
                    {isMissValidationMail && (
                      <button type="button" className="validation-form-resent">
                        點擊重新發送驗證信
                      </button>
                    )}
                    {isForgetPassword && (
                      <button type="button" className="validation-form-resent">
                        完成
                      </button>
                    )}
                  </footer>
                </div>
              </div>
            )}
            <div className="join-agreement">
              <span>註冊/登入即代表您同意遵守</span>
              <Link to="/terms" target="_blank">
                Dcard 使用協議
              </Link>
            </div>
          </div>
          <div className="form-bottom-wrapper">
            <div className="form-bottom">
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
      </div>
    </Wrapper>
  );
}

export default SignUp;
