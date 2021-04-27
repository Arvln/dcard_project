import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    flex
    justify-center
  `,
  css`
    & div {
      width: 8px;
      height: 4px;
      border-radius: 2px;
      cursor: pointer;
      transition: width 0.3s ease 0s, background 0.3s ease 0s;
      margin: 0px 3px;
      background: rgba(0, 0, 0, .5);
    }

    & .selected {
      width: 16px;
      background: rgb(249, 115, 115);
    }
  `
])