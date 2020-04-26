import styled from 'styled-components';
import background from '~/assets/images/background.jpg';

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.background};
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
  position: absolute;
  padding: 3rem;
  border-radius: 1rem;
  background-color: #ccc;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    margin: 0.3rem 0;
    padding: 1rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;

  background-color: ${({ disabled }) => (disabled ? '#ccc2' : 'orange')};
`;

export const TextError = styled.p`
  font-size: 1.1rem;
  color: red;
`;
