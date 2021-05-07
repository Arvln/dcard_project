import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.main(() => [
  tw`
    bg-white
  `,
  css`
    & {
      padding: 20px 60px;
    }

    & ul {
      margin-top: 10px;
    }

    & header {
      height: 48px;
      padding: 16px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & header h3 {
      font-size: 16px;
      color: rgba(0, 0, 0, .75);
      font-weight: 500;
    }

    & .all-forums-title h1 {
      line-height: 61px;
      font-size: 28px;
      font-weight: 500;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    & .forums-arrow-icon-wrapper {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .forums-arrow-icon-wrapper svg {
      fill: rgba(0, 0, 0, .5);
      transform: rotate(0deg);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }

    & .forums-list {
      /* 控制高度並隱藏子元素內容達到控制但出入效果 */
      max-height: 0;
      transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
      contain: paint;
    }

    & .forums-list article {
      height: 44px;
      padding: 8px 16px 8px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    & .forums-list img,
    .forums-list svg {
      border-radius: 50%;
    }

    & .forums-list h4 {
      flex: 1;
      padding: 0 10px;
      color: rgb(0, 0, 0);
    }
  `
])