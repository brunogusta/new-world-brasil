import React from 'react';

import { Container, CentralizerContainer, LogoWrapper, Logo } from './styles';

const Header = () => {
  return (
    <Container>
      <CentralizerContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </CentralizerContainer>
    </Container>
  );
};

export default Header;
