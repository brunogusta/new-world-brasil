import { combineReducers } from 'redux';

import signUpReducer from './signUpReducer';
import signInReducer from './signInReducer';

const reducers = combineReducers({
  signUpReducer,
  signInReducer,
});

export default reducers;
