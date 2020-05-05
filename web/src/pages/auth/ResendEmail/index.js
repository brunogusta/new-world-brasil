import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Container,
  FormikWrapper,
  FormWrapper,
  SubmitButton,
  TextError,
  InputWrapper,
  FormHeaderText,
} from './styles';

import api from '~/services/api';

const ResendEmail = () => {
  const handleSubmitValues = ({ email }) => {
    api
      .post('auth/resend_email', { email })
      .then(({ data }) => {
        if (data) {
          toast.success(`${data}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 5000,
            className: 'custom-toast',
          });
        }
      })
      .catch((err) => {
        if (err && err.response.data.error) {
          toast.error(`${err.response.data.error}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 5000,
            className: 'custom-toast',
          });
        }
      });
  };

  return (
    <Container>
      <ToastContainer />
      <FormikWrapper>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values, actions) => {
            handleSubmitValues(values);
            actions.resetForm();
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('O E-mail informado não é valido')
              .required('O Email é obrigatório'),
          })}
          render={({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <FormWrapper>
              <FormHeaderText>
                <h1>Insira o Email</h1>
              </FormHeaderText>
              <InputWrapper>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                />
                <label htmlFor="email">Email</label>
                {errors.email && touched.email && (
                  <TextError>{errors.email}</TextError>
                )}
              </InputWrapper>
              <SubmitButton
                type="submit"
                disabled={!(isValid && dirty)}
                onClick={handleSubmit}
              >
                Enviar
              </SubmitButton>
            </FormWrapper>
          )}
        />
      </FormikWrapper>
    </Container>
  );
};

export default ResendEmail;
