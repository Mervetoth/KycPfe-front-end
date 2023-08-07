import { NEW_PASSWORD_RESET } from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";
import { setAuthError, setAuthIsLoading } from "./user";
import { useDispatch } from "react-redux";

export const getNewPasswordReset = (payload) => {
  return {
    type: NEW_PASSWORD_RESET,
    payload,
  };
};

// new password  reset via email
export const GetNewPasswordReset = (Data) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    dispatch(setAuthIsLoading(true));
    return axios
      .post(`${Constants.API_URL}${Constants.API_NEW_PASSWORD_RESET}`, Data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getNewPasswordReset(Data));
          dispatch(setAuthIsLoading(false));
          localStorage.setItem("user", JSON.stringify(response?.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
        dispatch(setAuthIsLoading(false));
      });
  };
};
