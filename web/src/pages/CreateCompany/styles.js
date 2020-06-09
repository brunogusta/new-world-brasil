import styled from 'styled-components';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: initial;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${background});
`;

export const SuccessContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});
`;
