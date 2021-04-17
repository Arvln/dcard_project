import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    grid
    m-auto
    max-w-screen-xl
    pt-12
    pr-5
  `,
  css`
    grid-template-columns: [start] 208px [mainLeft] auto [mainRight] 300px [end];
    p {
      grid-column: 2 / 3;
      background-color: pink;
    }
  `
])