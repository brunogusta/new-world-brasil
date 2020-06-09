import styled from 'styled-components';
import media from 'styled-media-query';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});
`;

export const SloganWrapper = styled.div`
  min-height: 50vh;
  width: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'av-light';
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 4px 3px 0 rgba(0, 0, 0, 0.3);

  .top-text {
    font-size: 2rem;
  }

  .middle-text {
    font-size: 6rem;
    font-family: 'av-bold';
  }

  .bottom-text {
    font-size: 2rem;
  }

  ${media.lessThan('750px')` /* menor que 450px */
  .top-text {
    font-family: 'av-bold';
    font-size: 1.5rem;
  }

  .middle-text {
    font-size: 3rem;
    font-family: 'av-bold';
  }

  .bottom-text {
    font-family: 'av-bold';
    font-size: 1.5rem;
  }
  `}

  ${media.lessThan('330px')` /* menor que 450px */
  .top-text {
    font-family: 'av-bold';
    font-size: 1.2rem;
  }

  .middle-text {
    font-size: 2.6rem;
    font-family: 'av-bold';
  }

  .bottom-text {
    font-family: 'av-bold';
    font-size: 1.2rem;
  }
  `}
`;

export const ListCompaniesWrapper = styled.div`
  width: 100%;
  padding: 20px;

  ${media.lessThan('400px')` /* menor que 450px */
    padding: 0;
  `}
`;

export const CompaniesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const CardWrapper = styled.a`
  position: relative;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  border-radius: 10px;

  height: 160px;
  width: 100%;
  transition: all 200ms ease-in-out;

  ${media.greaterThan('600px')` /* menor que 450px */
    &:hover {
      transform: scale(1.08);
    }
  `}

  .background-image {
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

  justify-content: center;
  z-index: 2;

  i {
    font-size: 1.2rem;
    position: absolute;
    color: #ffc700;
    right: 0;
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

  p {
    font-size: 1.6rem;
    font-family: 'av-light';
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
  }

  .company-field {
    font-size: 0.9rem;
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

  p {
    font-size: 1.3rem;
    font-family: 'av-light';
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
  }

  .info-name {
    font-size: 0.8rem;
    font-family: 'av-light';
    font-weight: 900;
    color: #fff;
  }
`;

export const Footer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
