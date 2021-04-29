import { Wrapper } from "../style/goods/FoodsWrapper";
import { DirectionsSplitLine, GoodsRankNavBar, GoodsTitle, ShowSlide, GoodsLabel, GoodsItemsList, SeriesGoods } from "../../components/content/goods";

function Foods() {
  return (
    <Wrapper>
      <GoodsTitle catalogTitle="美食補給" />
      <ShowSlide showSlideBarCount={2} />
      <GoodsLabel />
      <SeriesGoods sectionTitle={"🌲最齊全的植物奶選擇🌲"} showSlideBarCount={2} />
      <DirectionsSplitLine />
      <SeriesGoods sectionTitle={"🍬下午茶好捧油🍪"} showSlideBarCount={2} />
      <DirectionsSplitLine />
      <GoodsRankNavBar />
      <GoodsItemsList />
    </Wrapper>
  )
}

export default Foods
