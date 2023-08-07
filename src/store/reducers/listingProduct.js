import { GET_NAME_PRODUCT } from "../actions/actionType";

const initState = {
  listNameProduct: [],
};

export const listingProductReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_NAME_PRODUCT:
      return {
        ...state,
        listNameProduct: action.payload.productName,
      };

    default:
      return state;
  }
};
