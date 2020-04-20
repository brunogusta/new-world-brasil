import styled from 'styled-components';

export const Container = styled.div`
  grid-template-columns: 1fr;
  grid-template-rows: minmax(80vh, 1fr) minmax(80vh, 1fr) minmax(30vh, 1fr);
  grid-template-areas:
    'presentation'
    'content'
    'footer';

  min-height: 80vh;
  background-color: ${({ theme }) => theme.background};
`;

export const Presentation = styled.div`
  min-height: 30vh;

  img {
    height: auto;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  min-height: 50vh;
  background-position: center;
  background-color: ${({ theme }) => theme.background};
  background-repeat: repeat repeat;
  background-size: cover;
`;
