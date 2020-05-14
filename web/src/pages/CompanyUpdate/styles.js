import styled from 'styled-components';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});
`;
