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
  `
])