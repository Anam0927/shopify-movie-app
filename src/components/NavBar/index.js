import React from 'react';

import styled from 'styled-components';

import NavItemComponent from './NavItem';

const NavContainer = styled.ul`
  display: flex;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavItemComponent section='Home' />
      <NavItemComponent section='Search' />
      <NavItemComponent section='Nominees' />
    </NavContainer>
  );
};

export default NavBar;
