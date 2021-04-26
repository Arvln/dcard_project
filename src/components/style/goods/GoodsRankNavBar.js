import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.nav(() => [
  tw`
    flex
    bg-white
  `,
  css`
    & {
      height: 60px;
      padding: 0 60px;
    }

    & .latest,
    .hot-sales,
    .price {
      cursor: pointer;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & a {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.75);
    }
  `
])