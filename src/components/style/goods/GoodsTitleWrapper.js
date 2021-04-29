import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    bg-white
  `,
  css`
    & {
      height: 60px;
      padding: 0 60px;
    }

    & .goods-title-container {
      height: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
    }

    & .goods-title-container h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      flex: 1;
    }
  `
])