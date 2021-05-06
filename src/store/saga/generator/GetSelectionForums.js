import axios from "axios";
import { call, put } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../../redux/FetchActions";

const selectionsUrl = "http://localhost:3001/service/api/v2/selections/forums/TW";

export default function* GetSelectionForums(getApi) {
  try {
    const selections = yield call(getApi, selectionsUrl);
    const selectionForumsData = [];
    for (let selection of selections) {     
      const selectionForumUrl = "http://localhost:3001/service/api/v2/forums/" + selection.id;
      const selectionForum = yield call(getApi, selectionForumUrl);
      selectionForumsData.push(selectionForum);
    }
    yield put(FetchSuccess(selectionForumsData));
  } catch (e) {
    yield put(FetchFailure(e.message));
  }
}
