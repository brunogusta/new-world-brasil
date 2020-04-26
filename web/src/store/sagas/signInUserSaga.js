import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '~/services/api';

import { Creators as SignInActions } from '~/store/ducks/signInReducer';

export function* signInUserSaga(input) {
  try {
    const { email, password } = input.payload;

    const { data } = yield api.post('auth/signin', {
      email,
      password,
    });

    yield window.localStorage.setItem('TOKEN_KEY', data.token);
    yield window.localStorage.setItem('USER_NAME', data.user.name);
    yield window.localStorage.setItem('USER_EMAIL', data.user.email);

    const perfil = {
      name: data.user.name,
      email: data.user.email,
      token: data.token,
    };

    yield put(SignInActions.handleLoginSaveUserData(perfil));
    yield put(push('/'));
  } catch (err) {
    const { data } = err.response;
    yield put(SignInActions.handleLoginError(data.error));
  }
}
