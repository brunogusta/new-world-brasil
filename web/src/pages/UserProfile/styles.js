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

  display: grid;
  grid-template-areas:
    'content-header'
    'content-live-info'
    'content-company-info';

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr minmax(200px, 2fr);
  grid-row-gap: 10px;

  padding: 0 100px;
`;

export const ContentHeader = styled.div`
  grid-area: content-header;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentHeaderPlayerName = styled.div`
  h1 {
    font-size: 2.3rem;
    font-family: 'av-bold';
    color: #fff;

    span {
      color: #979393;
      font-size: 4rem;
    }
  }
`;

export const ContentHeaderPlayerStatus = styled.div`
  h1 {
    font-size: 2.3rem;
    font-family: 'av-bold';
    color: #fff;
  }

  .stats-info {
    font-size: 1.8rem;
    font-family: 'av-bold';
    color: #fff;

    span {
      color: ${({ isSupporter }) => (isSupporter ? 'green' : 'red')};
    }
  }
`;

export const ContentliveInfo = styled.div`
  grid-area: content-live-info;
  padding: 0 10px;
`;

export const ContentLiveInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 10px;
    width: 80%;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'av-bold';
    font-size: 2.4rem;
    color: #fff;
  }
`;

export const ContentLiveInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  text-decoration: none;

  width: 25%;
  margin-top: 39px;
  padding: 10px;
  border: none;
  cursor: pointer;

  margin-left: 30px;
  text-transform: uppercase;
  font-family: 'av-bold';
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  transition: all 0.5s ease;
  color: ${({ disabled }) => (disabled ? '#ccc2' : '#000')};

  background: ${({ disabled }) => (disabled ? '#ccc2' : '#FFD700')};

  &:hover {
    ${({ disabled }) => (disabled ? null : 'background-color: #9B8300 ')};
  }
`;

export const TextError = styled.p`
  position: absolute;
  line-height: 1rem;
  text-align: start;
  font-size: 0.9rem;
  color: red;
  width: 100%;
  margin-top: 0.3rem;
  color: red !important;

  margin-left: 0.2rem;
`;

export const ContentCompanyInfo = styled.div`
  grid-area: content-company-info;
  padding: 0 10px;
`;

export const ContentCompanyInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 10px;
    width: 80%;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'av-bold';
    font-size: 2.4rem;
    color: #fff;
  }
`;

export const ContentCompanyInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CompanyImageWrapper = styled.div`
  text-align: center;

  h1 {
    font-family: 'av-bold';
    font-size: 3.5rem;
    color: #fff;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 10px;
  }
`;

export const CompanyBtnLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;

  width: 40%;
  padding: 10px;
  border: none;
  cursor: pointer;

  font-family: 'av-bold';
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  transition: all 0.5s ease;
  color: ${({ disabled }) => (disabled ? '#ccc2' : '#000')};

  background: ${({ disabled }) => (disabled ? '#ccc2' : '#FFD700')};
  box-shadow: ${({ disabled }) =>
    disabled
      ? '#ccc2'
      : '12px 12px 24px rgba(0, 0, 0, 0.4), -12px -12px 24px rgba(0, 0, 0, 0.4)'};

  &:hover {
    ${({ disabled }) => (disabled ? null : 'transform: scale(0.9)')};
  }
`;

export const NoHaveCompanyWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'av-bold';
    font-size: 2.5rem;
    color: #fff;
  }
`;
