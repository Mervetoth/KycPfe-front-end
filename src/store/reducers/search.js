import {
  GET_LIST_SEARCH,
  GET_LOCAL_SEARCH,
  GET_INTERNATIONAL_SEARCH,
  GET_BY_ID_LIST_SEARCH,
  INTERNATIONAL_SEARCH_IS_LOADING,
} from "../actions/actionType";

const initState = {
  search: null,
  listSearch: [],
  listLocalSearch: null,
  listInternationalSearch: [],
  listGetByIdSearch: [],
  userError: "",
  userIsLoading: false,
  currentPage: 0,
  totalPage: 0,
  internationalSearchIsLoading: false,
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_SEARCH:
      return {
        ...state,
        listSearch: action.payload?.recherches,
        totalPage: action.payload?.nbpage,
        currentPage: action.payload?.currentPage,
        count: action.payload?.count,
      };
    case GET_LOCAL_SEARCH:
      return {
        ...state,
        listLocalSearch: action.payload,
      };
    case GET_INTERNATIONAL_SEARCH:
      return {
        ...state,
        listInternationalSearch: action.payload,
      };
    case GET_BY_ID_LIST_SEARCH:
      return {
        ...state,
        listGetByIdSearch: action.payload,
      };
    case INTERNATIONAL_SEARCH_IS_LOADING:
      return {
        ...state,
        internationalSearchIsLoading: action.payload,
      };

    default:
      return state;
  }
};
