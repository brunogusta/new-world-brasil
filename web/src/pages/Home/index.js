import React from 'react';

import { Container, Presentation, Content } from './styles';
import banner from '~/assets/images/banner_home.png';

const Home = () => (
  <Container>
    <Presentation className="presentation">
      <img src={banner} alt="banner" />
    </Presentation>
    <Content>
      <h1>test</h1>
    </Content>
  </Container>
);

export default Home;
