import { Wrapper } from "../style/GameZoneWrapper";
import { RelatedForums, ArticleItem } from "../../components/common";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSectionPostsRequest,
  SetSectionAlias,
  SetSectionPostsStart,
} from "../../store/redux/section_posts/FetchSectionPostsActions";
import { ApiParamsType, ApiType, Gender, SectionPostsType } from "../../types";
import { NormalizedState } from "../../store/redux/initial_data_for_app/InitialDataState";
import { SectionPosts } from "../../model";
import { useRouteMatch } from "react-router-dom";
import { CombineTwoArray } from "../../utils";

type InitialState = {
  loading: boolean;
  [ApiType.Related]: NormalizedState;
  [ApiType.Popular]: NormalizedState;
  [ApiParamsType.SectionPostsStart]: number;
  error: string;
};

type GamezoneState = {
  FetchReducer: InitialState;
};

function GameZone() {
  const { path } = useRouteMatch();
  const gamezoneState: InitialState = useSelector((state: GamezoneState) => ({
    loading: state.FetchReducer.loading,
    [ApiType.Related]: state.FetchReducer[ApiType.Related],
    [ApiType.Popular]: state.FetchReducer[ApiType.Popular],
    [ApiParamsType.SectionPostsStart]:
      state.FetchReducer[ApiParamsType.SectionPostsStart],
    error: state.FetchReducer.error,
  }));
  const [popularPostsList, setPopularPostsList] = useState<SectionPosts[]>(
    [] as SectionPosts[]
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetSectionAlias(SectionPostsType.Gamazone));
    dispatch(SetSectionPostsStart(0));
    gamezoneState[ApiType.Popular] && dispatch(
      FetchSectionPostsRequest(gamezoneState[ApiParamsType.SectionPostsStart])
    );
  }, [path])

  useEffect(() => {
    function getPostsList(postsType: ApiType.Popular) {
      if (!gamezoneState[postsType]) {
        return;
      }
      let newPostsList: SectionPosts[] = [] as SectionPosts[];
      gamezoneState[postsType].result.map((articleId: string) => {
        newPostsList.push(
          gamezoneState[postsType].entities[postsType][articleId]
        );
      });
      if (gamezoneState[ApiParamsType.SectionPostsStart] !== 0) {
        postsType === ApiType.Popular &&
          setPopularPostsList(CombineTwoArray(popularPostsList, newPostsList));
      } else {
        setPopularPostsList(newPostsList);
      }
    }
    getPostsList(ApiType.Popular);
  }, [gamezoneState[ApiType.Popular]]);

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
        {popularPostsList.map((article: SectionPosts) => (
          <ArticleItem
            {...article}
            gender={Gender[article.gender]}
            key={article.id}
          />
        ))}
      </ul>
    </Wrapper>
  );
}

export default GameZone;
