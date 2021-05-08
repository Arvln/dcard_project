import { all } from "redux-saga/effects";
import RequestsSaga from "./RequestsSaga";
import { GetSelectionForums, GetForums, GetCategorization, GetCategories, GetBulletin } from "./generator";

export default function* RootSaga() {
  yield all([
    RequestsSaga(GetForums),
    RequestsSaga(GetCategorization),
    RequestsSaga(GetCategories),
    RequestsSaga(GetSelectionForums),
    RequestsSaga(GetBulletin),
  ])
}
