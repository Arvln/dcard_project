import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.main(({navBarClassName}) => [
  tw`
    bg-white
  `,
  css`
    & .top-banner {
      position: relative;
    }

    /* scrollIntoView定位的目標元素 */
    & #forum-title-point {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 48px;
    }

    & .top-banner img {
      border-radius: 4px 4px 0 0;
      opacity: 1;
    }

    & .top-navbar {
      position: sticky;
      top: 48px;
      height: 141px;
      padding: 20px 60px 0;
      border-radius: 4px 4px 0 0;
      border-bottom: 1px solid rgba(0, 0, 0, .15);
      background-color: #fff;
      z-index: 10;
    }

    & .logo-container {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
    }

    & .logo-container a {
      flex: 1;
      margin-left: 10px;
      color: rgb(0, 0, 0);
    }

    & .logo-container a h1 {
      font-size: 30px;
      font-weight: 500;
    }

    & .logo-container button {
      width: 56px;
      height: 31.5px;
      padding: 7.25px 14px;
      border-radius: 8px;
      font-weight: 500;
      font-size: 14px;
      color: #fff;
      background-color: ${theme`colors.buttonInitialBackground`};
    }

    & .logo-container button:hover {
      background-color: ${theme`colors.buttonHoverBackground`}
    }

    & .top-navbar-items-wrapper {
      display: flex;
      height: 60px;
    }

    & .top-navbar-items-wrapper li {
      position: relative;
      width: 64px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .top-navbar-items-wrapper li a {
      width: 100%;
      height: 100%;
      font-weight: 500;
      color: rgba(0, 0, 0, .35);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .top-navbar-items-wrapper li a:hover {
      color: rgb(0, 0, 0);
    }

    & .top-navbar-items-wrapper .${navBarClassName} a {
      color: rgb(0, 0, 0);
    }

    & .${navBarClassName}::after {
      position: absolute;
      bottom: -1px;
      content: "";
      border-bottom: 2px solid rgb(51, 151, 207);
      width: 100%;
    }

    & .first-banner a {
      display: block;
      width: 100%;
      height: 100%;
    }

    & .first-banner a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
    }

    & .month-popular-wrapper {
      width: 100%;
      height: 192px;
      padding-top: 20px;
    }

    & .month-popular {
      margin: 0 60px;
      font-size: 20px;
      line-height: 1.4;
      font-weight: 500;
      color: rgba(0, 0, 0, .6);
    }

    & .article-card-wrapper {
      position: relative;
      padding: 10px 40px;
      display: flex;
    }

    & .article-card-container {
      display: flex;
      align-items: center;
      overflow: auto visible;
      scroll-behavior: smooth;
    }

    & .article-card-container::-webkit-scrollbar {
      display: none;
    }

    & .left-arrow-icon-container,
    .right-arrow-icon-container {
      position: absolute;
      top: 0;
      width: 80px;
      height: 100%;
      padding: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      background-image: linear-gradient(to right, rgb(253, 253, 253) 54%, rgba(250, 250, 250, 0));
    }

    & .left-arrow-icon-container {
      left: 0;
    }

    & .right-arrow-icon-container {
      right: 0;
      transform: rotate(180deg);
    }

    & .article-card {
      width: 406px;
      height: 124px;
      margin-right: 16px;
      padding: 20px;
      border: 1px solid rgba(0, 0, 0, .08);
      box-shadow: rgb(0 0 0 / 8%) 0 0 10px 0;
      border-radius: 14px;
      background-color: #fff;
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: 25px 8px 20px 11px 20px;
      grid-template-areas:
      "header picture"
      ". picture"
      "main picture"
      ". picture"
      "footer picture";
      flex-shrink: 0;
      align-self: center;
    }

    & .article-card-title,
    .article-card-content {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    & .article-card-title {
      grid-area: header;
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: rgb(0, 0, 0);
    }

    & .article-card-content {
      grid-area: main;
      font-size: 14px;
      color: rgba(0, 0, 0, .6);
    }

    & .article-author-info {
      grid-area: footer;
      display: flex;
    }

    & .author-identity {
      flex: 1;
      margin: 0 10px 0 8px;
      font-size: 14px;
      color: rgba(0, 0, 0, .5);
    }

    & .article-card-picture {
      grid-area: picture;
      margin-left: 20px;
      border-radius: 12px;
    }

    & .rule-container {
      width: 100%;
      padding: 30px 60px;
    }

    & .rule-container h2 {
      font-size: 20px;
      line-height: 1.6;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6)
    }

    & .version-id {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.35);
    }

    & .forum-rule-title {
      margin-top: 30px;
    }

    & .rule-title-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & .rule-description,
    .rule-contents {
      margin-top: 30px;
    }

    & .rule-contents li {
      border-bottom: 1px solid rgb(222, 222, 222);
      margin-top: 10px;
      padding-bottom: 8px;
    }

    & .forum-rule-title p,
    .rule-description p {
      line-height: 1.56;
      margin-top: 10px;
      color: rgba(0, 0, 0, 0.6);
    }

    & .rule-contents-description p {
      line-height: 1.56;
    }
    
    & .rule-contents-description span {
      display: block;
      height: 19px;
    }

    & .rule-contents-description div {
      line-height: 24.96px;
    }

    & .rule-contents-description,
    .rule-contents-description div {
      margin-top: 10px;
      color: rgba(0, 0, 0, 0.45);
    }
  `
])