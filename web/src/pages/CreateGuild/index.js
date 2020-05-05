import React from 'react';
import { useSelector } from 'react-redux';
import CreateGuildForm from '~/components/CreateGuildForm';

import { Container } from './styles';

const CreateGuild = () => {
  const { userGuildStatus } = useSelector((state) => state);

  return (
    <Container>
      {userGuildStatus.success ? (
        <>
          <h1>guilda criada com sucesso!</h1>
          <a
            href={`http://localhost:3000/guilds/find-one/?id=${userGuildStatus._id}`}
          >
            Ir para a página
          </a>
        </>
      ) : (
        <CreateGuildForm header="Registrar Guilda" />
      )}
    </Container>
  );
};

export default CreateGuild;
