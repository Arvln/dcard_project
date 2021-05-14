export enum FetchSectionPostsActionsType {
  SET_SECTION_ALIAS = "SET_SECTION_ALIAS",
  FETCH_SECTION_POSTS_REQUEST = "FETCH_SECTION_POSTS_REQUEST",
  SET_SECTION_POSTS_START = "SET_SECTION_POSTS_START",
  SET_NAVBAR_CLASS_NAME = "SET_NAVBAR_CLASS_NAME",
  SET_POST_ID = "SET_POST_ID",
}

export function GetFetchSectionPostsRequests(start: number) {
  return FetchSectionPostsActionsType.FETCH_SECTION_POSTS_REQUEST + "_START_FROM_" + start;
}