import { all, takeLatest } from 'redux-saga/effects';

import { signUpUserSaga } from './signUpUserSaga';
import { signInUserSaga } from './signInUserSaga';

import { Types as signUpTypes } from '../ducks/signUpReducer';
import { Types as signInTypes } from '../ducks/signInReducer';

export default function* rootSaga() {
  yield all([
    takeLatest(signUpTypes.REGISTER_REQUEST, signUpUserSaga),
    takeLatest(signInTypes.LOGIN_REQUEST, signInUserSaga),
  ]);
}
