import types from "../types";

const initialState = {
  token: "",
  ip: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        token: action.content.token,
        ip: action.content.ip,
      };
    case types.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
