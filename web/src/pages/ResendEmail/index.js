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
          });
        }
      })
      .catch((err) => {
        if (err && err.response.data) {
          toast.error(`${err.response.data}`, {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
            autoClose: 5000,
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
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <TextError>{errors.email}</TextError>
              )}
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
