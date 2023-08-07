import { GET_NOTIFICATION } from "../actions/actionType";

const initState = {
  notification: null,
  listNotification: [],
  userError: "",
  userIsLoading: false,
};

export const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        listNotification: action.payload?.notification,
      };
    default:
      return state;
  }
};
