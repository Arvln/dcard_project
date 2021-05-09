import { all } from "redux-saga/effects";
import RequestsSaga from "./RequestsSaga";
import { GetInitialDataForApp } from "./generator";

export default function* RootSaga() {
  yield all([
    RequestsSaga(GetInitialDataForApp),
  ])
}
