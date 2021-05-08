import { call, put } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../../redux/FetchActions";
import { bulletinUrl } from "../FetchApi";

export default function* getCategories(getApi) {
  try {
    const bulletin = yield call(getApi, bulletinUrl);
    yield put(FetchSuccess("Bulletin", bulletin));
  } catch (e) {
    yield put(FetchFailure("Bulletin", e.message));
  }
}