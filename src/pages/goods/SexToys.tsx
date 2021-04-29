import { Wrapper } from "../style/goods/SexToysWrapper";
import { DirectionsSplitLine, GoodsRankNavBar, GoodsTitle, ShowSlide, GoodsLabel, GoodsItemsList } from "../../components/content/goods";

function SexToys() {
  return (
    <Wrapper>
      <GoodsTitle catalogTitle="西斯玩具" />
      <ShowSlide showSlideBarCount={4} />
      <GoodsLabel />
      <DirectionsSplitLine />
      <GoodsRankNavBar />
      <GoodsItemsList />
    </Wrapper>
  )
}

export default SexToys
