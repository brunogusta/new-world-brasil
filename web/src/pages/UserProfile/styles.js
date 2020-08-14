import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';
import background from '~/assets/images/background.jpg';

export const Container = styled.div``;

export const ContentGridWrapper = styled.div`
  height: 100%;
  display: grid;

  grid-template-areas:
    'header'
    'content';

  grid-template-columns: 100%;
  grid-template-rows: minmax(80px, 10vh) 1fr;
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
  min-height: 400px;

  display: grid;
  grid-template-areas:
    'content-header'
    'content-user-info'
    'content-live-info'
    'content-company-info';

  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr;
  grid-row-gap: 30px;

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

  opacity: ${({ isSupporter }) => (isSupporter ? 1 : 0.2)};
`;

export const ContentUserInfo = styled.div`
  grid-area: content-user-info;
  padding: 20px 10px;

  .supporter-text {
    margin-top: 50px;
    display: ${({ show }) => (show ? 'block' : 'none')};
    font-family: 'av-bold';
    font-size: 1.3rem;
    color: #ffd700;

    span {
      margin-left: 10px;

      a {
        color: #fff;
      }
    }
  }
`;

export const ContentUserInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 10px;
    width: 240px;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'av-bold';
    font-size: 2.4rem;
    color: #fff;
  }
`;

export const ContentuserInfoBox = styled.div``;

export const SelectInputsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;

  font-family: 'av-light';
  font-weight: 700;

  width: 100%;

  select {
    border: 0;
    font-weight: bold;
    border-radius: 2px;
    font-size: 1.1rem;
    color: #000;

    background-color: #fff;
    font-family: 'av-light';

    &:focus,
    &:active {
      outline: 0;
    }
  }

  label {
    font-size: 1.3rem;
    color: #fff;
  }

  ${media.lessThan('1024px')`
    flex-direction: column;
  `}
`;

export const SelectInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;

  input {
    font-family: inherit;
    width: 100%;
    outline: 0;
    border: 0;
    border-bottom: 2px solid #fff;
    color: #fff;
    padding-top: 20px;
    background: transparent;
    font-size: 1.3rem;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;

      ${media.lessThan('1024px')`
        font-size: 1rem;
        top: 30px;
      `}
    }
  }

  label {
    color: #fff;
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }

  input:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
    }
  }

  p {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.textSecundary};
  }

  ${media.lessThan('1024px')`
    width: 60%;
  `}
`;

export const ContentLiveInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 10px;
    width: 686px;
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

export const PreviewImageThumbWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    border-radius: 5px;
    height: 150px;
    width: 300px;
  }

  input[type='file'] {
    display: none;
  }

  p {
    display: block;
    position: relative;
    color: #fff;
  }

  label[for='select-image'] {
    position: relative;
    display: block;
    border-radius: 5px;
    cursor: pointer;

    text-align: center;
    padding: 0.3rem;
    width: 290px;
    font-size: 1.3rem;
    font-family: 'av-bold';
    text-transform: uppercase;

    color: ${({ disabled }) => (disabled ? '#ccc2' : '#000')};

    background-color: ${({ disabled }) => (disabled ? '#ccc2' : '#FFD700')};

    &:hover {
      ${({ disabled }) => (disabled ? null : 'background-color: #9B8300 ')};
    }

    box-shadow: ${({ disabled }) =>
      disabled
        ? '#ccc2'
        : '12px 12px 24px rgba(0, 0, 0, 0.4), -12px -12px 24px rgba(0, 0, 0, 0.4)'};
  }

  .img-label-wrapper {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 150px;
  }
`;

export const SwitchLiveOnWrapper = styled.div`
  height: 100%;
  margin-top: 50px;
  transition: all 1s ease-in-out;
  border: ${({ switchState }) =>
    switchState ? 'solid 2px #ffd700' : 'solid 2px #ccc'};
  border-radius: 10px;

  padding: 10px;
  opacity: ${({ disabled, liveData }) => (disabled || !liveData ? '0.2' : '1')};

  h1 {
    font-family: 'av-bold';
    text-transform: uppercase;
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 20px;

    span {
      text-transform: none;
      color: ${({ theme }) => theme.textSecundary};
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  text-decoration: none;

  width: 30%;
  padding: 10px;
  border: none;
  cursor: pointer;

  text-transform: uppercase;
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
export const LiveWarning = styled.p`
  font-family: 'av-bold';
  text-align: start;
  font-size: 1rem;
  color: red;
  width: 100%;
  margin-top: 1rem;
`;

export const ContentCompanyInfo = styled.div`
  grid-area: content-company-info;
  padding: 0 10px;
`;

export const ContentCompanyInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 10px;
    width: 520px;
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
  margin-top: 20px;
`;

export const CompanyImageWrapper = styled.div`
  text-align: center;
  min-width: 250px;

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
  margin-top: 68px;
  height: 200px;
  width: 100%;
  justify-content: space-around;
`;

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;

  width: 300px;
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
    background-color: #9b8300;
  }
`;

export const NoHaveCompanyWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;

  h1 {
    font-family: 'av-bold';
    font-size: 2.5rem;
    color: #fff;
  }
`;

export const RegisterCompanyBtn = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;

  width: 40%;
  padding: 10px;
  border: none;
  cursor: pointer;

  margin-top: 20px;

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
    background-color: #9b8300;
  }
`;
