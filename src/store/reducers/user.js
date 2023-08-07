import {
  GET_LIST_USER,
  GET_LIST_ADMIN,
  TRY_AUTH,
  TRY_AUTH_ERROR,
  TRY_AUTH_ISLOADING,
  GET_BY_ID_LIST_ADMIN,
  GET_BY_ID_LIST_USER,
  ADD_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  ADD_ADMIN_SUCCESS,
  EDIT_ADMIN_SUCCESS,
} from "../actions/actionType";

const initState = {
  user: null,
  listUser: [],
  getNewListUser: null,
  listAdmin: [],
  getNewListAdmin: null,
  userError: "",
  userIsLoading: false,
  totalPage: 0,
  currentPage: 0,
  addUserSuccess: false,
  addAdminSuccess: false,
  editAdminSuccess: false,
  editUserSuccess: false,
};
export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case TRY_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    case GET_LIST_USER:
      return {
        ...state,
        listUser: action.payload?.users,
        totalPage: action.payload?.nbpage,
        currentPage: action.payload?.currentPage,
        count: action.payload?.count,
      };
    case GET_LIST_ADMIN:
      return {
        ...state,
        listAdmin: action.payload?.admins,
        totalPage: action.payload?.nbpage,
        currentPage: action.payload?.currentPage,
        count: action.payload?.count,
      };
    case TRY_AUTH_ERROR:
      return {
        ...state,
        userError: action.payload,
      };
    case TRY_AUTH_ISLOADING:
      return {
        ...state,
        userIsLoading: action.payload,
      };
    case GET_BY_ID_LIST_ADMIN:
      return {
        ...state,
        getNewListAdmin: action.payload,
      };
    case GET_BY_ID_LIST_USER:
      return {
        ...state,
        getNewListUser: action.payload,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        addUserSuccess: action.payload,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        editUserSuccess: action.payload,
      };
    case ADD_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminSuccess: action.payload,
      };
    case EDIT_ADMIN_SUCCESS:
      return {
        ...state,
        editAdminSuccess: action.payload,
      };

    default:
      return state;
  }
};
