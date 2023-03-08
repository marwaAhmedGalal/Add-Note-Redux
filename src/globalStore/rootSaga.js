import { all, fork } from "redux-saga/effects";
import AddNotesSaga from "../containers/addNotes/store/sagas";

export default function* rootSaga() {
  yield all([fork(AddNotesSaga)]);
}
