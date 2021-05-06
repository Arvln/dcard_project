import * as actions from "./FetchActionsType";

export type FetchActions = {
  type: string,
  payloads?: {
    prefix: string,
    data?: any[]
    error?: string
  }
}

export function FetchRequest(): FetchActions {
  return { type: actions.FETCH_REQUEST }
}

export function FetchSuccess(prefix: string, data: any[]): FetchActions {
  return {
    type: actions.FETCH_SUCCESS,
    payloads: {
      prefix,
      data
    }
  }
}

export function FetchFailure(prefix:string, error: any): FetchActions {
  return {
    type: actions.FETCH_FAILURE,
    payloads: {
      prefix,
      error
    }
  }
}