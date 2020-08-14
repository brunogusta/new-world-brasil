import styled from 'styled-components';
import media from 'styled-media-query';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
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

  height: 500px;

  h1 {
    font-family: 'av-bold';
    font-size: 7rem;
    color: #fff;
    text-shadow: rgb(0, 0, 0, 0.3) 3px 5px 2px;
  }

  ${media.lessThan('small')` /* menor que 450px */
    h1 {
      font-size: 4rem;
    }
  `}

  ${media.between('small', 'medium')` /* entre 450px e 768px */
    h1 {
      font-size: 4rem;
    }
  `}
`;

export const ContentGridWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-areas: 'sidebar' 'content';
  grid-template-columns: minmax(200px, 1fr) minmax(550px, 2fr);
  grid-template-rows: minmax(500px, 1fr);

  ${media.lessThan('1020px')` /* menor que 768px */
    width: 100%;
    grid-template-areas:
    'sidebar'
    'content';
    grid-template-columns: 1fr;
    grid-template-rows: minmax(200px, 650px) 1fr;
  `}

  margin-bottom: 50px;
`;

export const SideBar = styled.div`
  grid-area: 'sidebar';
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;

  .logoImg {
    height: auto;
    max-width: 200px;
    border-radius: 5%;
  }

  .barImg {
    max-height: 10px;
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
  }

  .companyTitle {
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'av-bold';
    font-size: 4rem;
    color: #fff;
  }
`;

export const SidebarListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  max-width: 350px;
  width: 100%;

  .spamWrapper {
    width: 100%;
  }

  .imageSpam {
    margin-top: 1rem;
  }

  div {
    .governorName {
      font-family: 'av-light';
      font-size: 3rem;
      color: ${({ theme }) => theme.textSecundary};
      text-transform: uppercase;
    }

    .consulName {
      font-family: 'av-light';
      font-size: 3rem;
      color: #fff;
    }

    .textSpam {
      width: 100%;
      margin-left: 0.8rem;

      h1 {
        line-height: 41px;
        vertical-align: baseline;
      }

      p {
        line-height: 9px;
        vertical-align: baseline;
        color: #fff;
        font-family: 'av-light';
        font-size: 0.6rem;
      }
    }

    img {
      height: 50px;
      max-width: 50px;
    }
  }
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  grid-area: 'content';
  display: flex;
  flex-direction: column;
  padding: 1rem;

  img {
    max-height: 10px;
    width: 90%;
    margin: 0 auto;
  }

  img:nth-child(1) {
    margin-top: 1rem;
  }

  ${media.lessThan('1020px')` /* menor que 768px */
    img {
      width: 96%;
      margin: 1.3rem auto;
    }
  `}
`;

export const InfoGridWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'faction' 'members'
    'focus' 'recruting';

  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 60px);
  font-size: 1.1rem;

  ${media.lessThan('1020px')` /* menor que 768px */
    width: 100%;
    grid-template-areas:
    'faction'
    'members'
    'focus'
    'recruting';

    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 60px);
    font-size: 1.4rem;
  `}

  ${media.greaterThan('1255px')` /* menor que 768px */
    font-size: 1.4rem;
  `}
`;

export const InfoFaction = styled.div`
  grid-area: 'faction';
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-transform: uppercase;
  font-family: 'av-light';

  i {
    margin-right: 0.3rem;
  }
`;

export const InfoMembers = styled.div`
  grid-area: 'members';
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-transform: uppercase;
  font-family: 'av-light';

  i {
    margin-right: 0.3rem;
  }
`;

export const InfoFocus = styled.div`
  grid-area: 'focus';
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-transform: uppercase;
  font-family: 'av-light';

  i {
    margin-right: 0.3rem;
  }
`;

export const InfoRecruting = styled.div`
  grid-area: 'recruting';
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  text-transform: uppercase;
  font-family: 'av-light';

  i {
    margin-right: 0.3rem;
  }
`;

export const DescriptionWrapper = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 90%;
  text-align: justify;

  font-family: 'av-light';
  color: #fff;

  font-size: 1rem;

  a {
    color: ${({ theme }) => theme.textSecundary};
  }
`;

export const StyledButton = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  margin-top: 3rem;

  .btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    p {
      margin-left: 10px;
      font-family: 'av-light';
      font-size: 2rem;
    }
  }

  i {
    font-size: 5rem;
  }

  a {
    padding: 10px 0px;
    text-decoration: none;
    display: block;
    text-align: center;
    position: relative;
    color: rgba(255, 255, 255, 1);
    background-color: #7289da;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 9px 0px #334dad, 0px 9px 25px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 9px 0px #334dad, 0px 9px 25px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 9px 0px #334dad 0px 9px 25px rgba(0, 0, 0, 0.7);

    -webkit-transition: all 0.1s ease;
    -moz-transition: all 0.1s ease;
    -ms-transition: all 0.1s ease;
    -o-transition: all 0.1s ease;
    transition: all 0.1s ease;
  }

  a:hover {
    background-color: #5069c5;
    -webkit-box-shadow: 0px 3px 0px #334dad, 0px 3px 6px rgba(0, 0, 0, 0.9);
    -moz-box-shadow: 0px 3px 0px #334dad, 0px 3px 6px rgba(0, 0, 0, 0.9);
    box-shadow: 0px 3px 0px #334dad, 0px 3px 6px rgba(0, 0, 0, 0.9);
    position: relative;
    top: 6px;
  }
`;

export const NoDiscordBtn = styled.button`
  width: 60%;
  margin: 0 auto;
  margin-top: 3rem;

  padding: 10px 0px;
  text-decoration: none;
  display: block;
  text-align: center;
  position: relative;
  color: rgba(255, 255, 255, 1);
  background-color: #877878;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 9px 0px #4a4242, 0px 9px 25px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 9px 0px #4a4242, 0px 9px 25px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 9px 0px #4a4242 0px 9px 25px rgba(0, 0, 0, 0.7);

  border: none;
  opacity: 0.3;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -ms-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
  transition: all 0.1s ease;

  .btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    p {
      margin-left: 10px;
      font-family: 'av-light';
      font-size: 2rem;
    }

    ${media.lessThan('small')` /* menor que 450px */
      p {
        font-size: 1.1rem;
      }
    `}
  }

  i {
    font-size: 5rem;
  }
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

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
