import styled, { keyframes } from 'styled-components';
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

export const Container = styled(baseAnimation)`
  width: 60%;

  max-width: 824px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;

  margin-bottom: 1rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  font-family: 'av-bold';
  animation-name: ${FadeInAnimation};

  .RichTextEditor__root___2QXK- {
    min-height: 600px;
    max-height: 600px;

    .ButtonGroup__root___3lEAn:nth-child(4) {
      display: none;
    }
  }

  .public-DraftEditor-content {
    min-height: 540px;
    max-height: 540px;
  }

  .DraftEditor-editorContainer {
    min-height: 600px;
    max-height: 600px;
  }

  p {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.textSecundary};
  }

  .discord-wrapper {
    margin-top: 1.2rem;
  }
  .governor-wrapper {
    margin-top: 1.2rem;
  }

  .image-section {
    width: 20%;
  }

  .consuls-section {
    width: 26%;
  }

  .descrition-section {
    width: 27%;
  }
`;

export const FormHeader = styled.div`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 30%;

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

  p {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.textSecundary};
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

  background: ${({ disabled }) => (disabled ? '#ccc2' : '#FFD700')};
  box-shadow: ${({ disabled }) =>
    disabled
      ? '#ccc2'
      : '12px 12px 24px rgba(0, 0, 0, 0.4), -12px -12px 24px rgba(0, 0, 0, 0.4)'};

  &:hover {
    ${({ disabled }) => (disabled ? null : 'transform: scale(0.9)')};
  }
`;

export const SectionTitle = styled.div`
  position: relative;
  color: #fff;
  margin-top: 1rem;

  h1 {
    font-size: 1.4rem;
  }

  img {
    height: 5%;
    max-width: 100%;
  }
`;

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
`;

export const SelectInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConsulsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-top: 0.5rem;

  img {
    height: 200px;
    width: 200px;
  }

  input[type='file'] {
    display: none;
  }

  p {
    display: block;
    position: relative;
  }

  label {
    position: relative;
    display: block;
    background-color: #ffd700;
    border-radius: 5px;
    color: #000;
    cursor: pointer;

    text-align: center;
    padding: 0.3rem;
    margin-top: 0.3rem;
    width: 200px;
    font-size: 0.95rem;
    font-family: 'av-bold';
    margin-left: 1rem;

    &:hover {
      background-color: #9b8300;
    }
  }
`;
