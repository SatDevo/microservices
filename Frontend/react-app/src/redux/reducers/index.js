import {combineReducers} from "redux";
import {uiReducer} from "./ui";
import {usersReducer} from "./users";

export const reducers = combineReducers({
  ui  : uiReducer,
  users: usersReducer
});
