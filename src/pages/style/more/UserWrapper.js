import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw``,
  css`
    & main {
      width: 100%;
      height: 100vh;
      padding-top: 68px;
      display: flex;
      justify-content: center;
    }

    & .user-info-wrapper {
      display: flex;
    }

    & .user-info-container {
      position: sticky;
      top: 68px;
      width: 208px;
      height: calc(100vh - 94px);
      color: rgb(255, 255, 255);
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    & .user-info {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .user-picture {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
    }

    & .username {
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      padding: 16px 0 10px 0;
    }

    & .user-msg {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

    & .user-info a button {
      margin: 16px 0 20px;
      padding: 7.25px 1em;
      cursor: pointer;
      font-weight: 500;
      font-size: 14px;
      border-radius: 8px;
      line-height: 1.25;
      background: ${theme`colors.buttonInitialBackground`};
      color: rgb(255, 255, 255);
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

    & .user-record {
      overflow: hidden scroll;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    & .user-record a {
      width: 100%;
      border-radius: 10px;
      color: rgb(255, 255, 255);
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      align-items: center;
      padding: 7px 16px;
      text-align: left;
    }

    & .user-record a svg {
      height: 30px;
      margin-right: 12px;
    }

    & .user-config-wrapper {
      padding-left: 12px;
      display: flex;
      flex-direction: column;
    }

    & .user-config-container {
      width: 760px;
      min-height: 660px;
      height: fit-content;
      padding: 20px 60px;
      background-color: rgb(242, 243, 244);
      border-radius: 12px;
    }

    & footer {
      padding: 26px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & .service-bar-wrapper li a {
      color: rgb(255, 255, 255);
    }

    & .copyright {
      margin: 3px 5px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
    }
  `
])