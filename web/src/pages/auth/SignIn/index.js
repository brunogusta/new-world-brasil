/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import history from '~/routes/history';

import {
  Container,
  FormikWrapper,
  FormWrapper,
  SubmitButton,
  TextError,
  FormFooterWrapper,
  InputWrapper,
  FormHeaderText,
} from './styles';

import api from '~/services/api';

import { Types as UserData } from '~/store/ducks/userData';

const SignIn = () => {
  const dispath = useDispatch();
  const handleSubmitValues = async ({ email, password }) => {
    const data = {
      email,
      password,
    };

    try {
      const resp = await api.post('auth/signin', { ...data });

      if (resp) {
        window.localStorage.setItem('TOKEN_KEY', resp.data.token);
        window.localStorage.setItem('USER_NAME', resp.data.user.name);

        dispath({
          type: UserData.INSERT_DATA,
          payload: { name: resp.data.user.name, token: resp.data.token },
        });

        history.push('/');
      }
    } catch (err) {
      if (err && err.response.data.error) {
        toast.error(`${err.response.data.error}`, {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
          autoClose: 8000,
          className: 'custom-toast',
        });
      }
    }
  };

  return (
    <Container>
      <ToastContainer />
      <FormikWrapper duration="1s">
        <FormHeaderText>LOGIN</FormHeaderText>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values, actions) => {
            handleSubmitValues(values);
            actions.resetForm();
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('O E-mail informado não é valido')
              .required('O Email é obrigatório'),
            password: Yup.string().required('A senha é obrigatória'),
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
              <InputWrapper>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
              <InputWrapper>
                <input
                  type="password"
                  name="password"
                  placeholder="email"
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
              <SubmitButton
                type="submit"
                disabled={!(isValid && dirty)}
                onClick={handleSubmit}
              >
                ENTRAR
              </SubmitButton>
            </FormWrapper>
          )}
        />
        <FormFooterWrapper>
          <Link to="/auth/forgot_password">Esqueci minha senha.</Link>
          <Link to="/auth/resend_email">Reenviar email de confirmação.</Link>
        </FormFooterWrapper>
      </FormikWrapper>
    </Container>
  );
};

export default SignIn;
