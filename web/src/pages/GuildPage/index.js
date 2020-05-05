import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import {
  Container,
  Header,
  ContentGridWrapper,
  SideBar,
  Content,
  ErrorContainer,
} from './styles';

// import governorImg from '~/assets/images/governor.png';
// import consulImg from '~/assets/images/consul.png';

const GuildPage = () => {
  // const [resp, setResp] = useState('');
  const [guildInfo, setGuildInfo] = useState('');

  let id = '';
  useEffect(async () => {
    const params = new URL(document.location).searchParams;
    id = params.get('id');

    // if (!id) {
    //   return setResp('Guilda não pôde ser encontrada');
    // }

    try {
      const { data } = await api.get(`guilds/find-one/?id=${id}`);
      const consulsArray = JSON.parse(data.consuls);

      data.consuls = consulsArray;
      setGuildInfo(data);

      return data;
    } catch (e) {
      console.log(e);
      return e;
      // if (e) {
      //   return setResp('Guilda não pôde ser encontrada');
      // }
    }
  }, []);

  return (
    <Container>
      <Header>
        <h1>GUILDA</h1>
      </Header>
      {guildInfo ? (
        <ContentGridWrapper>
          <SideBar>
            <h1 className="title">{guildInfo.title}</h1>
            <img src={guildInfo.imageUrl} alt="logo" />
          </SideBar>
          <Content />
        </ContentGridWrapper>
      ) : (
        <ErrorContainer>
          <h1>Ops, houve um erro inesperado, tente novamente.</h1>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default GuildPage;
