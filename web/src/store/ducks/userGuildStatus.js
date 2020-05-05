export const Types = {
  CREATE_SUCCESS: 'userGuildStatus/CREATE_SUCCESS',
};

const INITIAL_STATE = {
  success: false,
  _id: '',
};

export default function userGuildStatus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_SUCCESS:
      return { success: true, _id: action.payload._id };
    default:
      return state;
  }
}

export const Creators = {};
