import { GET_NAME_PRODUCT } from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";

export const getNameProduct = (payload) => {
  return {
    type: GET_NAME_PRODUCT,
    payload,
  };
};
// sen email for forgot password
export const GetNameProduct = (AccessToken) => {
  return (dispatch) => {
    return axios
      .get(`${Constants.API_URL}${Constants.API_LISTING_PRODUCT_NAME}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getNameProduct(response?.data));
        }
      });
  };
};
