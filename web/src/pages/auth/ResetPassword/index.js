import React, { useEffect, useState } from 'react';
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

const ResetPassword = () => {
  const [resp, setResp] = useState('');

  let token = '';
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const params = new URL(document.location).searchParams;
    token = params.get('token');

    if (!token) {
      return setResp(
        'Houve um erro na recuperação de sua senha, tente novamente.'
      );
    }
  }, []);

  const handleSubmitValues = ({ password }) => {
    api
      .post(`auth/reset_password/?token=${token}`, { password })
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
      {resp ? (
        <span>
          <h1>{resp}</h1>
        </span>
      ) : (
        <FormikWrapper>
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values, actions) => {
              handleSubmitValues(values);
              actions.resetForm();
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string().required('A senha é obrigatória'),
              confirmPassword: Yup.string().test(
                '',
                'As senhas não são idênticas',
                function test(values) {
                  // eslint-disable-next-line react/no-this-in-sfc
                  return this.parent.password === values;
                }
              ),
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
                  <h1>Informe a nova senha</h1>
                </FormHeaderText>
                <InputWrapper>
                  <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="password"
                  />
                  <label htmlFor="password">Senha</label>
                  {errors.password && touched.password && (
                    <TextError>{errors.password}</TextError>
                  )}
                </InputWrapper>
                <InputWrapper>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Repita a senha"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    id="confirm-password"
                  />
                  <label htmlFor="confirm-password">Confirmar senha</label>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <TextError>{errors.confirmPassword}</TextError>
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
      )}
    </Container>
  );
};

export default ResetPassword;
