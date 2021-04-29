import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.button(({direction}) => [
  tw`
    absolute
    w-6
    h-6
    p-0
    cursor-pointer
  `,
  css`
    & {
      top: 50%;
      ${direction}: 0;
      background: rgba(0, 0, 0, 0.28);
      border-radius: 4px 0px 0px 4px;
      transform: translateY(-50%);
      transition: all 0.4s ease 0s;
    }

    &:hover {
      width: 32px;
      height: 32px;
    }

    & svg {
      width: 24px;
      height: 24px;
      transition: all 0.4s ease 0s;
      transform: ${direction === "left" ? "rotate(180deg)" : ""};
      fill: rgb(255, 255, 255);
    }

    &:hover svg {
      width: 32px;
      height: 32px;
    }
  `
])