// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import userReducer from "./authReducer";
import stateReducer from "./Reducer";

export let rootReducer = combineReducers({
  authUser: authUserReducer,
  user: userReducer,
  reducer: stateReducer
});

export default rootReducer;
