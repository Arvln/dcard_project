import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    fixed
    top-0
    w-full
    h-full
    overflow-hidden
  `,
  css`
    & {
      z-index: 101;
      background-color: rgba(0, 0, 0 ,.5);
    }

    & .article-wrapper {
      min-width: 728px;
      width: 728px;
      height: 100%;
      padding: 0 60px;
      margin: auto;
      background-color: #fff;
      overflow: auto;
    }

    & .article-wrapper header {
      padding: 40px 0 22px;
      display: flex;
      justify-content: space-between;
    }

    & .article-author-state {
      display: flex;
      align-items: center;
    }

    & .article-author-state svg {
      margin-right: 8px;
    }

    & .article-author-type {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: rgb(0, 0, 0);
    }

    & .article-wrapper section h1 {
      font-weight: 500;
      font-size: 28px;
      line-height: 40px;
      overflow-wrap: break-word;
      color: rgba(0, 0, 0, .95);
    }

    & .cancel-button {
      width: 24px;
      height: 24px;
    }

    & .cancel-button button {
      fill: rgb(196, 196, 196);
    }

    & .cancel-button button:hover {
      fill: rgb(51, 151, 207);
    }

    & .article-record {
      display: flex;
      align-items: center;
      margin-top: 12px;
      font-size: 14px;
    }

    & .to-section-link {
      width: 28px;
      height: 16px;
      color: #3397cf;
    }

    & .article-published-time::before {
      content: "·";
      padding: 0 0.5em;
    }

    & .article-published-time {
      color: rgba(0, 0, 0, .35);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & .article-content-container {
      font-size: 16px;
      line-height: 28px;
      color: rgba(0, 0, 0 ,.75);
    }

    & .article-content {
      padding: 20px 0 40px;
      /* 僅chrome瀏覽器支援 */
      white-space: break-spaces;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    & .article-category-label {
      display: flex;
      padding: 0 0 16px;
    }

    & .article-category-label a {
      height: 32px;
      margin: 8px 8px 0 0;
      padding: 0 16px;
      font-weight: 500;
      color: rgba(0, 0, 0, .75);
      font-size: 14px;
      border-radius: 16px;
      background: rgb(239, 239, 239);
      display: flex;
      align-items: center;
    }

    & .article-apply-wrapper,
    .article-current-state,
    .article-moods-image,
    .article-mark {
      display: flex;
      align-items: center;
    }

    & .article-apply-wrapper {
      flex: 1;
    }

    & .article-moods-image {
      padding: 6px 6px 6px 0;
    }

    & .article-moods-image img {
      margin-left: -4px;
      border-radius: 50%;
      border: 2px solid rgb(255, 255, 255);
    }

    & .article-moods-count,
    .article-apply-count {
      color: rgba(0, 0, 0, .5);
      font-size: 18px;
    }

    & .article-mark button {
      height: 24px;
      padding: 0 8px;
      fill: rgba(0, 0, 0, .2);
    }

    & .article-mark button:hover {
      fill: rgb(234, 92, 92);
    }

    & .article-info {
      width: 100%;
      height: 179px;
      padding: 40px 0;
    }

    & .article-info h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      border-bottom: 1px solid rgba(0, 0, 0, .05);
      color: rgba(0, 0, 0, .5);
      padding-bottom: 4px;
    }

    & .forums-label {
      padding: 16px 0;
      display: flex;
      align-items: center;
    }

    & .forums-label-info {
      flex: 1;
      padding-left: 8px;
      display: flex;
      flex-direction: column;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & .forums-label-info h5 {
      font-size: 14px;
      line-height: 20px;
      color: rgb(0, 0, 0);
    }

    & .forums-label-info span {
      color: rgba(0, 0, 0, .5);
      font-size: 12px;
      line-height: 17px;
      margin-top: -1px;
    }

    & .popular-comment,
    .article-comment-wrapper {
      position: relative;
      padding: 40px 0;
      z-index: 100;
    }

    & .popular-comment::before,
    .article-comment-wrapper::before {
      position: absolute;
      top: 0;
      left: -60px;
      right: -60px;
      height: 100%;
      content: "";
      background: rgb(245, 245, 245);
      z-index: -1;
    }

    & .popular-comment h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      border-bottom: 1px solid rgba(0, 0, 0, .05);
      color: rgba(0, 0, 0, .5);
      padding-bottom: 4px;
    }

    & .related-article-maybe-interest {
      padding: 40px 0;
    }

    & .related-article-maybe-interest h4,
    .article-comment h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.5);
      padding-bottom: 4px;
    }

    & .related-article-maybe-interest ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0px 43px;
      margin-top: 10px;
    }

    & .related-article-maybe-interest ul li {
      position: relative;
      padding: 8px 0 8px 15px;
      display: flex;
    }

    & .related-article-maybe-interest ul li::before {
      content: "";
      width: 7px;
      height: 7px;
      position: absolute;
      top: 15px;
      left: 0px;
      border-radius: 50%;
      margin: auto;
      background: rgb(51, 151, 207);
    }

    & .related-article-maybe-interest ul li a {
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    & .related-article-maybe-interest-title {
      font-size: 16px;
      font-weight: bold;
      color: rgb(0, 0, 0);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & .related-article-maybe-interest-count {
      font-size: 14px;
      color: rgba(0, 0, 0, .35);
      display: flex;
      align-items: center;
    }

    & .related-article-maybe-interest-count span:first-child::after {
      content: "・";
    }

    & .article-public-comment-bar-wrapper {
      height: 48px;
      display: flex;
    }

    & .article-public-comment-bar-wrapper input,
    .article-public-comment-bar-wrapper button {
      height: 100%;
    }

    & .article-public-comment-bar-wrapper input {
      flex: 1;
    }

    & .article-public-comment-bar-wrapper button {
      width: 40px;
      padding: 0 8px;
      fill: rgba(0, 0, 0, .2)
    }

    & .article-public-comment-bar-wrapper button:hover {
      fill: rgb(51, 151, 207);
    }

    & .article-public-comment-bar-wrapper .apply-like-btn:hover {
      fill: rgb(234, 92, 92);
    }
  `
])