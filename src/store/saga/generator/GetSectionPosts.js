import { all, call, put, select } from "redux-saga/effects";
import {
  FetchSuccess,
  FetchFailure,
} from "../../redux/initial_data_for_app/FetchActions";
import { ApiType } from "../../../types/FetchApiType";
import { SectionPostsType } from "../../../types";

export default function* GetSectionPosts(getApi) {
  try {
    const alias = yield select((state) => state.FetchReducer.sectionAlias);
    if (!alias) {
      return;
    }

    const IndexPopularPostsUrl = "/popularPosts?_limit=30";
    const IndexLatestPostsUrl = "/posts?_limit=30";
    const GamezoneRelatedPostsUrl = "/service/api/v2/search/forums/gamezone";
    const GamezonePopularPostsUrl = "/gamezonePopularPosts?_limit=30";
    const featuredPostsUrl =
      "/service/api/v2/forums/" + alias + "/featuredPosts";
    const relatedPostsUrl = "/service/api/v2/search/forums/" + alias;
    const popularPostsUrl = "/" + alias + "PopularPosts?_limit=30";
    const latestPostsUrl = "/" + alias + "Posts?_limit=30";

    switch (alias) {
      case SectionPostsType.Index:
        const [
          IndexPopularPosts,
          IndexLatestPosts,
        ] = yield all([
          call(getApi, IndexPopularPostsUrl),
          call(getApi, IndexLatestPostsUrl),
        ]);
        yield all([
          put(FetchSuccess(ApiType.Popular, IndexPopularPosts)),
          put(FetchSuccess(ApiType.Latest, IndexLatestPosts)),
        ]);
        break;
      
      case SectionPostsType.Gamazone:
        const [GamezoneRelatedPosts, GamezonePopularPosts] = yield all([
          call(getApi, GamezoneRelatedPostsUrl),
          call(getApi, GamezonePopularPostsUrl),
        ]);
        yield all([
          put(FetchSuccess(ApiType.Related, GamezoneRelatedPosts)),
          put(FetchSuccess(ApiType.Popular, GamezonePopularPosts)),
        ]);
        break;
      
      default:
        const [
          SectionFeaturedPosts,
          SectionRelatedPosts,
          SectionPopularPosts,
          SectionLatestPosts,
        ] = yield all([
          call(getApi, featuredPostsUrl),
          call(getApi, relatedPostsUrl),
          call(getApi, popularPostsUrl),
          call(getApi, latestPostsUrl),
        ]);
        yield all([
          put(FetchSuccess(ApiType.Featured, SectionFeaturedPosts)),
          put(FetchSuccess(ApiType.Related, SectionRelatedPosts)),
          put(FetchSuccess(ApiType.Popular, SectionPopularPosts)),
          put(FetchSuccess(ApiType.Latest, SectionLatestPosts)),
        ]);
    }
  } catch (e) {
    yield all([
      put(FetchFailure(ApiType.Featured, e.message)),
      put(FetchFailure(ApiType.Related, e.message)),
      put(FetchFailure(ApiType.Popular, e.message)),
      put(FetchFailure(ApiType.Latest, e.message)),
    ]);
  }
}
