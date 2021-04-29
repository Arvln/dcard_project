import { Wrapper } from "../style/goods/ClothStyleWrapper";
import {
  DirectionsSplitLine,
  GoodsRankNavBar,
  GoodsTitle,
  GoodsLabel,
  GoodsItemsList
} from "../../components/content/goods";
import { SeriesGoods } from "../../components/content/goods";

function ClothStyle() {
  return (
    <Wrapper>
      <GoodsTitle catalogTitle="風格穿搭" />
      <GoodsLabel />
      <SeriesGoods sectionTitle={"👕  UA系列服飾👕"} showSlideBarCount={2} />
      <DirectionsSplitLine />
      <GoodsRankNavBar />
      <GoodsItemsList />
    </Wrapper>
  );
}

export default ClothStyle;
