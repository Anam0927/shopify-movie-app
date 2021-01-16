import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PopUpDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 2px solid ${(props) => props.theme.crimson};
  padding: 3em;
  background-color: white;
  text-align: center;

  box-shadow: 0 10px 15px -5px ${(props) => props.theme.crimson};
`;

const CtaButton = styled.button`
  width: 50%;
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

const PopUp = () => {
  return (
    <PopUpDiv>
      <h1>Maximum 5 Nominees allowed!</h1>
      <Link to='/Nominees'>
        <CtaButton>Check out your nominees</CtaButton>
      </Link>
    </PopUpDiv>
  );
};

export default PopUp;
