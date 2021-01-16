import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import Header from '../../containers/Header';
import SearchBar from '../../components/SearchBar';
import ResultDiv from '../../components/ResultDiv';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.darkGreen};
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ResultDiv searchTerm={searchTerm} />
      </Container>
    </ThemeProvider>
  );
};

export default SearchPage;
