import styled from 'styled-components';
import media from 'styled-media-query';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
  height: 100%;
  background-image: url(${background});
  background-color: ${({ theme }) => theme.background};

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  font-weight: 900;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px green;

  height: 500px;

  h1 {
    font-family: 'av-bold';
    font-size: 12rem;
    color: #fff;
    text-shadow: rgb(0, 0, 0, 0.3) 3px 5px 2px;
  }

  ${media.lessThan('small')` /* menor que 450px */
    h1 {
      font-size: 5rem;
    }
  `}

  ${media.between('small', 'medium')` /* entre 450px e 768px */
    h1 {
      font-size: 7em;
    }
  `}
`;

export const ContentGridWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-areas: 'sidebar' 'content';
  grid-template-columns: minmax(200px, 1fr) minmax(300px, 2fr);
  grid-template-rows: minmax(500px, 1fr);

  ${media.lessThan('968px')` /* menor que 768px */
    width: 100%;
    grid-template-areas:
    'sidebar'
    'content';
    grid-template-columns: 1fr;
    grid-template-rows: minmax(500px, 1fr) minmax(500px, 1fr);
  `}
`;

export const SideBar = styled.div`
  grid-area: 'sidebar';
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  border: solid 2px red;

  img {
    height: auto;
    max-width: 200px;
  }

  .title {
    margin-bottom: 1rem;
    font-family: 'av-bold';
    font-size: 3.5rem;
    color: ${({ theme }) => theme.textSecundary};
  }
`;

export const Content = styled.div`
  grid-area: 'content';

  border: solid 2px blue;
`;

export const ErrorContainer = styled.div`
  padding: 3rem;
  h1 {
    font-family: 'av-bold';
    color: #fff;
    text-align: center;
    font-size: 3rem;
  }
`;
