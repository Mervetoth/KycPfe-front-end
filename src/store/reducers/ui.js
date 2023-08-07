import { SET_THEME } from "../actions/actionType";

const initState = {
  theme: "light",
};

export const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
