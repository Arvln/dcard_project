import { Wrapper } from "./style/HomeWrapper";
import { ArticleItem } from "../components/common";
import { Link } from "react-router-dom";
import { NavBarClassName } from "./sections/Sections";

type Props = {
  navBarClassName: NavBarClassName
}

function Home({navBarClassName}: Props) {

  return (
    <Wrapper navBarClassName={navBarClassName}>
      <div className="top-navbar">
        <ul className="top-navbar-items-wrapper">
          <li className={NavBarClassName.Popular}>
            <Link to="/f">
              <span>熱門</span>
            </Link>
          </li>
          <li className={NavBarClassName.Latest}>
            <Link to="/f/latest">
              <span>最新</span>
            </Link>
          </li>
          <li className={NavBarClassName.Pessoal}>
            <Link to="/f/pessoal">
              <span>追蹤</span>
            </Link>
          </li>
        </ul>
      </div>
      {navBarClassName === NavBarClassName.Popular && (
        <a
          href="https://youtu.be/ETogpwOdkSY"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="first-banner"
        >
          <img
            src="https://megapx-assets.dcard.tw/images/120e66b3-da52-4959-b4e0-f4807e5a84a7/full.png"
            alt="(banner)0421_Dcard尋奇EP27.png"
            width="1800"
            height="600"
          />
        </a>
      )}
      {navBarClassName === NavBarClassName.Pessoal || (
        <ul>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </ul>
      )}
      {navBarClassName === NavBarClassName.Pessoal && (
        <div className="pessoal-container">
          <div className="login-msg">
            <img
              src="https://www.dcard.tw/_next/static/media/noFollowing-1f473c65cdedb9bc8d2798c4b24a63f7.png"
              alt="Please Login"
              width="280"
              height="160"
            />
            <h2>尚未登入</h2>
            <p>追蹤喜歡的內容建立專屬文章列表</p>
            <Link to="/signup">
              <button type="button">立即登入</button>
            </Link>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default Home;
