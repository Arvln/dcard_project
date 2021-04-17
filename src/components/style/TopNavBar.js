import tw, { styled, css, theme } from "twin.macro";

export const Wrapper = styled.div(() => [
  tw`
    fixed
    top-0
    w-full
    h-12
  `,
  css`
  & {
    background-color: ${theme`colors.lightBlue`};
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
    height: 100%;
    display: flex;
    padding: 0 16px;
    align-items: center;
  }

  & .search-bar {
    display: flex;
    width: 41.625rem;
    height: 30px;
    min-width: 200px;
    max-width: 666px;
    padding: 0 32px;
  }

  & .container-right {
    display: flex;
    align-items: center; 
  }

  & .drop-menu {
    padding: 0 2px;
    cursor: pointer;
  }
  `
])