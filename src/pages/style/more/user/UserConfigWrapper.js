import { styled, css } from "twin.macro";

export const Wrapper = styled.div(() => [
  css`
    .config-title {
      height: 60px;
      width: 100%;
      color: rgb(0, 0, 0);
      font-weight: 500;
      font-size: 24px;
      line-height: 60px;
      border-bottom: 1px solid rgba(0, 0, 0, .15);
    }

    .service-area-wrapper {
      padding: 24px 0px 30px;
      border-bottom: 1px solid rgba(0, 0, 0, .05);
    }

    .service-area {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .service-area h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 36px;
      color: rgba(0, 0, 0, 0.75);
    }

    .service-area button {
      padding: 7.25px 1em;
      font-size: 14px;
      font-weight: 500;
      border-radius: 8px;
      line-height: 1.25;
      background: rgba(0, 16, 32, .06);
      color: rgba(0, 0, 0, .75);
    }

    .service-area-wrapper p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.5);
      max-width: 500px;
      margin-top: 12px;
    }

    .area-position {
      margin-top: 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  `
])