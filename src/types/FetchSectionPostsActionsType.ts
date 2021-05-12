export enum FetchSectionPostsActionsType {
  SET_SECTION_ALIAS = "SET_SECTION_ALIAS",
  FETCH_SECTION_POSTS_REQUEST = "FETCH_SECTION_POSTS_REQUEST",
  SET_SECTION_POSTS_START = "SET_SECTION_POSTS_START",  
}

export function GetFetchSectionPostsRequests(start: number) {
  return FetchSectionPostsActionsType.FETCH_SECTION_POSTS_REQUEST + "_START_FROM_" + start;
}