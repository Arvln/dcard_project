import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.main(() => [
  tw`
    pt-5
    bg-white
  `,
  css`
    & {
      height: 3000px;
    }
  `
])