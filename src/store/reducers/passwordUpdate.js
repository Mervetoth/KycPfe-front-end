// country
import { PASSWORD_RESET } from "../actions/actionType";

const initState = {
  password: null,
  listPassword: [],
  userError: "",
  userIsLoading: false,
};

export const passwordResetReducer = (state = initState, action) => {
  switch (action.type) {
    case PASSWORD_RESET:
      return {
        ...state,
        listPassword: action.payload,
      };
    default:
      return state;
  }
};
