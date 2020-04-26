import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '~/services/api';

import { Creators as SignUpActions } from '~/store/ducks/signUpReducer';

export function* signUpUserSaga(perfil) {
  try {
    const { email, password, name } = perfil.payload;
    yield api.post('auth/signup', {
      name,
      email,
      password,
    });

    yield put(push('/auth/confirm_email'));
  } catch (err) {
    if (err.response) {
      const { data } = err.response;
      yield put(SignUpActions.handleRegisterError(data));
    }
  }
}
