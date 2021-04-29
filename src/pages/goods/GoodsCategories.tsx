import { Wrapper } from "../style/goods/GoodsCategories";
import { GoodsTitle, GoodsLabel } from "../../components/content/goods";

function GoodsCategories() {
  return (
    <Wrapper>
      <GoodsTitle catalogTitle="商品分類" />
      <div className="goods-category-label-container">
        <img
          src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png"
          width="32"
          height="32"
        />
        <h2>質感生活</h2>
      </div>
      <div className="goods-label-wrapper">
        <GoodsLabel />
      </div>
      <div className="goods-category-label-container">
        <img
          src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png"
          width="32"
          height="32"
        />
        <h2>美妝保養</h2>
      </div>
      <div className="goods-label-wrapper">
        <GoodsLabel />
      </div>
      <div className="goods-category-label-container">
        <img
          src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png"
          width="32"
          height="32"
        />
        <h2>風格穿搭</h2>
      </div>
      <div className="goods-label-wrapper">
        <GoodsLabel />
      </div>
      <div className="goods-category-label-container">
        <img
          src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png"
          width="32"
          height="32"
        />
        <h2>美食補給</h2>
      </div>
      <div className="goods-label-wrapper">
        <GoodsLabel />
      </div>
      <div className="goods-category-label-container">
        <img
          src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png"
          width="32"
          height="32"
        />
        <h2>3C家電</h2>
      </div>
      <div className="goods-label-wrapper">
        <GoodsLabel />
      </div>
      <div className="goods-category-label-container">
        <img
          src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png"
          width="32"
          height="32"
        />
        <h2>西斯玩具</h2>
      </div>
      <div className="goods-label-wrapper">
        <GoodsLabel />
      </div>
      <div className="goods-category-label-container">
        <img
          src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png"
          width="32"
          height="32"
        />
        <h2>男子生活</h2>
      </div>
      <div className="goods-label-wrapper">
        <GoodsLabel />
      </div>
    </Wrapper>
  );
}

export default GoodsCategories;
