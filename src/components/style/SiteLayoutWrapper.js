import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    grid
    max-w-screen-xl
    m-auto
    pt-12
    pr-5
  `,
  css`
    & {
      grid-template-columns: [start] 208px [mainLeft] auto [mainRight] 300px [end];
    }

    & .forum-subnav {
      position: fixed;
      grid-column: start / mainLeft;
      width: 208px;
      min-width: 208px;
      min-height: 2056px;
      padding: 20px 0;
    }

    & .botton-nav {
      overflow-y: scroll;
      overflow-x: hidden;
      width: 100%;
      height: calc(100vh - 270px);
    }

    /* 滾動條樣式 */
    & .botton-nav::-webkit-scrollbar {
      display: block;
      width: 6px;
      height: 25px;
      transform: translate3d(0px, -11px, 0px);
    }

    /* 滾動滑塊 */
    & .botton-nav::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgba(0, 0, 0, 0.5);
      inset: 1px;
    }

    & .forum-content {
      grid-column: mainLeft / mainRight;
      min-width: 728px;
      margin: 0 12px;
      padding-top: 20px;
    }

    & .forum-content main {
      width: 100%;
      min-height: 2056px;
      border-radius: 4px 4px 0 0;
      /* 保持圓角效果不被覆蓋 */
      contain: paint;
    }

    & .forum-msg {
      grid-column: mainRight / end;
      padding: 20px 0;
      min-width: 300px;
      height: 2056px;
    }

    & .forum-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 99;
      width: 100%;
      height: 132px;
      background-color: rgba(36, 40, 45, 0.95);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .footer-container {
      width: 728px;
      height: 71px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .footer-container h3 {
      margin-bottom: 8px;
      font-size: 20px;
      font-weight: 400;
    }

    & .footer-button {
      width: 56px;
      height: 100%;
      margin-left: 16px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    & .sign-in,
    .sign-up {
      width: 100%;
      height: 100%;
      font-weight: 500;
    }

    & .sign-in {
      margin-bottom: 8px;
      border-radius: 8px;
      background-color: rgb(51, 151, 207);
    }

    & .sign-in:hover {
      background-color: #5ab0db;
    }

    & .sign-up a {
      color: ${theme`colors.buttonInitialBackground`};
    }

    & .sign-up a:hover {
      color: ${theme`colors.buttonHoverBackground`};
    }

    & .footer-button div a {
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: center;
    }

    /* a標籤文字垂直置中 */
    & .footer-button div::before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    & .short-msg {
      min-width: 300px;
      height: 250px;
      margin-bottom: 10px;
    }

    & .long-msg {
      min-width: 300px;
      height: 600px;
      margin-bottom: 10px;
    }
  `
])