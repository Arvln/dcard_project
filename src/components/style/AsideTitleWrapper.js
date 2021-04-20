import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    rounded-sm
  `,
  css`
    & {
      min-width: 300px;
      height: 771px;
      background-color: skyblue
    }
  `
])