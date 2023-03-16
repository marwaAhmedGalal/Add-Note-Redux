import { combineReducers } from "redux";
import AddNotesReducer from "../containers/addNotes/store/reducers";
import NoteListReducer from "./../containers/notesList/store/reducers";

const rootReducer = combineReducers({
  AddNotesReducer,
  NoteListReducer,
});

export default rootReducer;
