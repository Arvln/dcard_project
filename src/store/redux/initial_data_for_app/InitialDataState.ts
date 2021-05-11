import { ApiType } from "../../../types/FetchApiType";

export type NormalizedState = {
  result: string[],
  entities: any
}

export type InitialDataForAppState = {
  loading: boolean,
  [ApiType.Forums]: NormalizedState,
  [ApiType.Categorization]: NormalizedState,
  [ApiType.Categories]: NormalizedState,
  [ApiType.Selections]: NormalizedState,
  [ApiType.Bulletin]: NormalizedState,
  error: string
}

export const initialDataForAppState: InitialDataForAppState = {} as InitialDataForAppState;
initialDataForAppState.loading = false;
initialDataForAppState.error = "";