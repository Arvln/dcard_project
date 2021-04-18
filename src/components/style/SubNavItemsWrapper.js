import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.ul(() => [
  tw`
    flex
    flex-col
  `,
  css`
    h3, li {
      flex: 1;
      width: 208px;
      min-width: 208px;
      height: 44px;
    }

    a {
      display: block;
      padding: 0 10px 0 20px;
      width: 100%;
      height: 100%;
      font-size: 16px;
      color: rgb(169, 183, 190);
      display: flex;
      justify-content: start;
      align-items: center;
    }

    a:hover {
      background-color: ${theme`colors.darkBlue`};
    }

    img {
      border-radius: 50%;
    }

    h3 {
      padding: 0 10px 0 20px;
      font-size: 14px;
      line-height: 44px;
      font-weight: 400;
      color: rgb(66, 104, 124);
    }

    span {
      margin: 0 10px 0 8px;
    }

    & .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
    }

    & .game-icon {
      /* 僅支持高級瀏覽器 */
      --webkit-mask: url("https://megapx-assets.dcard.tw/images/fef5de4f-db5e-476b-a77c-9119faf6affa/full.png") no-repeat center / 24px 24px;
      mask: url("https://megapx-assets.dcard.tw/images/fef5de4f-db5e-476b-a77c-9119faf6affa/full.png") no-repeat center / 24px 24px;
      background-color: #fff;
    }
  `
])