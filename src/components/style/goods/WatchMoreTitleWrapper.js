import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.header(() => [
  tw`
    flex
    items-center
    mb-3
  `,
  css`
    & img {
      margin-right: 4px;
    }

    & h4 {
      flex: 1;
      color: rgba(0, 0, 0, 0.75);
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
    }

    & a {
      align-self: flex-end;
      display: flex;
      align-items: center;
      height: 20px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 500;
      line-height: 18px;
    }
  `
])