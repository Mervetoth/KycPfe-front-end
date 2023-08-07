import { GET_NOTIFICATION } from "./actionType";

import axios from "axios";
import Constants from "../../utility/constant.json";
import { setAuthError } from "./user";

export const getListNotification = (payload) => {
  return {
    type: GET_NOTIFICATION,
    payload,
  };
};
// listing notification
export const GetListNotification = (AccessToken) => {
  return (disptach) => {
    return axios
      .get(`${Constants.API_URL}${Constants.API_LISTING_NOTIFICATION}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          disptach(getListNotification(response?.data));
        }
      });
  };
};
