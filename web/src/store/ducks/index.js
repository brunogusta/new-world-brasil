import { combineReducers } from 'redux';

import userData from './userData';
import userGuildStatus from './userGuildStatus';

const reducers = combineReducers({
  userData,
  userGuildStatus,
});

export default reducers;
