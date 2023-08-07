import {
  TRY_AUTH,
  GET_LIST_USER,
  GET_LIST_ADMIN,
  TRY_AUTH_ERROR,
  TRY_AUTH_ISLOADING,
  DELETE_LIST_ADMIN,
  DELETE_LIST_USER,
  ADD_LIST_ADMIN,
  GET_BY_ID_LIST_ADMIN,
  UPDATE_LIST_ADMIN,
  GET_BY_ID_LIST_USER,
  ADD_LIST_USER,
  ADD_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  ADD_ADMIN_SUCCESS,
  EDIT_ADMIN_SUCCESS,
} from "./actionType";
import axios from "axios";
import Constants from "../../utility/constant.json";

export const setAuth = (payload) => {
  return {
    type: TRY_AUTH,
    payload,
  };
};

export const setAuthIsLoading = (payload) => {
  return {
    type: TRY_AUTH_ISLOADING,
    payload,
  };
};

export const setAuthError = (payload) => {
  return {
    type: TRY_AUTH_ERROR,
    payload,
  };
};

export const setListUser = (payload) => {
  return {
    type: GET_LIST_USER,
    payload,
  };
};

export const setListAdmin = (payload) => {
  return {
    type: GET_LIST_ADMIN,
    payload,
  };
};

export const deleteListAdmin = (payload) => {
  return {
    type: DELETE_LIST_ADMIN,
    payload,
  };
};

export const deleteListUser = (payload) => {
  return {
    type: DELETE_LIST_USER,
    payload,
  };
};

export const addListAdmin = (payload) => {
  return {
    type: ADD_LIST_ADMIN,
    payload,
  };
};

export const getByIdListAdmin = (payload) => {
  return {
    type: GET_BY_ID_LIST_ADMIN,
    payload,
  };
};
export const getByIdListUser = (payload) => {
  return {
    type: GET_BY_ID_LIST_USER,
    payload,
  };
};

export const updateListAdmin = (payload) => {
  return {
    type: UPDATE_LIST_ADMIN,
    payload,
  };
};

export const addListUser = (payload) => {
  return {
    type: ADD_LIST_USER,
    payload,
  };
};
export const setAddUserSuccess = (payload) => {
  return {
    type: ADD_USER_SUCCESS,
    payload,
  };
};
export const setEditUserSuccess = (payload) => {
  return {
    type: EDIT_USER_SUCCESS,
    payload,
  };
};
export const setAddAdminSuccess = (payload) => {
  return {
    type: ADD_ADMIN_SUCCESS,
    payload,
  };
};
export const setEditAdminSuccess = (payload) => {
  return {
    type: EDIT_ADMIN_SUCCESS,
    payload,
  };
};

// api

export const tryAUth = (data) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    dispatch(setAuthIsLoading(true));
    return axios
      .post(`${Constants.API_URL}${Constants.API_LOGIN}`, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setAuth(response?.data));
          dispatch(setAuthIsLoading(false));
          localStorage.setItem("user", JSON.stringify(response?.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("email ou mot de passe incorrect"));
        dispatch(setAuthIsLoading(false));
      });
  };
};

// GET USER
export const GetListUser = (AccessToken, page, limit) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    dispatch(setAuthIsLoading(true));
    return axios
      .get(
        `${Constants.API_URL}${Constants.API_LIST_USER}?page=${
          page + 1
        }&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(setListUser(response?.data));
          dispatch(setAuthIsLoading(false));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token"));
      });
  };
};

// GET Admin

export const GetlistAdmin = (AccessToken, page, limit) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    dispatch(setAuthIsLoading(true));
    return axios
      .get(
        `${Constants.API_URL}${Constants.API_LIST_ADMIN}?page=${
          page + 1
        }&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${AccessToken}` },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch(setListAdmin(response?.data));
          dispatch(setAuthIsLoading(false));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token"));
      });
  };
};

// delete admins
export const DeleteListAdmin = (AccessToken, id) => {
  return (dispatch) => {
    return axios
      .delete(`${Constants.API_URL}${Constants.API_DELETE_LIST_ADMIN}${id}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetlistAdmin(AccessToken));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

// delete User
export const DeleteListUser = (AccessToken, id) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    return axios
      .delete(`${Constants.API_URL}${Constants.API_DELETE_LIST_USER}${id}`, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetListUser(AccessToken));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

// add admin

export const AddListAdmin = (Data, AccessToken) => {
  return (dispatch) => {
    dispatch(setAuthError(""));
    return axios
      .post(`${Constants.API_URL}${Constants.API_ADD_LIST_ADMIN}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetlistAdmin(AccessToken));
          dispatch(setAddAdminSuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};
// get by id admin

export const GetByIdListAdmin = (Data, AccessToken) => {
  return (dispatch) => {
    return axios
      .post(`${Constants.API_URL}${Constants.API_GET_BY_ID_LIST_ADMIN}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getByIdListAdmin(response.data.result));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

//// UPDATE PRODUCT
export const UpdateListAdmin = (AccessToken, Data) => {
  return (dispatch) => {
    return axios
      .patch(`${Constants.API_URL}${Constants.API_UPDATE_LIST_ADMIN}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateListAdmin(Data));
          dispatch(setEditAdminSuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired Token"));
      });
  };
};
// get by id user

export const GetByIdListUser = (Data, AccessToken) => {
  return (dispatch) => {
    return axios
      .post(`${Constants.API_URL}${Constants.API_GET_BY_ID_LIST_USER}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getByIdListUser(response.data.result));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};

// add user

export const AddListUser = (Data, AccessToken) => {
  return (dispatch) => {
    return axios
      .post(`${Constants.API_URL}${Constants.API_ADD_LIST_USER}`, Data, {
        headers: { Authorization: `Bearer ${AccessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(GetListUser(AccessToken));
          dispatch(setAddUserSuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setAuthError("expired token "));
      });
  };
};
