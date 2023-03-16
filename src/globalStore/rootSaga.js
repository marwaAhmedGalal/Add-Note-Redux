import { all, fork } from "redux-saga/effects";
import AddNotesSaga from "../containers/addNotes/store/sagas";
import NoteListSaga from "../containers/notesList/store/sagas";

export default function* rootSaga() {
  yield all([fork(AddNotesSaga), fork(NoteListSaga)]);
}
