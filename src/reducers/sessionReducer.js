import { setUsername, setToken, clearSession } from '../actions/sessionActions';

const initialState = {
  token: null,
  username: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUsername.type:
      return {
        ...state,
        username: action.payload,
      };
    case setToken.type:
      return {
        ...state,
        token: action.payload,
      };
    case clearSession.type:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
