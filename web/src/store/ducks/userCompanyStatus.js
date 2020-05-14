export const Types = {
  CREATE_SUCCESS: 'userCompanyStatus/CREATE_SUCCESS',
};

const INITIAL_STATE = {
  success: false,
  _id: '',
};

export default function userCompanyStatus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_SUCCESS:
      return { success: true, _id: action.payload._id };
    default:
      return state;
  }
}

export const Creators = {};
