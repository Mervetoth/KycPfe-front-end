import {
  GET_LIST_PRODUCT,
  GET_BY_ID_LIST_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
} from "../actions/actionType";

const initState = {
  product: null,
  listProduct: [],
  getNewListProduct: null,
  userError: "",
  userIsLoading: false,
  currentPage: 0,
  totalPage: 0,
  addProductSuccess: false,
  editProductSucces: false,
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        listProduct: action.payload?.produits,
        totalPage: action.payload?.nbpage,
        currentPage: action.payload?.currentPage,
        count: action.payload?.count,
      };

    case GET_BY_ID_LIST_PRODUCT:
      return {
        ...state,
        getNewListProduct: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductSuccess: action.payload,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editProductSucces: action.payload,
      };

    default:
      return state;
  }
};
