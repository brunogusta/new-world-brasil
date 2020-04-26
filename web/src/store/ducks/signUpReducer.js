export const Types = {
  REGISTER_REQUEST: 'userRegister/REGISTER_REQUEST',
  REGISTER_ERROR: 'userRegister/REGISTER_ERROR',
  REGISTER_SUCCESS: 'userRegister/REGISTER_SUCCESS',
};

const INITIAL_STATE = {
  success: false,
  error: false,
  errorMessage: '',
};

export default function signUpReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REGISTER_ERROR:
      return { error: true, errorMessage: action.payload, success: false };
    case Types.REGISTER_SUCCESS:
      return { error: false, errorMessage: '', success: true };
    default:
      return state;
  }
}

export const Creators = {
  handleRegisterError: (error) => ({
    type: Types.REGISTER_ERROR,
    payload: error,
  }),
  handleRegisterSuccess: () => ({
    type: Types.REGISTER_SUCCESS,
  }),
};
