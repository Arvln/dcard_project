import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.button(() => [
  tw`
    w-14
    rounded-lg
    font-medium
    text-sm
    cursor-pointer
    bg-buttonInitialBackground
    flex
    justify-center
    items-center
  `,
  css`
    & {
      height: 31.5px;
      padding: 7.25px 14px;
      color: #fff;
    }

    & :hover {
      background-color: ${theme`colors.buttonHoverBackground`};
    }
  `
])