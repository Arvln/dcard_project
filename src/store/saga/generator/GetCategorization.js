import { call, put } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../../redux/FetchActions";
import { categorizationUrl } from "../FetchApi";

export default function* getCategorization(getApi) {
  try {
    const categorization = yield call(getApi, categorizationUrl);
    yield put(FetchSuccess("Categorization", categorization));
  } catch (e) {
    yield put(FetchFailure("Categorization", e.message));
  }
}