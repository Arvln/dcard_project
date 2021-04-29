import { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  css`
    & {
      padding: 24px 60px;
      background-color: rgb(242, 243, 244);
    }

    & .goods-content-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(296px, 1fr));
      gap: 10px;
    }
  `,
])