import { combineReducers } from 'redux';

import userData from './userData';
import userCompanyStatus from './userCompanyStatus';

const reducers = combineReducers({
  userData,
  userCompanyStatus,
});

export default reducers;
