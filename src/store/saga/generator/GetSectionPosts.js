import { all, call, put, select } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../../redux/initial_data_for_app/FetchActions";
import { ApiType } from "../../redux/initial_data_for_app/FetchApiType";

export default function* GetInitialDataForApp(getApi) {
  try {
    const alias = yield select(state => state.FetchReducer.sectionAlias);
    if (!alias) {
      return;
    }

    const featuredPostsUrl = "/service/api/v2/forums/" + alias + "/featuredPosts";
    const relatedPostsUrl = "/service/api/v2/search/forums/" + alias;

    const [SectionFeaturedPosts, SectionRelatedPosts] = yield all([
      call(getApi, featuredPostsUrl),
      call(getApi, relatedPostsUrl),
    ])
    
    yield all([
      put(FetchSuccess(ApiType.Featured, SectionFeaturedPosts)),
      put(FetchSuccess(ApiType.Related, SectionRelatedPosts)),
    ])
  } catch (e) {
    yield all([
      put(FetchFailure(ApiType.Featured, e.message)),
      put(FetchFailure(ApiType.Related, e.message)),
    ])
  }
}