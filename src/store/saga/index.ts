import { all } from "redux-saga/effects";
import RequestsSaga from "./RequestsSaga";
import GetSelectionForums from "./generator/GetSelectionForums";

export default function* RootSaga() {
  yield all([
    RequestsSaga(GetSelectionForums)
  ])
}
