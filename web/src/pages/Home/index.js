import React from 'react';

import { Container, Presentation, Content } from './styles';
import banner from '~/assets/images/banner_home.jpg';

const Home = () => (
  <Container>
    <Presentation className="presentation">
      <img src={banner} alt="banner" />
    </Presentation>
    <Content />
  </Container>
);

export default Home;
