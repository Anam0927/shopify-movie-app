import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

const H1 = styled.h1`
  text-align: center;
  font-family: ${(props) => props.theme.headerFont}, sans-serif;
  color: ${(props) => props.theme.darkGreen};
  font-size: 3rem;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <H1>Hello!</H1>
    </ThemeProvider>
  );
};

export default App;
