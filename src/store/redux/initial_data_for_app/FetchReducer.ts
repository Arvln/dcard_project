import { FetchActionsType } from "./FetchActionsType";
import { FetchActions } from "./FetchActions";
import { normalizedData } from "../../../utils";
import { InitialDataForAppState, initialDataForAppState } from "./InitialDataState";
import { FetchSectionPostsActionsType, GetFetchSectionPostsRequests } from "../../../types/FetchSectionPostsActionsType";
import { ApiParamsType, ApiType } from "../../../types";

const getNewState = (state: any, action: FetchActions, ApiType: string) => ({
  ...state,
  loading: false,
  [ApiType]: normalizedData(action.payloads?.data, ApiType)
})

const FetchReducer = function (state: InitialDataForAppState = initialDataForAppState , action: FetchActions) {
  switch (action.type) {
    case FetchActionsType.FETCH_INITIAL_DATA_FOR_APP_REQUEST || FetchActionsType.FETCH_POST_REQUEST || GetFetchSectionPostsRequests(parseInt(action.payloads?.prefix || "0")):
      return {
        ...state,
        loading: true
      }
    
    case FetchActionsType.FETCH_SUCCESS:
      if (!action.payloads) {
        return state;
      }
      if (action.payloads.prefix === ApiType.Post) {
        return {
          ...state,
          loading: false,
          [ApiType.Post]: action.payloads.data
        }
      }
      return getNewState(state, action, action.payloads.prefix)
    
    case FetchActionsType.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payloads?.prefix + "error message: " + action.payloads?.error
      }
    
    // section posts saga need this to build url be called
    case FetchSectionPostsActionsType.SET_SECTION_ALIAS:
      return {
        ...state,
        sectionAlias: action.payloads?.alias
      }
    
    // when user scroll the page, section posts saga need this to build the next url be called
    case FetchSectionPostsActionsType.SET_SECTION_POSTS_START:
      return {
        ...state,
        [ApiParamsType.SectionPostsStart]: action.payloads?.start
      }
    
    // when user ask for article content, section posts saga need this to build url be called
    case FetchSectionPostsActionsType.SET_NAVBAR_CLASS_NAME:
      return {
        ...state,
        navbarClassName: action.payloads?.navbarClassName
      }

    case FetchSectionPostsActionsType.SET_POST_ID:
      return {
        ...state,
        postId: action.payloads?.postId
      }
    
    default:
      return state;
  }
}

export default FetchReducer