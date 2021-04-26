import { Link } from "react-router-dom";
import { Wrapper } from "../style/GoodsWrapper";
import goodsLogo from "../../assets/images/goods-icon.png";
import { DirectionsSplitLine, GoodsRankNavBar } from "../../components/content/goods"

function Goods() {
  return (
    <Wrapper>
      <div className="goods-title-wrapper">
        <div className="goods-title-container">
          <div className="goods-logo-wrapper">
            <img src={goodsLogo} alt="logo" width="34" height="34" />
          </div>
          <h1>好物研究室</h1>
          <div className="goods-order-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="24" height="24" fill="rgba(0, 0, 0, 0.5)" role="img" aria-hidden="true"><path d="M17.975 3h-12a1.991 1.991 0 00-2 1.982v16.177a.84.84 0 00.462.749.854.854 0 00.883-.068l.949-.682a1.63 1.63 0 011.89-.009l.033.023a2.428 2.428 0 002.8 0l.045-.032a1.631 1.631 0 011.879 0l.046.032a2.428 2.428 0 002.8 0l.032-.023a1.632 1.632 0 011.89.009l.949.682a.852.852 0 00.882.068.84.84 0 00.46-.749V4.981a1.99 1.99 0 00-2-1.981zm-1 14h-9a1 1 0 010-2h9a1 1 0 010 2zm0-4h-9a1 1 0 010-2h9a1 1 0 010 2zm0-4h-5a1 1 0 110-2h5a1 1 0 110 2z"></path></svg>
            <span>訂單</span>
          </div>
        </div>
      </div>
      <div className="slideshow">
        <img src="https://megapx-assets.dcard.tw/images/8407070a-6166-44b0-ab0c-5e261267a095/orig.png" loading="lazy" width="100%" />
      </div>
      <div className="goods-category-nav">
        <div className="goods-category-nav-item">
          <Link to="/goods/catalog/91f75636-55a8-4776-b06a-34608adbf01c">
            <img src="https://megapx-assets.dcard.tw/images/970e3912-be4c-4373-a554-9cc0d091da7a/orig.png" />
            <div>質感生活</div>
          </Link>
        </div>
        <div className="goods-category-nav-item">
          <Link to="/goods/catalog/f3e40f36-7f91-49af-a507-552ce90aefbc">
            <img src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png" />
            <div>美妝保養</div>
          </Link>
        </div>
        <div className="goods-category-nav-item">
          <Link to="/goods/catalog/f226a596-cbb9-4ca4-90fa-23056cb336a9">
            <img src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png" />
            <div>風格穿搭</div>
          </Link>
        </div>
        <div className="goods-category-nav-item">
          <Link to="/goods/catalog/c82a839e-7169-4568-8513-fe2444ac8d6">
            <img src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png" />
            <div>美食補給</div>
          </Link>
        </div>
        <div className="goods-category-nav-item">
          <Link to="/goods/catalog/86048137-d4fe-4ef3-b1bb-6913cc0f7676">
            <img src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png" />
            <div>3C家電</div>
          </Link>
        </div>
        <div className="goods-category-nav-item">
          <Link to="/goods/catalog/44a154ba-abb5-4c7b-bfe1-fc3688f362a0">
            <img src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png" />
            <div>西斯玩具</div>
          </Link>
        </div>
        <div className="goods-category-nav-item">
          <Link to="/goods/categories">
            <img src="https://megapx-assets.dcard.tw/images/9fdeda53-08a7-4476-9574-a8b4eab3321b/orig.png" />
            <div>分類</div>
          </Link>
        </div>
      </div>
      <div className="special-goods-wrapper">

      </div>
      <div className="goods-popular-rank-wrapper"></div>
      <DirectionsSplitLine />
      <div className="featured-goods"></div>
      <DirectionsSplitLine />
      <GoodsRankNavBar />
      <div className="goods-content">
        
      </div>
    </Wrapper>
  )
}

export default Goods
