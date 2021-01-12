import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  font-family: sans-serif;
  color: blue;
  font-size: 3rem;
`;

const App = () => {
  return (
    <div>
      <H1>Hello!</H1>
    </div>
  );
};

export default App;
