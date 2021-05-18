import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    w-full
    h-1.5
  `,
  css`
    & {
      background-color: rgb(242, 243, 244);
    }
  `
])