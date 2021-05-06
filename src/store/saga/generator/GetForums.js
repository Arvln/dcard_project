import { call, put } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../../redux/FetchActions";
import { forumsUrl } from "../FetchApi";

export default function* GetForums(getApi) {
  try {
    const forums = yield call(getApi, forumsUrl);
    yield put(FetchSuccess("Forums", forums));
  } catch (e) {
    yield put(FetchFailure("Forums", e.message))
  }
}