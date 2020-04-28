export const Types = {
  INSERT_DATA: 'userData/INSERT_DATA',
  CLEAR_DATA: 'userData/CLEAR_DATA',
};

const INITIAL_STATE = {
  name: null,
  token: null,
};

export default function userData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INSERT_DATA:
      return { name: action.payload.name, token: action.payload.token };
    case Types.CLEAR_DATA:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

export const Creators = {};
