import { SEND_EMAIL } from "../actions/actionType";

const initState = {
  email: null,
  listMail: [],
  userError: "",
  userIsLoading: false,
};

export const mailReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return {
        ...state,
        listMail: action.payload,
      };
    default:
      return state;
  }
};
