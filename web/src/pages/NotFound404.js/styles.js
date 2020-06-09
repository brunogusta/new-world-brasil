import styled from 'styled-components';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});

  p {
    display: block;
    text-transform: uppercase;
    font-family: 'av-bold';
    color: #fff;
    font-size: 3rem;
  }

  h1 {
    display: block;
    text-transform: uppercase;
    font-family: 'av-bold';
    color: #fff;
    font-size: 5rem;
  }
`;
