import { GET_LIST_DASHBOARD } from "../actions/actionType";

const initState = {
  dashboard: null,
  listDashboard: [],
  userError: "",
  userIsLoading: false,
};

export const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST_DASHBOARD:
      return {
        ...state,
        listDashboard: action.payload,
      };
    default:
      return state;
  }
};
