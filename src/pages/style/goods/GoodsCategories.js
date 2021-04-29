import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.main(() => [
  tw`
    pt-5
    bg-white
  `,
  css`
    & {
     min-height: calc(100vh - 68px);
    }

    & .goods-category-label-container {
      margin: 0 60px;
      padding: 6px 12px;
      display: flex;
      align-items: center;
    }

    & .goods-category-label-container img {
      margin-right: 8px;
    }

    & .goods-category-label-container h2 {
      color: rgba(0, 0, 0, 0.75);
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }

    & .goods-label-wrapper {
      margin-top: -5px;
      margin-bottom: -2px;
    }
  `
])