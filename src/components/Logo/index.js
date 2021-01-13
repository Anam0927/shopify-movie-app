import React from 'react';
import styled from 'styled-components';

import shopify from '../../assets/shopify-brands.svg';

const LogoContainer = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  width: 2.5em;
  margin-right: 10px;
`;

const LogoText = styled.h3`
  font-family: ${(props) => props.theme.headerFont};
  line-height: 1.1;

  margin-top: 5px;

  span:first-child {
    color: ${(props) => props.theme.green};
    font-weight: 400;
    font-style: italic;
  }

  span:last-child {
    color: ${(props) => props.theme.orange};
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={shopify} alt='shopify-logo' />
      <LogoText>
        <span>shopify</span> <br />
        <span>Awards</span>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
