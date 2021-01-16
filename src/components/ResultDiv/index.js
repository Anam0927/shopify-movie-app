import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { getMovies } from '../../helper/fetchFunction';
import { useNomineesContext } from '../../helper/context/context';

import Movie from '../Result';
import Loader from '../Loader';

const ResultsContainer = styled.div`
  margin-top: 3em;
  padding: 0 2em 3em;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  align-items: flex-start;
`;

const ErrorOrLoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: ${(props) => props.theme.crimson};
`;

const ResultDiv = (props) => {
  const [movies, setMovies] = useState([]);
  const { nomineesArray, addNominee, removeNominee } = useNomineesContext();
  let pages = useRef(0);

  useEffect(() => {
    if (props.searchTerm !== '') {
      getMovies(props.searchTerm)
        .then((data) => {
          setMovies(data.Search);
          pages.current = Math.ceil(data.totalResults / 10);
        })
        .then(() => {
          for (let i = 1; i < pages.current; i++) {
            getMovies(props.searchTerm, i + 1).then((results) =>
              setMovies((m) => [...m, ...results.Search])
            );
          }
        })
        .catch((err) => {
          setMovies(`${err}`);
        });
    }
  }, [props.searchTerm]);

  function renderMovies() {
    if (props.searchTerm === '' || props.searchTerm === undefined) {
      return null;
    }

    if (Array.isArray(movies)) {
      if (movies.length === 0) {
        return (
          <ErrorOrLoaderContainer>
            <Loader />
          </ErrorOrLoaderContainer>
        );
      }

      return (
        <ResultsContainer>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                image={movie.Poster}
                nomineesArray={nomineesArray}
                addNominee={addNominee}
                removeNominee={removeNominee}
              />
            );
          })}
        </ResultsContainer>
      );
    } else if (movies === 'Error: Error: Too many results.') {
      return (
        <ErrorOrLoaderContainer>
          <Loader />
        </ErrorOrLoaderContainer>
      );
    } else if (movies === 'Error: Error: Movie not found!') {
      return (
        <ErrorOrLoaderContainer>
          <h3>Cannot find the movie...</h3>
        </ErrorOrLoaderContainer>
      );
    } else {
      return (
        <ErrorOrLoaderContainer>
          <h3>{movies}</h3>
          {console.log(movies)}
        </ErrorOrLoaderContainer>
      );
    }
  }
  return renderMovies();
};

export default ResultDiv;
