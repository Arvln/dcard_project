import { Link } from "react-router-dom";
import { Wrapper } from "../../style/goods/GoodsRankNavBar";

function GoodsRankNavBar() {
  return (
    <Wrapper>
      <div className="latest">
        <Link to="#" style={{color: "rgb(249, 115, 115)"}}>最近</Link>
      </div>
      <div className="hot-sales">
        <Link to="#">熱銷</Link>
      </div>
      <div className="price">
        <Link to="#">價格</Link>
        <svg viewBox="0 0 24 24" focusable="false" width="24" height="24" fill="rgba(0, 0, 0, 0.75)" role="img" aria-hidden="true"><path d="M6.48 7.84l4.8-3.6a1.2 1.2 0 011.44 0l4.8 3.6a1.2 1.2 0 11-1.44 1.92L12 6.7 7.92 9.76a1.2 1.2 0 01-1.44-1.92zm-.24 5.639a1.2 1.2 0 011.68-.239L12 16.3l4.079-3.06a1.2 1.2 0 111.44 1.92l-4.8 3.6a1.2 1.2 0 01-1.44 0l-4.8-3.6a1.2 1.2 0 01-.24-1.68z" stroke="transparent" stroke-miterlimit="10"></path></svg>
      </div>
    </Wrapper>
  )
}

export default GoodsRankNavBar
