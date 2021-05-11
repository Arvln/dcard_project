import { Wrapper } from "../style/GameZoneWrapper";
import { RelatedForums, ArticleItem } from "../../components/common";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSectionPostsRequest,
  SetSectionAlias,
} from "../../store/redux/section_posts/FetchSectionPostsActions";
import { ApiType, Gender, SectionPostsType } from "../../types";
import { NormalizedState } from "../../store/redux/initial_data_for_app/InitialDataState";
import { SectionPosts } from "../../model";

type InitialState = {
  loading: boolean;
  [ApiType.Related]: NormalizedState;
  [ApiType.Popular]: NormalizedState;
  error: string;
};

type GamezoneState = {
  FetchReducer: InitialState;
};

function GameZone() {
  const gamezoneState = useSelector((state: GamezoneState) => ({
    loading: state.FetchReducer.loading,
    [ApiType.Related]: state.FetchReducer[ApiType.Related],
    [ApiType.Popular]: state.FetchReducer[ApiType.Popular],
    error: state.FetchReducer.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetSectionAlias(SectionPostsType.Gamazone));
    dispatch(FetchSectionPostsRequest());
  }, []);
  console.log(gamezoneState);

  return (
      <Wrapper>
        <div className="top-banner">
          <img
            src="https://megapx-assets.dcard.tw/images/910dc5dd-5b1a-4d14-a4f1-4852079fec41/1280.jpeg"
            alt="full.jpeg"
            width="100%"
          />
        </div>
        <RelatedForums gamezoneRelated={gamezoneState[ApiType.Related]} />
        <ul>
        {gamezoneState[ApiType.Popular] && gamezoneState[ApiType.Popular].result.map((articleId: string) => {
          const article: SectionPosts = gamezoneState[ApiType.Popular].entities[ApiType.Popular][articleId];
          return <ArticleItem {...article} gender={Gender[article.gender]} />
          })}
        </ul>
      </Wrapper>
  );
}

export default GameZone;
