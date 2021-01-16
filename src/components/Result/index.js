import React from 'react';
import styled from 'styled-components';

import imgAlt from '../../assets/movie-placeholder.jpg';

const MovieDiv = styled.div`
  font-size: 0.6em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const PosterDiv = styled.div`
  justify-self: flex-start;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    left: 0;

    z-index: 5;

    width: 100%;
    height: 100%;

    background-image: radial-gradient(
      transparent,
      ${(props) => props.theme.crimson + 'BF'}
    );

    transition: 0.5s;
    transform: scale(2.5);
  }

  ${MovieDiv}:hover &:before {
    transform: scale(1.75);
  }

  img {
    max-width: 100%;
    transition: filter 0.5s;
    ${MovieDiv}:hover & {
      filter: grayscale(80%);
    }
  }
`;

const InfoDiv = styled.div`
  padding: 2em 1.5em;
  padding-bottom: 0.5em;
  color: ${(props) => props.theme.darkGreen};
  width: 100%;

  h1 {
    margin-bottom: 5px;
    font-size: 1.75em;
    text-decoration: underline transparent;

    ${MovieDiv}:hover & {
      text-decoration-color: ${(props) => props.theme.crimson};
    }
  }
  h3 {
    font-style: italic;
  }
`;

const NomineeButtons = styled.button`
  color: white;
  font-size: 1.5em;
  padding: 0.5em 1.5em;
  margin-top: 2em;
  width: 100%;
  transition: 0.3s;
`;

const NominateButton = styled(NomineeButtons)`
  background-color: ${(props) => props.theme.green};

  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }
`;
const DeNominateButton = styled(NomineeButtons)`
  background-color: ${(props) => props.theme.crimson};

  &:hover {
    background-color: ${(props) => props.theme.orange};
  }
`;

const Movie = (props) => {
  const imgSrc = props.image === 'N/A' ? imgAlt : props.image;

  return (
    <MovieDiv>
      <PosterDiv>
        <img src={imgSrc} alt={`${props.image} poster`} />
      </PosterDiv>
      <InfoDiv>
        <h1>{props.title}</h1>
        <h3>{props.year}</h3>
        {props.nomineesArray.includes(props.id) ? (
          <DeNominateButton
            onClick={() => {
              props.removeNominee(props.id);
            }}
          >
            Remove
          </DeNominateButton>
        ) : (
          <NominateButton
            onClick={() => {
              props.addNominee(props.id);
            }}
          >
            Nominate
          </NominateButton>
        )}
      </InfoDiv>
    </MovieDiv>
  );
};

export default Movie;
