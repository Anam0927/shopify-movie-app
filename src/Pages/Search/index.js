import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import Header from '../../containers/Header';
import SearchBar from '../../components/SearchBar';
import ResultDiv from '../../components/ResultDiv';
import PopUp from '../../components/PopUp';

import { useNomineesContext } from '../../helper/context/context';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.darkGreen};
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { nomineesArray } = useNomineesContext();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        {nomineesArray.length === 5 ? (
          <>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              maxReached
            />
            <PopUp />
          </>
        ) : (
          <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ResultDiv searchTerm={searchTerm} />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default SearchPage;
