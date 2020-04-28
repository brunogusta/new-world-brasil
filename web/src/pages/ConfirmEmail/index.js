import React from 'react';

import { Container, TextContainer } from './styles';

const ConfirmEmail = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Obrigado por se juntar à comunidade!</h1>
        <h1>
          <span> Por favor, confirme seu email para concluir o cadastro.</span>
        </h1>
      </TextContainer>
    </Container>
  );
};

export default ConfirmEmail;
