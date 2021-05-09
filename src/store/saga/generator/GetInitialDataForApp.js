import { all, call, put, select } from "redux-saga/effects";
import { SortForumsByLast30DaysPostCount } from "../../../utils";
import { FetchSuccess, FetchFailure } from "../../redux/FetchActions";
import { forumsUrl, categorizationUrl, categoriesUrl, selectionsUrl, bulletinUrl } from "../FetchApi";

export default function* GetInitialDataForApp(getApi) {
  try {
    const [forums, categorization, categories, selections, bulletin] = yield all([
      call(getApi, forumsUrl),
      call(getApi, categorizationUrl),
      call(getApi, categoriesUrl),
      call(getApi, selectionsUrl),
      call(getApi, bulletinUrl),
    ])

    yield all([
      put(FetchSuccess("Forums", forums)),
      put(FetchSuccess("Categorization", categorization)),
      put(FetchSuccess("Categories", categories)),
      put(FetchSuccess("Selections", selections)),
      put(FetchSuccess("Bulletin", bulletin)),
    ])
  } catch (e) {
    yield all([
      put(FetchFailure("Forums", e.message)),
      put(FetchFailure("Categorization", e.message)),
      put(FetchFailure("Categories", e.message)),
      put(FetchFailure("Selections", e.message)),
      put(FetchFailure("Bulletin", e.message)),
    ])
  }
}