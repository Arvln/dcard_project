import { all, call, put, select } from "redux-saga/effects";
import {
  FetchSuccess,
  FetchFailure,
} from "../../redux/initial_data_for_app/FetchActions";
import { ApiType } from "../../../types/FetchApiType";
import { ApiParamsType, PostType, SectionPostsType } from "../../../types";

export default function* GetSectionPosts(GetApi) {
  try {
    const alias = yield select((state) => state.FetchReducer.sectionAlias);
    const postsStart = yield select(
      (state) => state.FetchReducer[ApiParamsType.SectionPostsStart]
    );
    const navbarClassName = yield select(
      (state) => state.FetchReducer.navbarClassName
    );
    const postId = yield select((state) => state.FetchReducer.postId);
    if (!alias) {
      return;
    }

    const IndexPopularPostsUrl =
      "/popularPosts?_start=" + postsStart + "&_limit=30";
    const IndexLatestPostsUrl =
      "/latestPosts?_start=" + postsStart + "&_limit=30";
    const GamezoneRelatedPostsUrl = "/service/api/v2/search/forums/gamezone";
    const GamezonePopularPostsUrl =
      "/gamezonePopularPosts?_start=" + postsStart + "&_limit=30";
    const featuredPostsUrl =
      "/service/api/v2/forums/" + alias + "/featuredPosts";
    const relatedPostsUrl = "/service/api/v2/search/forums/" + alias;
    const popularPostsUrl =
      "/" + alias + "PopularPosts?_start=" + postsStart + "&_limit=30";
    const latestPostsUrl =
      "/" + alias + "Posts?_start=" + postsStart + "&_limit=30";
    const postUrl =
      "/" +
      (alias === SectionPostsType.Index ? "" : alias) +
      (alias === SectionPostsType.Index
        ? navbarClassName.toLowerCase()
        : navbarClassName === PostType.Latest
        ? ""
        : navbarClassName) +
      "Posts/" +
      postId;

    if (postId && postId !== "reset") {
      const post = yield call(GetApi, postUrl);
      yield put(FetchSuccess(ApiType.Post, post));
    } else {
      yield put(FetchSuccess(ApiType.Post, undefined));
    }

    switch (alias) {
      case SectionPostsType.Index:
        const [IndexPopularPosts, IndexLatestPosts] = yield all([
          call(GetApi, IndexPopularPostsUrl),
          call(GetApi, IndexLatestPostsUrl),
        ]);
        yield all([
          put(FetchSuccess(ApiType.Popular, IndexPopularPosts)),
          put(FetchSuccess(ApiType.Latest, IndexLatestPosts)),
        ]);
        break;

      case SectionPostsType.Gamazone:
        const [GamezoneRelatedPosts, GamezonePopularPosts] = yield all([
          call(GetApi, GamezoneRelatedPostsUrl),
          call(GetApi, GamezonePopularPostsUrl),
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
          call(GetApi, featuredPostsUrl),
          call(GetApi, relatedPostsUrl),
          call(GetApi, popularPostsUrl),
          call(GetApi, latestPostsUrl),
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
