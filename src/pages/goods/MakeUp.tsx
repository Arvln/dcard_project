import { Wrapper } from "../style/goods/MakeUpWrapper";
import { DirectionsSplitLine, GoodsRankNavBar, GoodsTitle, ShowSlide, GoodsLabel, GoodsItemsList } from "../../components/content/goods";

function MakeUp() {
  return (
    <Wrapper>
      <GoodsTitle catalogTitle="美妝保養" />
      <ShowSlide showSlideBarCount={2} />
      <GoodsLabel />
      <DirectionsSplitLine />
      <GoodsRankNavBar />
      <GoodsItemsList />
    </Wrapper>
  )
}

export default MakeUp
