import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    h-screen
  `,
  css`
    & .download-app-wrapper {
      position: relative;
      margin-top: 48px;
      height: calc(100% - 48px);
    }

    & .download-app-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 560px;
      padding: 50px 0;
      background: rgb(255, 255, 255);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .download-app-wrapper img {
      height: 250px;
      cursor: zoom-in;
    }

    & .download-app-wrapper h1 {
      font-size: 32px;
      line-height: 45px;
      margin-top: 0.67em;
    }

    & .download-app-wrapper p {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      opacity: 0.6;
    }

    & .download-app-content {
      width: 400px;
      margin: 20px 80px 0px;
      display: flex;
    }

    & .download-app-content img {
      max-height: 56px;
      padding: 0 5px;
      cursor: pointer;
    }
  `
])