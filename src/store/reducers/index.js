// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import userReducer from "./authReducer";
import paypalReducer from "./PaypalReducer";
import stateReducer from "./Reducer";

export let rootReducer = combineReducers({
  authUser: authUserReducer,
  paypal: paypalReducer,
  user: userReducer,
  reducer: stateReducer
});

export default rootReducer;
