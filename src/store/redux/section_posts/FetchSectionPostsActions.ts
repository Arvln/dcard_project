import { FetchActions } from "../initial_data_for_app/FetchActions";
import { FetchSectionPostsActionsType, GetFetchSectionPostsRequests } from "../../../types/FetchSectionPostsActionsType";
import { FetchActionsType } from "../initial_data_for_app/FetchActionsType";

export type SetSectionAliasActions = {
  type: string,
  payloads: {
    alias: string
  }
}

export function SetSectionAlias(alias: string): SetSectionAliasActions {
  return {
    type: FetchSectionPostsActionsType.SET_SECTION_ALIAS,
    payloads: {
      alias
    }
  }
}

export function FetchSectionPostsRequest(start: number): FetchActions {
  return {
    type: GetFetchSectionPostsRequests(start),
    payloads: {
      prefix: start.toString()
    }
  }
}

export function SetSectionPostsStart(start: number) {
  return {
    type: FetchSectionPostsActionsType.SET_SECTION_POSTS_START,
    payloads: {
      start
    }
  }
}

export function FetchPostRequest(): FetchActions {
  return { type: FetchActionsType.FETCH_POST_REQUEST }
}

export function SetNavbarClassName(navbarClassName: string) {
  return {
    type: FetchSectionPostsActionsType.SET_NAVBAR_CLASS_NAME,
    payloads: {
      navbarClassName
    }
  }
}

export function SetPostId(postId: string) {
  return {
    type: FetchSectionPostsActionsType.SET_POST_ID,
    payloads: {
      postId
    }
  }
}
