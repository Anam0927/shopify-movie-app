import React from 'react';
import styled, { keyframes } from 'styled-components';

const loaderAnim = keyframes`
  to {
    transform:rotate(360deg);
  }
`;

const LoaderDiv = styled.div`
  height: 3em;
  width: 3em;
  position: relative;
  border-radius: 50%;

  border-top: 3px solid ${(props) => props.theme.crimson};
  border-right: 3px solid transparent;
  animation: ${loaderAnim} 1s linear infinite;
`;

const Loader = () => {
  return <LoaderDiv />;
};

export default Loader;
