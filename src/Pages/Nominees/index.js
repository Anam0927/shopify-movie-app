import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import Header from '../../containers/Header';

const NomineesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default NomineesPage;
