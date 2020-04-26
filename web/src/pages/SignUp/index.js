import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
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

import { Types as SignUpTypes } from '~/store/ducks/signUpReducer';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmitValues = ({ name, email, password }) => {
    const data = {
      name,
      email,
      password,
    };

    dispatch({
      type: SignUpTypes.REGISTER_REQUEST,
      payload: data,
    });
  };

  const { signUpReducer } = useSelector((state) => state);

  useEffect(() => {
    if (signUpReducer && signUpReducer.error) {
      toast.error(`${signUpReducer.errorMessage}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        draggable: false,
        autoClose: 3000,
      });
    }
  }, [signUpReducer]);

  return (
    <Container>
      <ToastContainer />
      <FormikWrapper>
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
            name: Yup.string().required('O nome é obrigatório'),
            email: Yup.string()
              .email('O E-mail informado não é valido')
              .required('O Email é obrigatório'),
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
                <span>SEJA</span>
              </FormHeaderText>
              <FormHeaderText>BEM-VINDO</FormHeaderText>
              <InputWrapper>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  id="name"
                />
                <label htmlFor="name">Nome</label>
                {errors.name && touched.name && (
                  <TextError>{errors.name}</TextError>
                )}
              </InputWrapper>
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
                <label htmlFor="confirm-password">Repita a senha</label>
                {errors.confirmPassword && touched.confirmPassword && (
                  <TextError>{errors.confirmPassword}</TextError>
                )}
              </InputWrapper>
              <SubmitButton
                type="submit"
                disabled={!(isValid && dirty)}
                onClick={handleSubmit}
              >
                Registrar
              </SubmitButton>
            </FormWrapper>
          )}
        />
      </FormikWrapper>
    </Container>
  );
};

export default SignUp;
