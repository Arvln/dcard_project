import { call, put } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../../redux/FetchActions";
import { selectionsUrl } from "../FetchApi";

export default function* GetSelectionForums(getApi) {
  try {
    const selections = yield call(getApi, selectionsUrl);
    yield put(FetchSuccess("Selections", selections));
  } catch (e) {
    yield put(FetchFailure("Selections", e.message));
  }
}
