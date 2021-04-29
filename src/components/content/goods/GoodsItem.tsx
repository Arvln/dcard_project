import { Link } from "react-router-dom";
import { Wrapper } from "../../style/goods/GoodsItemWrapper";

function GoodsItem() {
  return (
    <Wrapper>
      <Link to="#">
        <div className="goods-item-img">
          <img src="https://megapx-assets.dcard.tw/images/cce983f7-b208-4972-b867-2f0727eb20a7/orig.png" loading="lazy" />
        </div>
        <div className="fair-label">免運費</div>
        <div className="goods-item-info">
          <div className="goods-item-title">
            <span className="goods-item-slogan">1362 位風格男女</span>
            <h3>西班牙Xhekpon｜膠原蛋白頸紋霜</h3>
            {/* <div className="buy-more-discount">多件優惠</div> */}
            <div className="goods-discount">限時93折起</div>
          </div>
          <span className="goods-item-price">$429 - $1,287</span>
        </div>
      </Link>
    </Wrapper>
  )
}

export default GoodsItem
