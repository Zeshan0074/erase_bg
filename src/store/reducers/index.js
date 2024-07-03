// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import userReducer from "./authReducer";
import paypalReducer from "./PaypalReducer";
import stateReducer from "./Reducer";
import statsReducer from "./statsReducer";

export let rootReducer = combineReducers({
  authUser: authUserReducer,
  paypal: paypalReducer,
  user: userReducer,
  reducer: stateReducer,
  stats: statsReducer
});

export default rootReducer;
