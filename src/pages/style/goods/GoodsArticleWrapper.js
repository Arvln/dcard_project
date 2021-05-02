import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    fixed
    top-0
    left-0
    w-full
    h-full
  `,
  css`
    & {
      z-index: 99;
      background-color: rgba(0, 0, 0 ,.5);
    }

    & .article-wrapper {
      position: relative;
      min-width: 728px;
      width: 728px;
      height: 100%;
      margin: auto;
      background-color: #fff;
    }
  `
])