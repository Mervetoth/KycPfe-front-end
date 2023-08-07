import { SET_THEME } from "./actionType";

export const setTheme = (payload) => {
  return {
    type: SET_THEME,
    payload,
  };
};
