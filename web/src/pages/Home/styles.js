import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'react-router-dom';
import banner from '~/assets/images/banner_home.jpg';
import background from '~/assets/images/background.jpg';
import baseAnimation from '~/utils/animation/base-animation';

export const Container = styled.div`
  background-image: url(${banner});
  background-position: initial;
  background-repeat: no-repeat;
  background-size: contain;


  border: solid 1px transparent;


  ${media.lessThan('750px')`
    background-image: url(${background});
  `}

  ${media.between('750px', '1366px')`
    background-image: url(${background});
  `}


  background-color: ${({ theme }) => theme.background};
`;

export const ContentGridWrapper = styled(baseAnimation)`
  max-width: 1920px;


  ${media.between('1050px', '1440px')`
    width: 90%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  `}

  ${media.between('1441px', '1920px')`
    width: 70%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  `}



  ${media.lessThan('750px')`
    margin-top: 5em;
  `}

  ${media.between('751px', '1366px')`
    margin-top: 5em;
  `}

  ${media.between('1367px', '1440px')`
    margin-top: 29em;
  `}

  ${media.between('1441px', '1920px')`
    margin-top: 39em;
  `}


  display: grid;
  grid-template-areas:
    'site-informations site-informations'
    'lives-content side-content'
    'feed-bar side-content'
    'feed-content side-content'
    'footer side-content';

  grid-template-columns: minmax(750px, 4fr) minmax(330px, 1fr);
  grid-template-rows: 50px minmax(100px, 200px)  50px 1fr 50px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  ${media.lessThan('1024px')`
    grid-template-areas:
      'site-informations'
      'lives-content'
      'feed-bar'
      'feed-content'
      'footer';

    grid-template-columns: minmax(100px, auto);
    grid-template-rows: 50px  minmax(100px, 200px)  50px 2fr 50px;
    grid-row-gap: 20px;
  `}
`;

export const SiteInformationsWrapper = styled.div`
  grid-area: site-informations;


.wrapper {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;

  padding: 10px;
  justify-content: space-between;
  align-items: center;


  .logo {
    display:flex;
    align-items: center;

    img {
      margin-right: 10px;
      height: auto;
      max-width: 20px;
    }
  }

  ${media.lessThan('750px')`
    .logo {
      display: none;
    };

    justify-content: center;
  `}

  span {
    i {
      margin-right: 5px;
    }

    font-family: 'av-bold';
    font-size: 1.2rem;
    color: #fff;

    ${media.lessThan('320px')`
      font-size: 0.83rem;
    `}

    ${media.between('360px', '410px')`
      font-size: 0.96rem;
    `}

    ${media.between('411px', '750px')`
      font-size: 1.13rem;
    `}
  }
}
`;

export const LivesContentWrapper = styled.div`
  grid-area: lives-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel .slider-wrapper .slide {
    background-color: transparent;
  }

  .carousel {
    overflow: visible;
  }

  .carousel-root {
    max-width: 100%;
    padding: 0 20px;
  }

  .slider-wrapper {
  }

  ${media.greaterThan('1050px')`
    min-width: 750px;
  `}

  ${media.lessThan('1024px')`
    h1 {
     font-size: 1.6rem;
    }

    .carousel-root {
      padding: 0 30px;
    }
  `}
`;

export const LivesHeaderText = styled.div`
  margin-bottom: 10px;
  h1 {
    font-family: 'av-bold';
    color: #fff;
    text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const FeedContentWrapper = styled.div`
  grid-area: feed-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedBar = styled.div`
  grid-area: feed-bar;

  div {
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.4);

    h1 {
      font-size: 1.2rem;
      font-family: 'av-bold';
      color: #fff;
    }
  }
`;

export const PostWrapper = styled.div`
  position: relative;
  min-height: 500px;
  max-width: 100%;
  border-radius: 30px;
  overflow: hidden;
  background-color: #6a6e70;

  margin-bottom: 30px;
`;

export const PostHeader = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const TitlePostWrapper = styled.div`
  position: absolute;
  width: 100%;
  color: #fff;
  font-family: 'av-bold';
  text-transform: uppercase;
  text-align: center;
  padding: 10px 5px;

  background-color: rgba(0, 0, 0, 0.6);

  top: 0;

  ${media.lessThan('750px')`
    font-size: 0.8rem;
  `}
`;

export const PostContentWrapper = styled.div`
  padding: 10px;

  .end-bar {
    display: flex;
    justify-content: center;

    margin: 20px auto;
    height: 10px;
    max-width: 90%;
  }
`;

export const PostDate = styled.div`
  h1 {
    font-size: 0.9rem;
    font-family: 'av-light';
    color: #fff;
  }
`;

export const Content = styled.div`
  margin-top: 10px;

  p {
    line-height: 30px;
    font-family: 'av-light';
    text-align: justify;
    color: #fff;
    font-size: 1.3rem;
  }
`;

export const CardLiveWrapper = styled.div`
  position: relative;
  margin: 0 10px;
  height: 140px;

  img {
    border-radius: 10px;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const SideContentWrapper = styled.div`
  grid-area: side-content;

  .bar-division {
    img {
      margin: 30px 0px 20px 0px;
      height: 10px;
      max-width: 100%;
    }
  }

  ${media.lessThan('1024px')`
    display: none;
  `}
`;

export const PremiumCompanies = styled.div`
  span {
    h1 {
      font-family: 'av-bold';
      text-align: center;
      color: #fff;
      text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.3);

      i {
        font-size: 2rem;
        color: #ffc700;
      }
    }
  }

  .companies-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-height: 750px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0px 10px 10px 10px;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      width: 10px;
      background-color: #243035;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #6a6e70;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
  }
`;

export const NoCompanyText = styled.div`
  padding-top: 20px;
  h1 {
    text-align: center;
    font-family: 'av-light';
    font-size: 1.5rem;
    color: #fff;
  }
`;

export const SocialNetwordWrapper = styled.div`
  .discord-button-label {
    font-family: 'av-light';
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const SocialButtonsWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;

  img {
    height: auto;
    max-width: 54px;
  }
`;

export const DiscordButton = styled.div`
  position: relative;
  width: 100%;

  .btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    p {
      margin-left: 10px;
      font-family: 'av-light';
      font-size: 1.8rem;
    }

    h1 {
      margin-left: 10px;
      line-height: 40px;
      font-family: 'av-bold';
      letter-spacing: 2px;
      font-size: 3rem;
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

export const CardWrapper = styled(Link)`
  position: relative;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  margin: 10px 0;

  border-radius: 10px;

  width: 100%;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.04);
  }

  .background-company {
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    max-height: 100%;
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
  z-index: 2;

  i {
    font-size: 1.2rem;
    position: absolute;
    color: #ffc700;
    right: 0;
  }

  p {
    font-size: 0.8rem;
    font-family: 'av-light';
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const CompanyName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  img {
    height: 10px;
    max-width: 90%;
  }

  h1 {
    text-transform: capitalize;
    font-family: 'av-light';
    font-weight: 900;
    color: #fff;
  }
`;

export const CardFooter = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  p {
    font-size: 1rem;
    font-family: 'av-light';
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
  }

  .info-name {
    font-size: 0.6rem;
    font-family: 'av-light';
    font-weight: 900;
    color: #fff;
  }
`;

export const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  margin-bottom: 10px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
