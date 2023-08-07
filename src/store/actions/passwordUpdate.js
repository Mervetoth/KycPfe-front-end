import { PASSWORD_RESET } from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";
import { setAuthError } from "./user";

export const getpasswordReset = (payload) => {
  return {
    type: PASSWORD_RESET,
    payload,
  };
};
//password  reset
export const GetPasswordReset = (Data, AccessToken) => {
  return (dispatch) => {
    return axios
      .patch(`${Constants.API_URL}${Constants.API_PASSWORD_RESET}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getpasswordReset(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};
