import * as actions from "./FetchActionsType";

export type FetchActions = {
  type: string,
  payloads?: any
}

export function FetchRequest(): FetchActions {
  return { type: actions.FETCH_REQUEST }
}

export function FetchSuccess(data: any[]): FetchActions {
  return {
    type: actions.FETCH_SUCCESS,
    payloads: data
  }
}

export function FetchFailure(error: any): FetchActions {
  return {
    type: actions.FETCH_FAILURE,
    payloads: error
  }
}