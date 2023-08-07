// reset password via email
import { NEW_PASSWORD_RESET } from "../actions/actionType";

const initState = {
  password: null,
  listNewPassword: 0,
  userError: "",
  userIsLoading: false,
};

export const newPasswordResetReducer = (state = initState, action) => {
  switch (action.type) {
    case NEW_PASSWORD_RESET:
      return {
        ...state,
        listNewPassword: action.payload,
      };
    default:
      return state;
  }
};
