import { GET_NAME_COUNTRY } from "../actions/actionType";

const initState = {
  listNameCountry: [],
};

export const listingCountryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_NAME_COUNTRY:
      return {
        ...state,
        listNameCountry: action.payload.countryName,
      };

    default:
      return state;
  }
};
