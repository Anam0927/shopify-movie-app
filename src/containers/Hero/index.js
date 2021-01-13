import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import shopify from '../../assets/shopify-brands.svg';

const HeroContainer = styled.div`
  height: 100%;
  position: relative;
  text-align: center;

  display: grid;
  place-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: url(${shopify});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 80%;

    opacity: 0.1;

    pointer-events: none;
  }
`;

const HeroHeading = styled.h1`
  font-family: ${(props) => props.theme.headerFont};
  line-height: 1.1;
  font-size: 3.75em;

  span:first-child {
    color: ${(props) => props.theme.green};
    font-weight: 400;
    font-style: italic;
  }

  span:last-child {
    color: ${(props) => props.theme.orange};
  }
`;

const HeroPara = styled.p`
  font-size: 1.75em;
  text-shadow: 0 3px 6px ${(props) => `${props.theme.orange}80`};
  margin-top: 2em;

  span {
    font-weight: 700;
  }

  span:first-child {
    color: ${(props) => props.theme.orange};
  }

  span:last-child {
    color: ${(props) => props.theme.green};
  }
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

const Hero = () => {
  return (
    <HeroContainer>
      {/* <BgImage src={shopify} alt='shopify-logo' /> */}
      <HeroHeading>
        <span>shopify</span> <br />
        <span>Awards</span>
      </HeroHeading>
      <HeroPara>
        Nominate movies that <span>YOU</span> think deserve a <span>WIN</span>
      </HeroPara>
      <CtaButton>
        <Link to='/Search'>Search your fav movies</Link>
      </CtaButton>
    </HeroContainer>
  );
};

export default Hero;
