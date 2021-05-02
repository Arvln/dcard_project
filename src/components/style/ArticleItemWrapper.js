import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.li(() => [
  tw`
    m-auto
    py-5
  `,
  css`
    & {
      max-width: 608px;
      height: 157px;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    & a {
      display: block;
    }

    & .article-conatiner {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: auto 12px auto 4px auto 16px auto;
      grid-template-areas:
      "header header"
      ". ."
      "title picture"
      ". picture"
      "content picture"
      ". picture"
      "footer picture"
    }

    & .article-header {
      grid-area: header;
      display: flex;
      align-items: center;
    }

    & .category-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
    }

    & .category-title,
    .category-info {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }

    & .category-title::after {
      content: "・";
    }

    & .category-top {
      width: 32px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      margin-left: 8px;
      padding: 0 4px;
      border-radius: 4px;
      background-color: rgb(163, 163, 163);
      color: #fff;
      font-size: 12px;
    }

    & .article-title {
      grid-area: title;
    }

    & .article-title h1 {
      font-weight: 600;
      font-size: 18px;
      color: rgb(0, 0, 0);
    }

    & .article-content {
      grid-area: content;
    }

    & .article-content p {
      width: 504px;
      font-weight: 400;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.75);
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }

    & .article-footer {
      grid-area: footer;
      display: flex;
    }

    & .moods, .comment, .save {
      display: flex;
      align-items: center;
      padding-right: 16px;
    }

    & .moods img {
      width: 20px;
      height: 20px;
      margin-left: -4px;
      border-radius: 50%;
      border: 2px solid rgb(255, 255, 255);
    }

    & .moods span, .comment span, .save span {
      padding-left: 6px;
      font-size: 14px;
      color: rgba(0, 0, 0, .3);
    }

    & .article-img {
      grid-area: picture;
      border-radius: 12px;
      border: 1px solid rgba(0, 0, 0, .1);
      margin-left: 20px;
    }
  `
])