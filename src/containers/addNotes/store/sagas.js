import { takeEvery } from "redux-saga/effects";
import { GET_NOTES_VALUE } from "./actionTypes";

//root saga that will combine all sub sagas
//put -> put value into your action and then this will dispatch the value to action --> reducers
//call -> calling any api
//takevery, takelatest

export default function* AddNotesSaga() {
  yield takeEvery(GET_NOTES_VALUE, getNotesSaga);
}
function* getNotesSaga(action) {
  yield console.log("getting notes saga here", action);
}
