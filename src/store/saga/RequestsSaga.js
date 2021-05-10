import { get } from "../../adapters/xhr";
import { takeEvery } from "redux-saga/effects";
import { FetchActionsType } from "../redux/initial_data_for_app/FetchActionsType";
import { FetchSectionPostsActionsType } from "../redux/section_posts/FetchSectionPostsActionsType";

const getApi = fetchUrl => {
  return (
    get(fetchUrl)
    .then(res => res.data)
    .catch(err => { throw err })
  )
}

export default function* RequestsSaga(GetData) {
  yield takeEvery(FetchActionsType.FETCH_INITIAL_DATA_FOR_APP_REQUEST, GetData, getApi);
  yield takeEvery(FetchSectionPostsActionsType.FETCH_SECTION_POSTS_REQUEST, GetData, getApi);
}