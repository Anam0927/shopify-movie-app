import { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    font-weight:700;
    font-size: 1em;

    border: none;
    border-radius: 16px;
    line-height: 1em;
    cursor: pointer;

    background-color: transparent;
    &:hover, &:focus {
      outline: none;
    }
  }
`;

export default GlobalReset;
