import { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(() => [
  css`
    & .signup-wrapper {
      width: 100%;
      max-width: 1140px;
      margin: 48px auto;
      padding: 50px 0;
      display: flex;
      justify-content: space-evenly;
    }

    & .signup-picture {
      padding-top: 80px;
      color: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .signup-picture img {
      height: 250px;
      cursor: zoom-in;
    }

    & .signup-picture h1 {
      font-size: 32px;
      line-height: 45px;
      margin-top: 0.67em;
    }

    & .signup-picture p {
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      opacity: 0.6;
    }

    & .signup-picture button {
      padding: 12px 8px;
      color: ${theme`colors.buttonInitialBackground`};
      opacity: 1;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & .signup-picture a:hover button {
      color: ${theme`colors.buttonHoverBackground`};
    }

    & .signup-form-wrapper {
      border-radius: 4px;
      overflow: hidden;
    }

    & .signup-form {
      width: 522px;
      padding: 60px 60px 12px;
      background: rgb(255, 255, 255);
    }

    & .third-party-register-or-login button {
      position: relative;
      width: calc(100% + 4px);
      transform: translateX(-2px);
      font-size: 14px;
      border-radius: 10px;
      border: 1px solid transparent;
      padding: 0px 16px;
    }

    & .third-party-register-or-login button svg {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
    }

    & .signup-fb {
      background: rgb(66, 95, 156);
      color: rgb(255, 255, 255);
    }

    & .third-party-register-or-login .signup-google {
      margin-top: 20px;
      border-color: rgba(0, 0, 0, .15);
    }

    & .signup-apple {
      margin-top: 20px;
      background: rgba(0, 0, 0, 1);
      color: rgb(255, 255, 255);
    }

    & .signup-fb-content,
    .signup-google-content,
    .signup-apple-content {
      padding: 12px;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }

    & .split-line {
      margin: 16px 0;
      color: rgba(0, 0, 0, 0.35);
      display: flex;
      align-items: center;
    }

    & .split-line::before,
    .split-line::after {
      content: "";
      flex: 1;
      height: 1px;
      background: rgb(223, 223, 223);
    }

    & .split-line span {
      margin: 0 16px;
    }

    & .email-wrapper,
    .pwd-wrapper {
      position: relative;
      margin-bottom: 20px;
    }

    & .email-wrapper label,
    .pwd-wrapper label {
      display: block;
      padding-bottom: 6px;
      color: rgb(0, 0, 0);
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    & .email-wrapper input,
    .pwd-wrapper input,
    .valid-info input {
      display: block;
      width: 100%;
      padding: 10px 14px;
      border: 1px solid rgba(0, 0, 0, .15);
      border-radius: 10px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      caret-color: rgba(0, 0, 0, 1);
    }

    & .email-wrapper input::placeholder,
    .pwd-wrapper input::placeholder,
    .valid-info input::placeholder {
      color: rgba(0, 0, 0, .35);
    }

    & .pwd-wrapper input {
      padding-right: 40px;
    }

    & .pwd-content {
      display: flex;
      align-items: center;
    }

    & .pwd-visible {
      position: absolute;
      right: 0;
      margin: 0 10px;
      fill: rgb(225, 225, 225);
    }

    & .submit-button button {
      transform: translateX(-2px);
      width: calc(100% + 4px);
      margin-top: 4px;
      padding: 12px 1em;
      font-weight: 500;
      line-height: 1.25;
      background: rgba(0, 0, 0, .5);
      border-radius: 10px;
      cursor: not-allowed;
      display: inline-flex;
      justify-content: center;
      color: rgb(255, 255, 255);
    }

    & .signup-problem {
      margin-top: 10px;
      padding: 11px 10px;
      font-size: 14px;
      display: flex;
      justify-content: center;
    }

    & .miss-validation-mail,
    .forget-pwd {
      color: rgb(51, 151, 207);
      font-size: 14px;
      cursor: pointer;
    }

    & .validation-form-Wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0 ,.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & .validation-form {
      max-width: 522px;
      width: 100%;
      background: rgb(255, 255, 255);
      border-radius: 12px;
      box-shadow: rgb(0 0 0 / 5%) 0px 4px 4px 0px, rgb(0 0 0 / 15%) 0px 0px 4px 0px;
    }

    & .validation-form header {
      padding: 40px 60px 12px;
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
    }

    & .valid-info {
      padding: 0 60px 12px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }

    & .validation-form footer {
      padding: 12px 60px 24px;
      display: flex;
      justify-content: flex-end;
    }
    & .validation-form-cancel,
    .validation-form-resent {
      font-weight: 500;
      font-size: 16px;
      border-radius: 10px;
      line-height: 1.25;
      display: inline-flex;
      align-items: center;
    }

    & .validation-form-cancel {
      margin-right: 12px;
      padding: 12px 8px;
      color: rgba(0, 0, 0, .5);
    }

    & .validation-form-resent {
      padding: 12px 16px;
      color: rgb(255, 255, 255);
      background: rgba(0, 0, 0, .5);
      cursor: not-allowed;
    }

    & .join-agreement {
      margin-top: 8px;
      color: rgba(0, 0, 0, .45);
      font-size: 14px;
      line-height: 2;
      text-align: center;
    }

    & .join-agreement a {
      margin-left: 3px;
      color: rgba(0, 0, 0, .45);
      border-bottom: 1px solid rgba(0, 0, 0, .45);
    }

    & .form-bottom-wrapper {
      background: rgb(239, 239, 239);
    }

    & .form-bottom {
      width: 348px;
      margin: auto;
      padding: 16px 0;
      display: flex;
    }

    & .form-bottom a {
      padding: 0 5px;
    }
  `
])
