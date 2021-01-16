import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-top: 3em;
  padding: 0 2em;
`;

const MainText = styled.h2`
  font-size: 1.75em;
  font-weight: 400;
`;

const SecondaryText = styled.p`
  font-size: 1.25em;
  margin: 0.5em 0 2em;

  span {
    color: ${(props) => props.theme.crimson};
    font-weight: 700;
  }
`;

const InputContainer = styled.div`
  position: relative;
  font-size: 1em;
  display: inline-block;
  width: clamp(60%, 800px, 100%);
  &:before {
    content: '';
    height: 150%;
    width: 3.75em;

    border-radius: 50%;
    border: 3px solid transparent;
    border-left: 3px solid ${(props) => props.theme.crimson};
    border-top: 3px solid ${(props) => props.theme.crimson};

    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-25%, -50%) rotate(-45deg);
  }
  &:after {
    content: '';
    height: 150%;
    width: 3.75em;

    border-radius: 50%;
    border: 3px solid transparent;
    border-left: 3px solid ${(props) => props.theme.crimson};
    border-top: 3px solid ${(props) => props.theme.crimson};

    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(25%, -50%) rotate(135deg);
  }
`;

const InputBar = styled.input`
  font: inherit;
  line-height: 1;

  padding: 0.5em 2em;
  width: 100%;

  border: 1px solid ${(props) => props.theme.orange};
  border-radius: 2em;
  background-color: white;

  &:focus {
    border-color: ${(props) => props.theme.green};
    outline: none;
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

const SearchBar = (props) => {
  return (
    <>
      <SearchContainer>
        <MainText>Search for your favourite movies and nominate them</MainText>
        <SecondaryText>
          You can nominate upto <span>5</span> movies
        </SecondaryText>
        <InputContainer>
          <InputBar
            type='text'
            placeholder='Enter a movie name to search...'
            value={props.searchTerm}
            onChange={(e) => props.setSearchTerm(e.target.value)}
          />
        </InputContainer>
      </SearchContainer>
    </>
  );
};

export default SearchBar;
