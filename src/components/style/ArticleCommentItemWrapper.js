import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    py-4
  `,
  css`
    & {
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    & .comment-title-wrapper {
      display: flex;
      align-items: center;
    }

    & .comment-floor::after {
      content: "・";
    }

    & .comment-info-wrapper {
      flex: 1;
    }

    & .comment-info {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: rgba(0, 0, 0, .5);
      margin-top: -1px;
      display: flex;
      align-items: center;
    }

    & .comment-author-name {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: rgb(0, 0, 0);
      margin-right: 2px;
    }
    
    & .comment-like-wrapper {
      fill: rgba(0, 0, 0, .2);
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    & .comment-like-wrapper:hover {
      fill: rgb(234, 92, 92);
    }

    & .comment-like-wrapper svg {
      padding-right: 8px;
    }

    & .comment-like-wrapper span {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, .5);
    }

    & .comment-content {
      padding-top: 20px;
      word-break: break-all;
      font-weight: 400;
      font-size: 16px;
      color: rgba(0, 0, 0, .75);
      line-height: 28px;
    }

    & .comment-content p {
      white-space: break-spaces;
      word-break: break-word;
    }
  `
])