import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    grid
    max-w-screen-xl
    m-auto
    pt-12
    pr-5
  `,
  css`
    & {
      grid-template-columns: [start] 208px [mainLeft] auto [mainRight] 300px [end];
    }

    & .forum-subnav {
      position: fixed;
      grid-column: start / mainLeft;
      width: 208px;
      min-width: 208px;
      height: calc(100vh - 270px);
      padding: 20px 0;
    }

    & .botton-nav {
      overflow-y: scroll;
      overflow-x: auto;
      width: 100%;
      height: 100%;
    }

    & .forum-content {
      grid-column: mainLeft / mainRight;
      min-width: 752px;
    }

    & .forum-msg {
      grid-column: mainRight / end;
      height: 200px;
    }
  `
])