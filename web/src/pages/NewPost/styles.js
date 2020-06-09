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

export const FormikWrapper = styled.div`
  margin: auto auto;
  width: 60%;

  margin-top: 10vh;
  min-width: 350px;
  padding: 2rem 2rem;
  min-height: 300px;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .post-info {
    text-align: center;
    color: #fff;
  }
`;

export const FormHeaderText = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  width: 100%;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

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
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 13px 0px 10px 0px;
  border: none;

  margin-top: 3rem;
  font-family: 'av-bold';
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  transition: all 0.5s ease;
  color: ${({ disabled }) => (disabled ? '#ccc2' : '#000')};

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

export const ImageUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-top: 2rem;

  img {
    height: 300px;
    width: 400px;
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
