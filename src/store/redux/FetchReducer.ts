import * as actions from "./FetchActionsType";
import { FetchActions } from "./FetchActions";
import { ApiType } from "./FetchApiType";
import { Forum, Categorization } from "../../model";
import { normalizedData } from "../../utils";

export type NormalizedState = {
  result: string[],
  entities: any
}

export type InitialState = {
  loading: boolean,
  forums: NormalizedState,
  categorization: NormalizedState,
  categories: NormalizedState,
  error: string
}

export const initialFetchState: InitialState = {
  loading: false,
  forums: {
    "result": [],
    "entities": {}
  },
  categorization: {
    "result": [],
    "entities": {}
  },
  categories: {
    "result": [],
    "entities": {}
  },
  error: ""
}

const getNewState = (state: InitialState, action: FetchActions, ApiType: string) => ({
  ...state,
  loading: false,
  [ApiType.toLowerCase()]: normalizedData(action.payloads?.data, ApiType)
})

const FetchReducer = function (state = initialFetchState, action: FetchActions) {
  switch (action.type) {
    case actions.FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case actions.FETCH_SUCCESS:
      if (!action.payloads) {
        return state;
      }
      return getNewState(state, action, action.payloads.prefix)
    
    case actions.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payloads?.prefix + "error message: " + action.payloads?.error
      }
    default:
      return initialFetchState
  }
}

export default FetchReducer