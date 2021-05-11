import { FetchActions } from "../initial_data_for_app/FetchActions";
import { FetchSectionPostsActionsType } from "../../../types/FetchSectionPostsActionsType";

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

export function FetchSectionPostsRequest(): FetchActions {
  return { type: FetchSectionPostsActionsType.FETCH_SECTION_POSTS_REQUEST }
}
