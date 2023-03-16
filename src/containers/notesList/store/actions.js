import {
  INIT_GET_LIST_DATA,
  FETCHING_GET_LIST_DATA,
  FETCHING_GET_LIST_DATA_SUCCESS,
  FETCHING_GET_LIST_DATA_FAILED,
} from "./actionTypes";

export function initGetListData() {
  return {
    type: INIT_GET_LIST_DATA,
  };
}

export function fetchingGetListData() {
  return {
    type: FETCHING_GET_LIST_DATA,
  };
}

export function fetchingGetListDataSuccess(notesListData) {
  return {
    type: FETCHING_GET_LIST_DATA_SUCCESS,
    notesListData,
  };
}

export function fetchingGetListDataFailed() {
  return {
    type: FETCHING_GET_LIST_DATA_FAILED,
  };
}
