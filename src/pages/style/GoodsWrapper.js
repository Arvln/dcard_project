import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.main(() => [
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

    & .slideshow {
      padding: 20px 60px 0;
    }

    & .slideshow img {
      border-radius: 12px;
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
      background-color: pink;
    }

    & .goods-popular-rank-wrapper {
      height: 273px;
      padding: 24px 60px;
      background-color: skyblue;
    }

    & .featured-goods {
      height: 334px;
      padding: 24px 60px;
      background-color: gray;
    }

    & .goods-content {
      padding: 24px 60px;
      background-color: rgb(242, 243, 244);
      background-color: coral;
    }
  `
])