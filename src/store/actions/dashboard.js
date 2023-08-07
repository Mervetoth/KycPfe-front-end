import { GET_LIST_DASHBOARD } from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";
import { setAuthError } from "./user";

export const getListDashboard = (payload) => {
  return {
    type: GET_LIST_DASHBOARD,
    payload,
  };
};
// get dashboard informaton
export const GetListDashboard = (AccessToken) => {
  return (dispatch) => {
    return axios
      .get(`${Constants.API_URL}${Constants.API_LIST_DASHBOARD}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getListDashboard(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};
