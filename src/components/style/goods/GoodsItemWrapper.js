import tw, { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    bg-white
  `,
  css`
    & {
      border-radius: 12px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, .08);
      contain: paint;
    }

    & a {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & .goods-item-img {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
    }

    & .fair-label {
      position: absolute;
      top: 24px;
      left: 0;
      height: 18px;
      line-height: 18px;
      padding: 0 8px 0 6px;
      font-weight: 500;
      font-size: 12px;
      border-radius: 0px 9px 9px 0px;
      color: rgb(255, 255, 255);
      background-color: rgb(234, 92, 92);
    }

    & .buy-more-discount,
    .goods-discount {
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 8px;
      padding: 0px 4px;
      width: fit-content;
      height: 18px;
      line-height: 18px;
      border-radius: 4px;
      border: 1px solid rgb(249, 115, 115);
      display: inline-flex;
      align-items: center;
    }

    & .buy-more-discount {
      color: rgb(255, 255, 255);
      background-color: rgb(249, 115, 115);
    }

    & .goods-discount {
      background-color: transparent;
      color: rgb(249, 115, 115);
    }

    & .goods-item-info {
      flex: 1;
      padding: 10px 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    & .goods-item-title h3 {
      margin-bottom: 6px;
      font-weight: 500;
      font-size: 14px;
      color: rgb(0, 0, 0);
    }

    & .goods-item-info span {
      color: rgb(249, 115, 115);
    }
  `
])