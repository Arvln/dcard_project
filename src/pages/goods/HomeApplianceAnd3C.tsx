import { Wrapper } from "../style/goods/HomeApplianceAnd3CWrapper";
import { DirectionsSplitLine, GoodsRankNavBar, GoodsTitle, ShowSlide, GoodsLabel, GoodsItemsList } from "../../components/content/goods";

function HomeApplianceAnd3C() {
  return (
    <Wrapper>
      <GoodsTitle catalogTitle="3C家電" />
      <ShowSlide showSlideBarCount={3} />
      <GoodsLabel />
      <DirectionsSplitLine />
      <GoodsRankNavBar />
      <GoodsItemsList />
    </Wrapper>
  )
}

export default HomeApplianceAnd3C

