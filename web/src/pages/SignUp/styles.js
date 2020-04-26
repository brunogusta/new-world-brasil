import styled, { keyframes } from 'styled-components';
import background from '~/assets/images/background.jpg';

import baseAnimation from '~/utils/animation/base-animation';

const FadeInAnimation = keyframes`
from {
    top: 60%;
    opacity: 0;
  }

  to {
    top: 50%;
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 100%;
  background-image: url(${background});
  background-color: ${({ theme }) => theme.background};

  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  font-family: 'av-bold';
`;

export const FormikWrapper = styled(baseAnimation)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);

  position: absolute;
  min-width: 350px;
  padding: 2rem 2rem;
  min-height: 300px;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  animation-name: ${FadeInAnimation};
`;

export const FormHeaderText = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #fff;
  width: 100%;

  span {
    font-size: 1rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 1.5rem;

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
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;

  margin-top: 3rem;
  font-family: 'av-bold';
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  transition: all 0.5s ease;

  background: ${({ disabled }) => (disabled ? '#ccc2' : 'orange')};
  box-shadow: ${({ disabled }) =>
    disabled
      ? '#ccc2'
      : '12px 12px 24px rgba(0, 0, 0, 0.4), -12px -12px 24px rgba(0, 0, 0, 0.4)'};

  &:hover {
    ${({ disabled }) => (disabled ? null : 'transform: scale(0.9)')};
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
`;

export const FormFooterWrapper = styled.div`
  margin-top: 2rem;

  a {
    display: block;
    text-decoration: none;
    color: #fff;
    margin: 0.2rem 0;

    &:hover {
      text-decoration-line: underline;
    }
  }
`;
