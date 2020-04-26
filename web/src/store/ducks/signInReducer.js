export const Types = {
  LOGIN_REQUEST: 'userLogin/LOGIN_REQUEST',
  LOGIN_ERROR: 'userLogin/LOGIN_ERROR',
  LOGIN_SUCCESS: 'userLogin/LOGIN_SUCCESS',
  LOGIN_USER_DATA: 'userLogin/LOGIN_USERDATA',
  LOGIN_CLEAR_USER_DATA: 'userLogin/LOGIN_CLEAR_USER_DATA',
};

const INITIAL_STATE = {
  success: false,
  error: false,
  errorMessage: null,
  username: null,
  email: null,
  token: null,
};

export default function signInReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_ERROR:
      return { error: true, errorMessage: action.payload, success: false };
    case Types.LOGIN_SUCCESS:
      return { error: false, errorMessage: '', success: true };
    case Types.LOGIN_USER_DATA:
      return {
        ...state,
        username: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case Types.LOGIN_CLEAR_USER_DATA:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

export const Creators = {
  handleLoginError: (error) => ({
    type: Types.LOGIN_ERROR,
    payload: error,
  }),
  handleLoginSuccess: () => ({
    type: Types.LOGIN_SUCCESS,
  }),
  handleLoginSaveUserData: (data) => ({
    type: Types.LOGIN_USER_DATA,
    payload: data,
  }),
};
