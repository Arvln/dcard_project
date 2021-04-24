import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.main(({ navBarClassName }) => [
  console.log(navBarClassName),
  tw`
    bg-white
  `,
  css`
    button {
      color: #fff;
      font-weight: 500;
    }

    & .top-navbar {
      position: sticky;
      top: 48px;
      height: 81px;
      padding: 20px 60px 0;
      border-radius: 4px 4px 0 0;
      border-bottom: 1px solid rgba(0, 0, 0, .15);
      background-color: #fff;
      z-index: 100;
    }

    & .first-banner {
      display: block;
    }

    & .first-banner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
    } 

    & .top-navbar-items-wrapper {
      display: flex;
      height: 100%;
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

    & .pessoal-container {
      width: 100%;
      height: 560px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .login-msg {
      width: 280px;
      height: 290px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .login-msg h2 {
      max-width: 64px;
      height: 22px;
      font-size: 16px;
      font-weight: 500;
      margin-top: 16px;
    }

    & .login-msg p {
      max-width: 270px;
      margin-top: 12px;
      padding: 0 16px;
      font-size: 14px;
      color: rgba(0, 0, 0, .5);
    }

    & .login-msg a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 96px;
      height: 44px;
      margin-top: 16px;
      border-radius: 10px;
      background-color: ${theme`colors.buttonInitialBackground`};
      color: rgba(255, 255, 255, 1);
    }

    .login-msg a:hover {
      background-color: ${theme`colors.buttonHoverBackground`};
    }
  `
])