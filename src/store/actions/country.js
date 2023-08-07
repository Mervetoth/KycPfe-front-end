import {
  GET_LIST_COUNTRY,
  DELETE_LIST_COUNTRY,
  ADD_LIST_COUNTRY,
  GET_BY_ID_LIST_COUNTRY,
  UPDATE_LIST_COUNTRY,
  EDIT_COUNTRY_SUCCESS,
  ADD_COUNTRY_SUCCESS,
} from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";
import { setAuthError } from "./user";
import { setAuthIsLoading } from "./user";

export const setListCountry = (payload) => {
  return {
    type: GET_LIST_COUNTRY,
    payload,
  };
};

export const deleteListCountry = (payload) => {
  return {
    type: DELETE_LIST_COUNTRY,
    payload,
  };
};
export const addListCountry = (payload) => {
  return {
    type: ADD_LIST_COUNTRY,
    payload,
  };
};

export const getByIdListCountry = (payload) => {
  return {
    type: GET_BY_ID_LIST_COUNTRY,
    payload,
  };
};

export const updateListCountry = (payload) => {
  return {
    type: UPDATE_LIST_COUNTRY,
    payload,
  };
};
export const setAddCountrySuccess = (payload) => {
  return {
    type: ADD_COUNTRY_SUCCESS,
    payload,
  };
};
export const setEditCountrySuccess = (payload) => {
  return {
    type: EDIT_COUNTRY_SUCCESS,
    payload,
  };
};

// GET COUNTRIES

export const GetListCountry = (AccessToken, page, limit) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    dispatch(setAuthIsLoading(true));
    return axios
      .get(
        `${Constants.API_URL}${Constants.API_LIST_COUNTRY}?page=${
          page + 1
        }&limit=${limit}`,

        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(setListCountry(response?.data));
          dispatch(setAuthIsLoading(false));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};
// delete countries

export const DeleteListCountry = (AccessToken, id) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    return axios
      .delete(`${Constants.API_URL}${Constants.API_DELETE_LIST_COUNTRY}${id}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetListCountry(AccessToken));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

// add countries
export const AddListCountry = (Data, AccessToken) => {
  return (dispatch) => {
    return axios
      .post(`${Constants.API_URL}${Constants.API_ADD_LIST_COUNTRY}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetListCountry(AccessToken));
          dispatch(setAddCountrySuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

// GET BY ID COUNTRY

export const GetByIdListCountry = (Data, AccessToken) => {
  return (dispatch) => {
    return axios
      .post(
        `${Constants.API_URL}${Constants.API_GET_BY_ID_LIST_COUNTRY}`,
        Data,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(getByIdListCountry(response.data.result));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

//update country
export const UpdateListCountry = (AccessToken, id, Data) => {
  return (dispatch) => {
    return axios
      .patch(
        `${Constants.API_URL}${Constants.API_UPDATE_LIST_COUNTRY}${id}`,
        Data,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateListCountry(Data));
          dispatch(setEditCountrySuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired Token"));
      });
  };
};
