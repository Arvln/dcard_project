import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    py-5
  `,
  css`
    & {
      height: 215px;
      margin: 0 60px;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    h1 {
      font-weight: 700;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.75);
    }

    a {
      display: block;
      font-size: 14px;
      color: rgb(51, 151, 207);
    }

    & .related-forums-wrapper {
      position: relative;
      display: flex;
    }

    & .related-forums-container {
      padding: 8px 0 24px 0;
      display: flex;
      overflow: auto visible;
      scroll-behavior: smooth;
    }

    & .related-forums-container::-webkit-scrollbar {
      display: none;
    }

    & .related-forums-wrapper .left-arrow-icon-container {
      position: absolute;
      left: -50px;
    }

    & .related-forums-wrapper .right-arrow-icon-container {
      position: absolute;
      right: -50px;
    }

    & .related-forum-card {
      position: relative;
      width: 146px;
      height: 110px;
      margin-right: 8px;
      border-radius: 12px;
      box-shadow: rgb(0 0 0 / 8%) 0px 3px 12px;
      flex-shrink: 0;
    }

    & .logo-img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 48.81px;
      background: url("https://megapx-assets.dcard.tw/images/a366d316-3458-4123-9091-929ee1fe884b/full.jpeg") no-repeat center / cover;
      z-index: 1;
    }

    & .related-forum-card-content {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .related-forum-card-content img {
      margin-top: 18px;
      border-radius: 50%;
      border: 2px solid #fff;
    }

    & .related-forum-card-content h3 {
      margin-top: 4px;
      font-size: 14px;
      font-weight: 400;
    }

    & .related-forum-card-content span {
      margin-top: 4px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.35);
    }

    & .left-arrow-icon-wrapper, .right-arrow-icon-wrapper {
      position: absolute;
      top: 0;
      width: 80px;
      height: 100%;
      padding: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      background-image: linear-gradient(to right, rgb(253, 253, 253) 54%, rgba(250, 250, 250, 0));
      z-index: 3;
    }

    & .left-arrow-icon-wrapper {
      left: -50px;
    }

    & .right-arrow-icon-wrapper {
      right: -50px;
      transform: rotate(180deg);
    }
  `
])