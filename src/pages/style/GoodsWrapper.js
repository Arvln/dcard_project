import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.main(({firstBannerTransfromXValue, featureGoodsTransfromXValue, latestGoodsTransformXValue}) => [
  tw`
    pt-5
    bg-white
  `,
  css`
    & .goods-title-wrapper {
      height: 60px;
      padding: 0 60px;
    }

    & .goods-title-container {
      height: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
    }

    & .goods-logo-wrapper {
      width: 40px;
      height: 40px;
      margin-right: 13px;
      background-color: rgb(242, 243, 244);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .goods-title-wrapper h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      flex: 1;
    }

    & .goods-order-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .goods-order-wrapper span {
      font-size: 12px;
      line-height: 17px;
      color: rgba(0, 0, 0, .5);
    }

    & .slideshow-wrapper {
      padding: 20px 60px 0;
    }

    & .slideshow-container {
      position: relative;
      overflow: hidden auto;
    }

    & .slideshow-img {
      direction: ltr;
      transform: ${`translate(` + firstBannerTransfromXValue + `%, 0%)`};
      transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
      display: flex;
    }

    & .slideshow-img a {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
    }

    & .slideshow-img img {
      border-radius: 12px;
    }

    & .first-banner-navbar-wrapper {
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%)
    }

    & .goods-category-nav {
      padding: 20px 60px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(68px, 1fr));
      grid-gap: 16px 22px;
    }

    & .goods-category-nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .goods-category-nav-item img {
      width: 44px;
      height: 44px;
      margin-bottom: 8px;
    }

    & .goods-category-nav-item div {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: rgba(0, 0, 0, .5);
    }

    & .special-goods-wrapper {
      height: 309.33px;
      padding: 0 60px;
      display: flex;
    }

    & .time-limited-wrapper,
    .latest-goods-wrapper {
      padding: 12px 12px 6px;
      border-radius: 12px;
    }

    & .latest-goods-container-wrapper {
      position: relative;
      overflow: hidden auto;
    }

    & .latest-goods-container {
      transform: ${`translate(` + latestGoodsTransformXValue + `%, 0%)`};
      transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
      direction: ltr;
      display: flex;
    }

    & .time-limited-wrapper {
      flex: 1;
      margin-right: 10px;
      background-color: rgba(255, 100, 72, .1);
    }

    & .time-limited-title {
      margin-top: 2px;
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    & .time-limited-title h2 {
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: rgba(0, 0, 0, .75);
    }

    & .time-limited-count {
      display: flex;
    }

    & .time-limited-count div:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.95);
      border-radius: 4px;
      color: rgb(255, 255, 255);
      width: 19px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      font-weight: 600;
      font-size: 12px;
    }

    & .time-limited-count div:nth-child(even) {
      padding: 0 2px;
    }

    & .time-limited-goods-img {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
    }

    & .time-limited-goods-img img,
    .time-limited-goods-sold-out {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }

    & .time-limited-goods-sold-out {
      /* z-index: -1; */
      background: rgba(0, 0, 0, .5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .goods-sold-out-tips {
      position: relative;
      width: 92px;
      height: 92px;
      color: rgb(255, 255, 255);
      border: 2px solid rgb(255, 255, 255);
      border-radius: 50%;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & .goods-sold-out-tips::before,
    .goods-sold-out-tips::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 5px;
      width: 5px;
      background-color: rgb(255, 255, 255);
      border-radius: 50%;
    }

    & .goods-sold-out-tips::before {
      left: 10px;
    }

    & .goods-sold-out-tips::after {
      right: 10px;
    }

    & .time-limited-goods-title {
      position: relative;
      width: 100%;
      height: 20px;
      margin-top: 10px;
    }

    & .time-limited-goods-title h3 {
      position: absolute;
      width: 100%;
      color: rgba(0, 0, 0, .75);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    & .time-limited-price {
      margin-top: 4px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: rgb(249, 115, 115);
    }

    & .origin-price {
      font-weight: 500;
      font-size: 12px;
      margin-left: 4px;
      color: rgba(0, 0, 0, .2);
      display: inline-block;
      text-decoration-line: line-through;
      margin-bottom: 2px;
    }

    & .time-limited-goods-container p {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      color: rgba(0, 0, 0, 0.35);
      margin-top: 3px;
    }

    & .latest-goods-wrapper {
      flex: 2;
      height: auto;
      background-color: rgba(0, 0, 0, .05);
    }

    & .latest-goods-wrapper header {
      margin-top: 2px;
      margin-bottom: 6px;
    }

    & .latest-goods-wrapper header h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }

    & .latest-goods-item {
      width: 100%;
      flex-shrink: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    & .latest-goods-item a {
      border-radius: 12px;
      overflow: hidden;
      background-color: #fff;
    }

    & .latest-goods-item-img {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
    }

    & .latest-goods-item-img img {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    & .latest-goods-item-info {
      padding: 10px 12px 16px;
    }

    & .latest-goods-item-info-title {
      position: relative;
      width: 100%;
      height: 20px;
    }

    & .latest-goods-item-info-title h3 {
      position: absolute;
      width: 100%;
      color: rgba(0, 0, 0, 0.75);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    & .latest-goods-item-info span {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: rgb(249, 115, 115);
    }

    & .latest-goods-navbar-wrapper {
      padding-top: 8px;
    }

    & .goods-popular-rank-wrapper {
      height: 273px;
      padding: 24px 60px;
    }

    & .goods-popular-rank-container {
      padding: 12px;
      background-color: rgba(0, 0, 0, .05);
      border-radius: 12px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }

    & .goods-popular-rank-item,
    .goods-popular-rank-item a {
      display: block;
      width: 100%;
      height: 100%;
    }

    & .goods-popular-rank-item-img {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
    }

    & .goods-popular-rank-item-img img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }

    & .goods-popular-rank-item p {
      margin-top: 10px;
      font-size: 12px;
      line-height: 17px;
      color: rgb(249, 115, 115);
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & .featured-goods {
      padding: 24px 60px;
      display: flex;
      flex-direction: column;
    }

    & .feature-goods-title {
      margin-bottom: 12px;
      display: flex;
      align-items: flex-end;
    }

    & .feature-goods-title img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
      align-self: center;
    }

    & .feature-goods-title h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: rgba(0, 0, 0, .75);
    }

    & .feature-goods-title h5 {
      margin-left: 8px;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      color: rgb(249, 115, 115);
      flex: 1;
    }

    & .feature-goods-title p {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      color: rgba(0, 0, 0, .5);
    }

    & .feature-goods-content-wrapper {
      position: relative;
      overflow: hidden auto;
    }

    & .feature-goods-content-container {
      display: flex;
      transform: ${`translate(` + featureGoodsTransfromXValue + `%, 0px)`};
      direction: ltr;
      transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
    }

    & .feature-goods-content {
      width: 100%;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
    }

    & .feature-goods-item {
      width: 298px;
      height: 198px;
      border-radius: 12px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 198px 98px;
      grid-template-rows: 98px 98px;
      gap: 2px;
      grid-template-areas:
      "first second"
      "first third"
    }

    & .feature-goods-item .first-img {
      grid-area: first;
      width: 100%;
      height: 100%;
    }

    & .feature-goods-item .second-img {
      grid-area: second;
      width: 100%;
      height: 100%;
    }

    & .feature-goods-item .third-img {
      grid-area: third;
      width: 100%;
      height: 100%;
    }

    & .feature-goods-content-container h6 {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.75);
      margin-top: 12px;
      margin-bottom: 2px;
    }

    & .feature-goods-content-container span {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      color: rgba(0, 0, 0, .35);
    }

    & .goods-content-wrapper {
      padding: 24px 60px;
      background-color: rgb(242, 243, 244);
    }

    & .goods-content-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-template-rows: repeat(auto-fill, minmax(296px, 1fr));
      gap: 10px;
    }
  `
])