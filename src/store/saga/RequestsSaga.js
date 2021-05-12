import { get } from "../../adapters/xhr";
import { takeEvery } from "redux-saga/effects";
import { FetchActionsType } from "../redux/initial_data_for_app/FetchActionsType";
import { GetFetchSectionPostsRequests } from "../../types/FetchSectionPostsActionsType";

export const getApi = fetchUrl => {
  return (
    get(fetchUrl)
    .then(res => res.data)
    .catch(err => { throw err })
  )
}

export default function* RequestsSaga(GetData) {
  yield takeEvery(FetchActionsType.FETCH_INITIAL_DATA_FOR_APP_REQUEST, GetData, getApi);
  yield takeEvery(GetFetchSectionPostsRequests(0), GetData, getApi);
  for (let i = 0; i < 20; i ++) {
    yield takeEvery(GetFetchSectionPostsRequests(30 * i), GetData, getApi);
  }
}