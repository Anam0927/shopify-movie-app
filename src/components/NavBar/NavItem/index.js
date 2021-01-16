import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled.li`
  font-family: ${(props) => props.theme.headerFont};
  font-size: 1rem;
  font-weight: 500;
  list-style-type: none;

  margin: 0 2.5vw 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  color: ${(props) => props.theme.orange};
  transition: color 0.2s linear;
  &:hover {
    color: ${(props) => props.theme.green};
  }

  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
  position: relative;
  &:after {
    content: '';
    width: 110%;
    height: 3px;
    background-color: ${(props) => props.theme.crimson};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    display: ${(props) => props.show || 'initial'};
  }
`;

const NavItemComponent = (props) => {
  const location = useLocation();
  const sectionPath = `/${props.section === 'Home' ? '' : props.section}`;

  return (
    <NavItem show={sectionPath === location.pathname ? null : 'none'}>
      <Link to={sectionPath}>{props.section}</Link>
    </NavItem>
  );
};

export default NavItemComponent;
