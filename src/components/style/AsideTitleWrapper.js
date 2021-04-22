import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.section(({ hasClickArrowIcon }) => [
  tw`
    rounded-sm
    bg-white
    p-5
    mb-2.5
  `,
  css`
    & {
      max-width: 300px;
    }

    & h1 {
      margin-left: 10px;
      font-size: 20px;
      font-weight: 500;
    }

    & .forum-posts-count,
    .forum-introduce p {
      max-width: 244px;
      line-height: 1.43;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }

    & .forum-posts-count {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    & .forum-introduce p {
      overflow: ${hasClickArrowIcon || "hidden"};
      text-overflow: ${hasClickArrowIcon || "ellipsis"};
      white-space: ${hasClickArrowIcon || "nowrap"};
    }

    & .forum-introduce svg {
      cursor: pointer;
      transform: ${hasClickArrowIcon && "rotate(180deg)"};
    }

    & .forum-introduce {
      height: ${hasClickArrowIcon ? "600px" : "21px"};
      transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
    }

    & .forum-indroduce-header {
      display: flex;
      align-items: flex-start;
    }

    & .forum-title-wrapper {
      height: 32px;
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }

    & .forum-info-nav {
      /* 淡入淡出速度 */
      opacity: ${hasClickArrowIcon ? 1 : 0};
      transition: opacity 300ms cubic-bezier(.7, 0, 0.5, 3);
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    & .forum-info-nav li {
      width: 74px;
      height: 32px;
      margin-top: 8px;
      margin-right: 8px;
    }

    & .forum-info-nav li a {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: rgba(0, 0, 0, 0.75);
      background: rgb(239, 239, 239);
    }

    & .forum-info-nav li a::before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    & .post-article {
      width: 100%;
      height: 44px;
      margin-top: 20px;
      margin-bottom: 10px;
      border-radius: 10px;
      font-weight: 500;
      color: #fff;
      background-color: #3397cf;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .post-article:hover {
      background-color: #5ab0db;
    }
  `,
]);