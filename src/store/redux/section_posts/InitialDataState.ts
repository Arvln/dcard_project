import { ApiParamsType } from "../../../types";
import { ApiType } from "../../../types/FetchApiType";
import { NormalizedState } from "../initial_data_for_app/InitialDataState";

export type InitialDataForEachSectionState = {
  loading: boolean,
  [ApiType.Featured]: NormalizedState,
  [ApiType.Related]: NormalizedState,
  [ApiType.Popular]: NormalizedState,
  [ApiType.Latest]: NormalizedState,
  [ApiParamsType.SectionPostsStart]: number,
  error: string
}

export const initialDataForEachSectionState: InitialDataForEachSectionState = {} as InitialDataForEachSectionState;
initialDataForEachSectionState.loading = false;
initialDataForEachSectionState.error = "";