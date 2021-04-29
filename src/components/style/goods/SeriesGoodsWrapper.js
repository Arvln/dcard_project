import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(({showSlideTransformXValue}) => [
  tw`
    pt-6
    pb-3
  `,
  css`
    & .series-goods-title {
      padding: 0 60px;
    }

    & .series-goods-content-wrapper {
      position: relative;
      margin: 0 58px;
      overflow: hidden auto;
    }

    & .series-goods-content-container {
      direction: ltr;
      transform: ${`translate(` + showSlideTransformXValue + `%, 0%)`};
      transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
      display: flex;
    }

    & .series-goods-content {
      width: 100%;
      flex-shrink: 0;
      padding: 0 0 12px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  `
])