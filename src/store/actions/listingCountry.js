import { GET_NAME_COUNTRY } from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";

export const getNameCountry = (payload) => {
  return {
    type: GET_NAME_COUNTRY,
    payload,
  };
};
// sen email for forgot password
export const GetNameCountry = (AccessToken) => {
  return (dispatch) => {
    return axios
      .get(`${Constants.API_URL}${Constants.API_LISTING_COUNTRY_NAME}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getNameCountry(response?.data));
        }
      });
  };
};
