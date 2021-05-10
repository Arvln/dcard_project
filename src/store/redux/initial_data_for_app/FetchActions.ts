import { FetchActionsType } from "./FetchActionsType";

export type FetchActions = {
  type: string,
  payloads?: {
    prefix: string,
    data?: any[]
    error?: string,
    alias?: string
  }
}

export function FetchRequest(): FetchActions {
  return { type: FetchActionsType.FETCH_INITIAL_DATA_FOR_APP_REQUEST }
}

export function FetchSuccess(prefix: string, data: any[]): FetchActions {
  return {
    type: FetchActionsType.FETCH_SUCCESS,
    payloads: {
      prefix,
      data
    }
  }
}

export function FetchFailure(prefix:string, error: any): FetchActions {
  return {
    type: FetchActionsType.FETCH_FAILURE,
    payloads: {
      prefix,
      error
    }
  }
}