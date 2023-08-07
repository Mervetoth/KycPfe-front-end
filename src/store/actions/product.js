import {
  GET_LIST_PRODUCT,
  DELETE_LIST_PRODUCT,
  ADD_LIST_PRODUCT,
  GET_BY_ID_LIST_PRODUCT,
  UPDATE_LIST_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
} from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";
import { setAuthError } from "./user";
import { setAuthIsLoading } from "./user";

export const setListProduct = (payload) => {
  return {
    type: GET_LIST_PRODUCT,
    payload,
  };
};

export const deleteListProduct = (payload) => {
  return {
    type: DELETE_LIST_PRODUCT,
    payload,
  };
};

export const addListProduct = (payload) => {
  return {
    type: ADD_LIST_PRODUCT,
    payload,
  };
};
export const getByIdListProduct = (payload) => {
  return {
    type: GET_BY_ID_LIST_PRODUCT,
    payload,
  };
};

export const updateListProduct = (payload) => {
  return {
    type: UPDATE_LIST_PRODUCT,
    payload,
  };
};

export const setAddProductSuccess = (payload) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload,
  };
};
export const setEditProductSuccess = (payload) => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    payload,
  };
};

// get product

export const GetListProduct = (AccessToken, page, limit) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    dispatch(setAuthIsLoading(true));
    return axios
      .get(
        `${Constants.API_URL}${Constants.API_LIST_PRODUCT}?page=${
          page + 1
        }&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(setListProduct(response?.data));
          dispatch(setAuthIsLoading(false));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

/// delete product

export const DeleteListProduct = (AccessToken, id) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    return axios
      .delete(`${Constants.API_URL}${Constants.API_DELETE_LIST_PRODUCT}${id}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetListProduct(AccessToken));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

/// ADD PRODUCT
export const AddListProduct = (Data, AccessToken) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    return axios
      .post(`${Constants.API_URL}${Constants.API_ADD_LIST_PRODUCT}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetListProduct(AccessToken));
          dispatch(setAddProductSuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

/// GET BY ID PRODUCT
export const GetByIdListProduct = (Data, AccessToken) => {
  return (dispatch) => {
    return axios
      .post(
        `${Constants.API_URL}${Constants.API_GET_BY_ID_LIST_PRODUCT}`,
        Data,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(getByIdListProduct(response.data.result));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

// UPDATE PRODUCT
export const UpdateListProduct = (AccessToken, id, Data) => {
  return (dispatch) => {
    dispatch(setAddProductSuccess(false));
    return axios
      .patch(
        `${Constants.API_URL}${Constants.API_UPDATE_LIST_PRODUCT}${id}`,
        Data,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateListProduct(Data));
          dispatch(setEditProductSuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired Token"));
        dispatch(setAddProductSuccess(false));
      });
  };
};
