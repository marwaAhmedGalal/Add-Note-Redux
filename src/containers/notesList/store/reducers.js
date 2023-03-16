import {
  FETCHING_GET_LIST_DATA,
  FETCHING_GET_LIST_DATA_FAILED,
  FETCHING_GET_LIST_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  notesList: [],
  isNotesDataFetching: false,
  isNotesDataFetchingFailed: false,
};

const NoteListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GET_LIST_DATA:
      return {
        ...state,
        isNotesDataFetching: true,
      };

    case FETCHING_GET_LIST_DATA_SUCCESS:
      return {
        ...state,
        notesList: action.notesListData,
        isNotesDataFetching: false,
      };

    case FETCHING_GET_LIST_DATA_FAILED:
      return {
        ...state,
        isNotesDataFetchingFailed: false,
      };

    default:
      return state;
  }
};

export default NoteListReducer;
