import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    bg-white
  `,
  css`
    & {
      padding: 24px 60px 16px;
    }

    & .goods-label-wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    & .goods-label-wrapper a {
      height: 32px;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 0 16px;
      font-weight: 500;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.75);
      border-radius: 16px;
      background: rgb(239, 239, 239);
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  `
])