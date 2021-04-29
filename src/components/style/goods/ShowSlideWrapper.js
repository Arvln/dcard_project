import { styled, css } from "twin.macro";

export const Wrapper = styled.div(({showSlideTransformXValue}) => [
  css`
    & {
      padding: 20px 60px 0;
    }

    & .slideshow-container {
      position: relative;
      overflow: hidden auto;
    }

    & .slideshow-img {
      direction: ltr;
      transform: ${`translate(` + showSlideTransformXValue + `%, 0%)`};
      transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
      display: flex;
    }

    & .slideshow-img a {
      width: 100%;
      line-height: 0;
      flex-shrink: 0;
    }

    & .slideshow-img img {
      border-radius: 12px;
    }

    & .top-banner-navbar-wrapper {
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%)
    }
  `
])