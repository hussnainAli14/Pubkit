import { combineReducers } from "redux";
import userReducer from "./User/userReducers";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
