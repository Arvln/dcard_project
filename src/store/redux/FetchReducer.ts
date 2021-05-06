import * as actions from "./FetchActionsType";
import { FetchActions } from "./FetchActions";

export type State = {
  loading: boolean,
  data: any[],
  error: string
}

export const initialFetchState: State = {
  loading: false,
  data: [],
  error: ""
}

const FetchReducer = function (state = initialFetchState, action: FetchActions) {
  switch (action.type) {
    case actions.FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payloads
      }
    
    case actions.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payloads
      }
    default:
      return initialFetchState
  }
}

export default FetchReducer