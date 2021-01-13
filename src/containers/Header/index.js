import React from 'react';
import styled from 'styled-components';

import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';

const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 1em 2em 0;

  /* background-color: #ddd; */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
