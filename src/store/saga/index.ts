import { all } from "redux-saga/effects";
import RequestsSaga from "./RequestsSaga";
import { GetInitialDataForApp, GetSectionPosts } from "./generator";

export default function* RootSaga() {
  yield all([
    RequestsSaga(GetInitialDataForApp),
    RequestsSaga(GetSectionPosts),
  ])
}
