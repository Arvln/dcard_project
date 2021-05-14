import { all, call, put, select } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../../redux/initial_data_for_app/FetchActions";
import { ApiType } from "../../../types/FetchApiType";
import { forumsUrl, categorizationUrl, categoriesUrl, selectionsUrl, bulletinUrl } from "../InitialDataForAppApi";

export default function* GetInitialDataForApp(GetApi) {
  try {
    const [forums, categorization, categories, selections, bulletin] = yield all([
      call(GetApi, forumsUrl),
      call(GetApi, categorizationUrl),
      call(GetApi, categoriesUrl),
      call(GetApi, selectionsUrl),
      call(GetApi, bulletinUrl),
    ])

    yield all([
      put(FetchSuccess(ApiType.Forums, forums)),
      put(FetchSuccess(ApiType.Categorization, categorization)),
      put(FetchSuccess(ApiType.Categories, categories)),
      put(FetchSuccess(ApiType.Selections, selections)),
      put(FetchSuccess(ApiType.Bulletin, bulletin)),
    ])
  } catch (e) {
    yield all([
      put(FetchFailure(ApiType.Forums, e.message)),
      put(FetchFailure(ApiType.Categorization, e.message)),
      put(FetchFailure(ApiType.Categories, e.message)),
      put(FetchFailure(ApiType.Selections, e.message)),
      put(FetchFailure(ApiType.Bulletin, e.message)),
    ])
  }
}