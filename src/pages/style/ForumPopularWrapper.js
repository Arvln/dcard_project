import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.main(() => [
  tw`
    p-10
    bg-white
  `,
  css`
    & {
      
    }

    & h1 {
      font-size: 14px;
      font-weight: 500;
      color: rgba(0, 0, 0, .5);
    }

    & ul {
      margin-top: 10px;
    }

    & .popular-forums-container {
      padding: 20px;
      border: 1px solid rgb(217, 217, 217);
    }

    & .popluar-forum {
      height: 88px;
      border-bottom: 1px solid rgb(217, 217, 217);
    }

    & .popluar-forum a {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    & .popular-forum-no {
      min-width: 18px;
      margin-right: 20px;
      color: rgba(0, 0, 0, 0.75);
      text-align: right;
    }

    & .popular-forum-icon {
      border-radius: 50%;
    }

    & .popular-forum-title {
      flex: 1;
      margin: 0 20px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.75);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `
])