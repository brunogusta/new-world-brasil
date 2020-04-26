/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

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

import { Types as SignInReducer } from '~/store/ducks/signInReducer';

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmitValues = ({ email, password }) => {
    const data = {
      email,
      password,
    };

    dispatch({
      type: SignInReducer.LOGIN_REQUEST,
      payload: data,
    });
  };

  const { signInReducer } = useSelector((state) => state);

  useEffect(() => {
    if (signInReducer && signInReducer.error) {
      toast.error(`${signInReducer.errorMessage}`, {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
        autoClose: 5000,
      });
    }
  }, [signInReducer]);

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
