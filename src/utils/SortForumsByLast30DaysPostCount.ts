import { SortForumsType } from "../pages/sections/ForumPopular";
import { NormalizedState } from "../store/redux/initial_data_for_app/InitialDataState";
import { QuickSort } from ".";
import { ApiType } from "../store/redux/initial_data_for_app/FetchApiType";

export function SortForumsByLast30DaysPostCount(
  allForums: NormalizedState,
  forumsCount: number
): SortForumsType[] | void {
  if (!allForums) {
    return;
  }
  const forumsList = allForums.entities[ApiType.Forums];
  const beforeSortForums: SortForumsType[] = [];
  allForums.result.map((forumId: string) => {
    const forumItem = {} as SortForumsType;
    const collegeForumTest: RegExp = /[大學, 大, 學校, 學院, 大学]$/;
    forumItem.forumId = forumsList[forumId].id;
    forumItem.alias = forumsList[forumId].alias;
    forumItem.name = forumsList[forumId].name;
    forumItem.logo = forumsList[forumId].logo;
    forumItem.last30DaysPostCount = forumsList[forumId].postCount.last30Days;
    collegeForumTest.test(forumItem.name) || beforeSortForums.push(forumItem);
  });
  const afterSortForums: SortForumsType[] = QuickSort(
    beforeSortForums,
    0,
    beforeSortForums.length - 1
  );
  const popularForums: SortForumsType[] = afterSortForums.slice(0, forumsCount);
  popularForums.splice(0, 1);
  return popularForums;
}
