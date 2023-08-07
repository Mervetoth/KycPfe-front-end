import {
  GET_LIST_SEARCH,
  DELETE_LIST_SEARCH,
  GET_LOCAL_SEARCH,
  GET_INTERNATIONAL_SEARCH,
  GET_BY_ID_LIST_SEARCH,
  INTERNATIONAL_SEARCH_IS_LOADING,
} from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";
import { setAuthError } from "./user";

export const setListSearch = (payload) => {
  return {
    type: GET_LIST_SEARCH,
    payload,
  };
};

export const deleteListSearch = (payload) => {
  return {
    type: DELETE_LIST_SEARCH,
    payload,
  };
};
export const getLocalSearch = (payload) => {
  return {
    type: GET_LOCAL_SEARCH,
    payload,
  };
};
export const getInternationalSearch = (payload) => {
  return {
    type: GET_INTERNATIONAL_SEARCH,
    payload,
  };
};

export const internationalSearchIsLoading = (payload) => {
  return {
    type: INTERNATIONAL_SEARCH_IS_LOADING,
    payload,
  };
};

export const getByIdListSearch = (payload) => {
  return {
    type: GET_BY_ID_LIST_SEARCH,
    payload,
  };
};
//GET SEARCH HISTORY LIST
export const GetListSearch = (AccessToken, page, limit) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    return axios
      .get(
        `${Constants.API_URL}${Constants.API_LIST_SEARCH}?page=${
          page + 1
        }&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(setListSearch(response?.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};
// DELETE SEARCH LIST
export const DeleteListSearch = (AccessToken, id) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    return axios
      .delete(`${Constants.API_URL}${Constants.API_DELETE_LIST_SEARCH}${id}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetListSearch(AccessToken));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

// RECHERCHE LOCAL
export const GetLocalSearch = (AccessToken, Data) => {
  return (dispatch) => {
    return axios
      .post(`${Constants.API_URL}${Constants.API_GET_LOCAL_SEARCH}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getLocalSearch(response.data.recherche));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

//RECHERCHE INTERNATIONAL
export const GetInternationalSearch = (AccessToken, Data) => {
  return (dispatch) => {
    dispatch(internationalSearchIsLoading(true));
    return axios
      .post(
        `${Constants.API_URL}${Constants.API_GET_INTERNATIONAL_SEARCH}`,
        Data,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(getInternationalSearch(response.data.content));
          dispatch(internationalSearchIsLoading(false));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
        dispatch(internationalSearchIsLoading(false));
      });
  };
};
// get by id recherche
export const GetByIdListSearch = (Data, AccessToken) => {
  return (dispatch) => {
    return axios
      .post(`${Constants.API_URL}${Constants.API_GET_BY_ID_SEARCH}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getByIdListSearch(response.data.result));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};
