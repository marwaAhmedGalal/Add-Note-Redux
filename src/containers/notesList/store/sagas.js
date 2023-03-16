import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchingGetListData, fetchingGetListDataSuccess } from "./actions";
import { INIT_GET_LIST_DATA } from "./actionTypes";

export default function* NoteListSaga() {
  yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga);
}

function* getNotesListSaga() {
  //loading state to check weather data is loaded or not
  yield put(fetchingGetListData());

  try {
    const response = yield call(
      axios.get,
      "https://notes-app-5a56c-default-rtdb.firebaseio.com/notesList.json"
    );

    if (response && response.status === 200) {
      const { data } = response;
      const createData = [];

      for (const key in data) {
        createData.push(data[key]);
      }
      yield put(fetchingGetListDataSuccess(createData));
    }
  } catch (error) {}
}
