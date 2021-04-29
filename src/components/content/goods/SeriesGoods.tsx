import { useState } from "react";
import { Wrapper } from "../../style/goods/SeriesGoodsWrapper";
import { WatchMoreTitle, GoodsItem, SlideShowButton } from ".";
import { direction } from "../goods/SlideShowButton";

type Props = {
  sectionTitle: string;
  showSlideBarCount: number
};

function SeriesGoods({ sectionTitle, showSlideBarCount }: Props) {
  const [showSlideTransformXValue, setShowSlideTransformXValue] = useState(0);
  // 頁面頂部廣告輪播圖折返點
  const showSlideReturnPoint: number = (showSlideBarCount - 1) * -100;

  function clickRightArrowIcon(
    transformXValue: number,
    showSlideReturnPoint: number
  ): void {
    if (transformXValue === showSlideReturnPoint) {
      return;
    }
    transformXValue -= 100;
    setShowSlideTransformXValue(transformXValue);
  }

  function clickLeftArrowIcon(transformXValue: number): void {
    if (transformXValue === 0) {
      return;
    }
    transformXValue += 100;
    setShowSlideTransformXValue(transformXValue);
  }

  return (
    <Wrapper showSlideTransformXValue={showSlideTransformXValue}>
      <div className="series-goods-title">
        <WatchMoreTitle sectionTitle={sectionTitle} />
      </div>
      <div className="series-goods-content-wrapper">
        <div className="series-goods-content-container">
          <div className="series-goods-content">
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
          </div>
          <div className="series-goods-content">
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
          </div>
          <div className="series-goods-content">
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
          </div>
        </div>
        <div
          onClick={() =>
            clickLeftArrowIcon(showSlideTransformXValue)
          }
          style={{ opacity: showSlideTransformXValue === 0 ? 0 : 1 }}
        >
          <SlideShowButton direction={direction.left} />
        </div>
        <div
          onClick={() =>
            clickRightArrowIcon(showSlideTransformXValue, showSlideReturnPoint)
          }
          style={{ opacity: showSlideTransformXValue === showSlideReturnPoint ? 0 : 1 }}
        >
          <SlideShowButton direction={direction.right} />
        </div>
      </div>
    </Wrapper>
  );
}

export default SeriesGoods;
