import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getNominee } from '../../helper/fetchFunction';
import { useNomineesContext } from '../../helper/context/context';

import Movie from '../Result';

const NomsContainer = styled.div`
  margin-top: 3em;
  padding: 0 2em 3em;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  align-items: flex-start;
`;

const ResultDiv = () => {
  const [movies, setMovies] = useState([]);
  const { nomineesArray, addNominee, removeNominee } = useNomineesContext();

  useEffect(() => {
    if (nomineesArray.length > 0) {
      nomineesArray.forEach((nominee) => {
        getNominee(nominee)
          .then((data) => {
            console.log(data);
            setMovies((nom) => [...nom, data]);
          })
          .catch((err) => {
            setMovies(`${err}`);
          });
      });
    }
  }, [nomineesArray]);

  function renderMovies() {
    if (Array.isArray(movies)) {
      if (movies.length === 0) {
        return (
          <NomsContainer>
            <h1>Loading</h1>
          </NomsContainer>
        );
      }

      return (
        <NomsContainer>
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
        </NomsContainer>
      );
    } else {
      return (
        <NomsContainer>
          <h1>{movies}</h1>
        </NomsContainer>
      );
    }
  }
  return renderMovies();
};

export default ResultDiv;
