import { SEND_EMAIL } from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";
import { setAuthError } from "./user";

export const getSendMail = (payload) => {
  return {
    type: SEND_EMAIL,
    payload,
  };
};
// sen email for forgot password
export const GetSendMail = (Data) => {
  return (dispatch) => {
    return axios
      .post(`${Constants.API_URL}${Constants.API_SEND_EMAIL}`, Data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getSendMail(Data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};
