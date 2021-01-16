import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import Header from '../../containers/Header';
import NomsDiv from '../../components/NomsDiv';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.darkGreen};
`;

const NomineesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <NomsDiv />
      </Container>
    </ThemeProvider>
  );
};

export default NomineesPage;
