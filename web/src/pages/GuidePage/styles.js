import styled from 'styled-components';
import background from '~/assets/images/background.jpg';

export const Container = styled.div``;

export const ContentGridWrapper = styled.div`
  height: 100%;
  display: grid;

  grid-template-areas:
    'header'
    'content';

  grid-template-columns: 100%;
  grid-template-rows: 10vh 1fr;
`;

export const Header = styled.div`
  grid-area: header;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});

  border-bottom: ridge 0.3rem #393434;
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  padding: 20px;
  font-family: 'av-light';
  font-size: 1.1rem;
  color: #fff;

  text-align: justify;
`;

export const TextWrapper = styled.div`
  margin-top: 30vh;
`;
