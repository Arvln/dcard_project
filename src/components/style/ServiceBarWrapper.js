import { styled, css } from "twin.macro";

export const Wrapper = styled.ul(() => [
  css`
    & .service-bar-wrapper {
      height: 22px;
      margin: -3px -5px;
      display: flex;
    }

    & .service-bar-wrapper li {
      height: 16px;
      font-size: 14px;
      margin: 3px 5px;
    }

    & .service-bar-wrapper li a {
      color: rgb(119, 145, 160);
    }
  `
])