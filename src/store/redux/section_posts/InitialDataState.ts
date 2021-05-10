import { ApiType } from "../initial_data_for_app/FetchApiType";
import { NormalizedState } from "../initial_data_for_app/InitialDataState";

export type InitialDataForEachSectionState = {
  loading: boolean,
  [ApiType.Featured]: NormalizedState,
  [ApiType.Related]: NormalizedState,
  error: string
}

export const initialDataForEachSectionState: InitialDataForEachSectionState = {} as InitialDataForEachSectionState;
initialDataForEachSectionState.loading = false;
initialDataForEachSectionState.error = "";