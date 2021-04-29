import { Wrapper } from "../style/goods/QualityLifeWrapper";
import { DirectionsSplitLine, GoodsRankNavBar, GoodsTitle, ShowSlide, GoodsLabel, GoodsItemsList } from "../../components/content/goods";

function QualityLife() {
  return (
    <Wrapper>
      <GoodsTitle catalogTitle={"質感生活"} />
      <ShowSlide showSlideBarCount={2} />
      <GoodsLabel />
      <DirectionsSplitLine />
      <GoodsRankNavBar />
      <GoodsItemsList />
    </Wrapper>
  )
}

export default QualityLife
