import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const NoNomineeDiv = styled.div`
  text-align: center;
  margin-top: 5em;
`;

const CtaButton = styled.button`
  width: 20%;
  margin: 1.5em auto;

  border: 1px solid transparent;
  background-color: ${(props) => props.theme.orange};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.orange};
    background-color: transparent;
    color: ${(props) => props.theme.orange};
  }

  padding: 0.5em 0;
`;

const ResultDiv = () => {
  const [movies, setMovies] = useState([]);
  const { nomineesArray, addNominee, removeNominee } = useNomineesContext();

  useEffect(() => {
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
  }, [nomineesArray]);

  function renderMovies() {
    if (Array.isArray(movies)) {
      if (movies.length === 0) {
        return (
          <NoNomineeDiv>
            <h3>No movies nominated by you yet!</h3>
            <Link to='/Search'>
              <CtaButton>Search your fav movies</CtaButton>
            </Link>
          </NoNomineeDiv>
        );
      }
      console.log(movies);
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
