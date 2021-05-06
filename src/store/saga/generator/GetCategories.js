import { call, put } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../../redux/FetchActions";
import { categoriesUrl } from "../FetchApi";

export default function* getCategories(getApi) {
  try {
    const categories = yield call(getApi, categoriesUrl);
    yield put(FetchSuccess("Categories", categories));
  } catch (e) {
    yield put(FetchFailure("Categories", e.message));
  }
}