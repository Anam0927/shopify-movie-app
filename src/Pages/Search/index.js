import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import Header from '../../containers/Header';

const Container = styled.div`
  height: 100vh;
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.darkGreen};
`;

const SearchPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default SearchPage;
