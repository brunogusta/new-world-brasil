import styled from 'styled-components';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
  height: 100%;
  text-shadow: 4px 3px 0 rgba(0, 0, 0, 0.1);
  background-image: url(${background});

  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  font-family: 'av-bold';
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;

  color: ${({ theme }) => theme.textSecundary};
`;
