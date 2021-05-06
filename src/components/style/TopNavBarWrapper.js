import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(({ hasClickArrowIcon }) => [
  tw`
    fixed
    top-0
    left-0
    w-full
    h-12
    bg-lightBlue
  `,
  css`
  & {
    z-index: 100;
  }

  img {
    width: 74.42px;
    height: 28px;
    cursor: pointer;
  }

  input {
    height: 100%;
    padding: 0 8px; 
    flex: 1;
    border-radius: 4px 0 0 4px;
    border: 1px solid ${theme`colors.borderBlue`};
    background-color: ${theme`colors.searchBarBlue`};
  }

  input::placeholder {
    font-size: 14px;
    color: rgb(192, 213, 255);
  }

  button {
    width: 40px;
    height: 30px;
    background-color: ${theme`colors.lightBlue`};
    border-radius: 0px 4px 4px 0;
    border: 1px solid ${theme`colors.borderBlue`};
  }

  a {
    float: right;
  }

  span {
    font-size: 14px;
    padding: 0 16px;
  }

  & .top-container {
    display: flex;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: space-between;
  }

  & .container-left {
    width: 47rem;
    height: 100%;
    display: flex;
    padding: 0 16px;
    align-items: center;
  }

  & .search-bar {
    display: flex;
    width: 100%;
    height: 30px;
    min-width: 200px;
    max-width: 666px;
    padding: 0 32px;
  }

  & .search-bar input {
    font-size: 14px;
    color: rgb(255, 255, 255);
  }

  & .container-right {
    display: flex;
    align-items: center; 
  }

  & .drop-menu {
    padding: 0 2px;
    cursor: pointer;
  }

  & .about-container {
    display: ${hasClickArrowIcon ? "block" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    transform: translate3d(1314px, 48px, 0px);
    width: 160px;
    height: 332px;
    border-radius: 12px;
    background-color: #fff;
    filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 3px 12px);
  }

  & .about-container::before {
    content: "";
    position: absolute;
    top:-7px;
    right: 21px;
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    border: 7px solid #fff;
    border-top-left-radius: 4px;
    transform: rotate(45deg);
  }

  & .about {
    width: 100%;
    height: 100%;
    padding: 6px 0;
    display: flex;
    flex-direction: column;
  }

  & .about li a {
    width: 160px;
    height: 40px;
    line-height: 40px;
    padding: 0 12px;
    font-size: 14px;
    text-transform: uppercase;
    color: rgb(64, 64, 64);
  }
  `
])