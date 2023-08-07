import { combineReducers } from "redux";
import { userReducer } from "./user";
import { productReducer } from "./product";
import { countryReducer } from "./country";
import { searchReducer } from "./search";
import { dashboardReducer } from "./dashboard";
import { passwordResetReducer } from "./passwordUpdate";
import { mailReducer } from "./sendEmail";
import { newPasswordResetReducer } from "./newResetPassword";
import { notificationReducer } from "./notification";
import { uiReducer } from "./ui";
import { listingCountryReducer } from "./listingCountry";
import { listingProductReducer } from "./listingProduct";

export const Reducer = combineReducers({
  userReducer,
  productReducer,
  countryReducer,
  searchReducer,
  dashboardReducer,
  passwordResetReducer,
  mailReducer,
  newPasswordResetReducer,
  notificationReducer,
  uiReducer,
  listingProductReducer,
  listingCountryReducer,
});
