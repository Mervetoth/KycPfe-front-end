// country
import {
  GET_LIST_COUNTRY,
  GET_BY_ID_LIST_COUNTRY,
  ADD_COUNTRY_SUCCESS,
  EDIT_COUNTRY_SUCCESS,
} from "../actions/actionType";

const initState = {
  country: null,
  listCountry: [],
  getNewListCountry: null,
  userError: "",
  userIsLoading: false,
  currentPage: 0,
  totalPage: 0,
  addCountrySuccess: false,
  editCountrySuccess: false,
};

export const countryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_COUNTRY:
      return {
        ...state,
        listCountry: action.payload?.pays,
        totalPage: action.payload?.nbpage,
        currentPage: action.payload?.currentPage,
        count: action.payload?.count,
      };
    case GET_BY_ID_LIST_COUNTRY:
      return {
        ...state,
        getNewListCountry: action.payload,
      };
    case ADD_COUNTRY_SUCCESS:
      return {
        ...state,
        addCountrySuccess: action.payload,
      };
    case EDIT_COUNTRY_SUCCESS:
      return {
        ...state,
        editCountrySuccess: action.payload,
      };
    default:
      return state;
  }
};
