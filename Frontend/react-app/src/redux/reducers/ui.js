import {SHOW_SPINNER, HIDE_SPINNER} from "../actions/ui";

const initUi = {
  pending: false
};

export function uiReducer (state = initUi, action) {

  return (!action.type.includes("_SUCCESS") || action.type.includes("_ERROR"))
  ? {...state, pending: true} :{...state, pending: false}
}