import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../style/GoodsWrapper";
import goodsLogo from "../../assets/images/goods-icon.png";
import {
  SlideShowNavBar,
  DirectionsSplitLine,
  GoodsRankNavBar,
  GoodsItem,
  SlideShowButton,
  WatchMoreTitle,
} from "../../components/content/goods";

import { direction } from "../../components/content/goods/SlideShowButton";
import { dir } from "console";

function Goods() {
  let [firstBannerTransfromXValue, setFirstBannerTransfromXValue] = useState(0);
  let [latestGoodsTransformXValue, setLatestGoodsTransformXValue] = useState(0);
  let [featureGoodsTransfromXValue, setFeatureGoodsTransfromXValue] = useState(
    0
  );

  function clickRightArrowIcon(transfromXValue: number, goodsType: string) {
    if (
      (goodsType === "LatestGoods" && transfromXValue === -200) ||
      transfromXValue === -300
    ) {
      return;
    }
    transfromXValue -= 100;
    goodsType === "FirstBanner" &&
      setFirstBannerTransfromXValue(transfromXValue);
    goodsType === "LatestGoods" &&
      setLatestGoodsTransformXValue(transfromXValue);
    goodsType === "FeatureGoods" &&
      setFeatureGoodsTransfromXValue(transfromXValue);
  }

  function clickLeftArrowIcon(transfromXValue: number, goodsType: string) {
    if (transfromXValue === 0) {
      return;
    }
    transfromXValue += 100;
    goodsType === "FirstBanner" &&
      setFirstBannerTransfromXValue(transfromXValue);
    goodsType === "LatestGoods" &&
      setLatestGoodsTransformXValue(transfromXValue);
    goodsType === "FeatureGoods" &&
      setFeatureGoodsTransfromXValue(transfromXValue);
  }

  return (
    <Wrapper
      firstBannerTransfromXValue={firstBannerTransfromXValue}
      featureGoodsTransfromXValue={featureGoodsTransfromXValue}
      latestGoodsTransformXValue={latestGoodsTransformXValue}
    >
      <div className="goods-title-wrapper">
        <div className="goods-title-container">
          <div className="goods-logo-wrapper">
            <img src={goodsLogo} alt="logo" width="34" height="34" />
          </div>
          <h1>好物研究室</h1>
          <Link to="#" className="goods-order-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              width="24"
              height="24"
              fill="rgba(0, 0, 0, 0.5)"
              role="img"
              aria-hidden="true"
            >
              <path d="M17.975 3h-12a1.991 1.991 0 00-2 1.982v16.177a.84.84 0 00.462.749.854.854 0 00.883-.068l.949-.682a1.63 1.63 0 011.89-.009l.033.023a2.428 2.428 0 002.8 0l.045-.032a1.631 1.631 0 011.879 0l.046.032a2.428 2.428 0 002.8 0l.032-.023a1.632 1.632 0 011.89.009l.949.682a.852.852 0 00.882.068.84.84 0 00.46-.749V4.981a1.99 1.99 0 00-2-1.981zm-1 14h-9a1 1 0 010-2h9a1 1 0 010 2zm0-4h-9a1 1 0 010-2h9a1 1 0 010 2zm0-4h-5a1 1 0 110-2h5a1 1 0 110 2z"></path>
            </svg>
            <span>訂單</span>
          </Link>
        </div>
      </div>
      <div className="slideshow-wrapper">
        <div className="slideshow-container">
          <div className="slideshow-img">
            <Link to="#">
              <img
                src="https://megapx-assets.dcard.tw/images/8407070a-6166-44b0-ab0c-5e261267a095/orig.png"
                loading="lazy"
                width="100%"
              />
            </Link>
            <Link to="#">
              <img
                src="https://megapx-assets.dcard.tw/images/deb9a0f3-eb50-45f6-b49b-ee8a8871e4b0/orig.png"
                loading="lazy"
                width="100%"
              />
            </Link>
            <Link to="#">
              <img
                src="https://megapx-assets.dcard.tw/images/7d021441-8926-4d19-bc22-16d2dee6bfff/orig.jpeg"
                loading="lazy"
                width="100%"
              />
            </Link>
            <Link to="#">
              <img
                src="https://megapx-assets.dcard.tw/images/f01d74b6-a0f5-486a-ab8f-bef8dcbeaaca/orig.jpeg"
                loading="lazy"
                width="100%"
              />
            </Link>
          </div>
          <div
            onClick={() =>
              clickLeftArrowIcon(firstBannerTransfromXValue, "FirstBanner")
            }
            style={{ opacity: firstBannerTransfromXValue === 0 ? 0 : 1 }}
          >
            <SlideShowButton direction={direction.left} top={139} />
          </div>
          <div
            onClick={() =>
              clickRightArrowIcon(firstBannerTransfromXValue, "FirstBanner")
            }
            style={{ opacity: firstBannerTransfromXValue === -300 ? 0 : 1 }}
          >
            <SlideShowButton direction={direction.right} top={139} />
          </div>
          <div className="first-banner-navbar-wrapper">
            <SlideShowNavBar
              bannerCount={4}
              transformXValue={firstBannerTransfromXValue}
            />
          </div>
        </div>
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
        <div className="time-limited-wrapper">
          <div className="time-limited-title">
            <h2>限時特賣</h2>
            <div className="time-limited-count">
              <div>03</div>
              <div>:</div>
              <div>12</div>
              <div>:</div>
              <div>42</div>
            </div>
          </div>
          <div className="time-limited-goods-container">
            <div className="time-limited-goods-img">
              <img src="https://megapx-assets.dcard.tw/images/5c929f25-7fa7-4ebe-bc6e-16ea948b281c/orig.jpeg" />
              <div className="time-limited-goods-sold-out">
                <div className="goods-sold-out-tips">
                  <h1 style={{ fontSize: "26px", fontWeight: 400 }}>已售完</h1>
                  <h2 style={{ fontSize: "14px", fontWeight: 400 }}>
                    Sold out
                  </h2>
                </div>
              </div>
            </div>
            <div className="time-limited-goods-title">
              <h3>葉黃素系列｜jojome 悄悄美123</h3>
            </div>
            <span className="time-limited-price">$299</span>
            <span className="origin-price">$799</span>
            <p>全通路 24H 最低價！</p>
          </div>
        </div>
        <div className="latest-goods-wrapper">
          <WatchMoreTitle sectionTitle={"最新上架"} />
          <div className="latest-goods-container-wrapper">
            <div className="latest-goods-container">
              <div className="latest-goods-item">
                <Link to="#">
                  <div className="latest-goods-item-img">
                    <img
                      src="https://megapx-assets.dcard.tw/images/cce983f7-b208-4972-b867-2f0727eb20a7/orig.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="latest-goods-item-info">
                    <div className="latest-goods-item-info-title">
                      <h3>西班牙Xhekpon｜膠原蛋白頸紋霜</h3>
                    </div>
                    <span>$4,29 - $12,87</span>
                  </div>
                </Link>
                <Link to="#">
                  <div className="latest-goods-item-img">
                    <img
                      src="https://megapx-assets.dcard.tw/images/cce983f7-b208-4972-b867-2f0727eb20a7/orig.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="latest-goods-item-info">
                    <div className="latest-goods-item-info-title">
                      <h3>西班牙Xhekpon｜膠原蛋白頸紋霜</h3>
                    </div>
                    <span>$4,29 - $12,87</span>
                  </div>
                </Link>
              </div>
              <div className="latest-goods-item">
                <Link to="#">
                  <div className="latest-goods-item-img">
                    <img
                      src="https://megapx-assets.dcard.tw/images/cce983f7-b208-4972-b867-2f0727eb20a7/orig.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="latest-goods-item-info">
                    <div className="latest-goods-item-info-title">
                      <h3>西班牙Xhekpon｜膠原蛋白頸紋霜</h3>
                    </div>
                    <span>$4,29 - $12,87</span>
                  </div>
                </Link>
                <Link to="#">
                  <div className="latest-goods-item-img">
                    <img
                      src="https://megapx-assets.dcard.tw/images/cce983f7-b208-4972-b867-2f0727eb20a7/orig.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="latest-goods-item-info">
                    <div className="latest-goods-item-info-title">
                      <h3>西班牙Xhekpon｜膠原蛋白頸紋霜</h3>
                    </div>
                    <span>$4,29 - $12,87</span>
                  </div>
                </Link>
              </div>
              <div className="latest-goods-item">
                <Link to="#">
                  <div className="latest-goods-item-img">
                    <img
                      src="https://megapx-assets.dcard.tw/images/cce983f7-b208-4972-b867-2f0727eb20a7/orig.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="latest-goods-item-info">
                    <div className="latest-goods-item-info-title">
                      <h3>西班牙Xhekpon｜膠原蛋白頸紋霜</h3>
                    </div>
                    <span>$4,29 - $12,87</span>
                  </div>
                </Link>
                <Link to="#">
                  <div className="latest-goods-item-img">
                    <img
                      src="https://megapx-assets.dcard.tw/images/cce983f7-b208-4972-b867-2f0727eb20a7/orig.png"
                      loading="lazy"
                    />
                  </div>
                  <div className="latest-goods-item-info">
                    <div className="latest-goods-item-info-title">
                      <h3>西班牙Xhekpon｜膠原蛋白頸紋霜</h3>
                    </div>
                    <span>$4,29 - $12,87</span>
                  </div>
                </Link>
              </div>
            </div>
            <div
              onClick={() =>
                clickLeftArrowIcon(latestGoodsTransformXValue, "LatestGoods")
              }
              style={{ opacity: latestGoodsTransformXValue === 0 ? 0 : 1 }}
            >
              <SlideShowButton direction={direction.left} top={122} />
            </div>
            <div
              onClick={() =>
                clickRightArrowIcon(latestGoodsTransformXValue, "LatestGoods")
              }
              style={{ opacity: latestGoodsTransformXValue === -200 ? 0 : 1 }}
            >
              <SlideShowButton direction={direction.right} top={122} />
            </div>
          </div>
          <div className="latest-goods-slideshow-navbar-wrapper">
            <SlideShowNavBar
              bannerCount={3}
              transformXValue={latestGoodsTransformXValue}
            />
          </div>
        </div>
      </div>
      <div className="goods-popular-rank-wrapper">
        <WatchMoreTitle
          imageUrl={
            "https://megapx.dcard.tw/v1/images/5f432c05-523b-4510-bd11-31401fd0c72d/encode/full"
          }
          sectionTitle={"熱銷排行"}
        />
        <div className="goods-popular-rank-container">
          <div className="goods-popular-rank-item">
            <Link to="#">
              <div className="goods-popular-rank-item-img">
                <img src="https://assets.dcard.tw/dadas-remote-entities/5e9fce009b12477c6b1571a9.jpeg" />
              </div>
              <p>1585人散發女人味</p>
            </Link>
          </div>
          <div className="goods-popular-rank-item">
            <Link to="#">
              <div className="goods-popular-rank-item-img">
                <img src="https://assets.dcard.tw/dadas-remote-entities/5e9fce009b12477c6b1571a9.jpeg" />
              </div>
              <p>1585人散發女人味</p>
            </Link>
          </div>
          <div className="goods-popular-rank-item">
            <Link to="#">
              <div className="goods-popular-rank-item-img">
                <img src="https://assets.dcard.tw/dadas-remote-entities/5e9fce009b12477c6b1571a9.jpeg" />
              </div>
              <p>1585人散發女人味</p>
            </Link>
          </div>
          <div className="goods-popular-rank-item">
            <Link to="#">
              <div className="goods-popular-rank-item-img">
                <img src="https://assets.dcard.tw/dadas-remote-entities/5e9fce009b12477c6b1571a9.jpeg" />
              </div>
              <p>1585人散發女人味</p>
            </Link>
          </div>
        </div>
      </div>
      <DirectionsSplitLine />
      <div className="featured-goods">
        <div className="feature-goods-title">
          <img src="https://megapx.dcard.tw/v1/images/39ea13db-2dbd-4b70-82bf-a8b8b77bc31a/encode/full" />
          <h4>研究員嚴選</h4>
          <h5>實現想要的生活！</h5>
          <p>{featureGoodsTransfromXValue / -100 + 1}/4</p>
        </div>
        <div className="feature-goods-content-wrapper">
          <div className="feature-goods-content-container">
            <div className="feature-goods-content">
              <Link to="#">
                <div className="feature-goods-item">
                  <img
                    src="https://assets.dcard.tw/dadas-remote-entities/5e81791036b4fe8f3698d078.jpeg"
                    className="first-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3f5159ec-0f7d-4edd-86c1-85c9f5e47e6f/orig.jpeg"
                    className="second-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3b04115a-8a7f-44d8-bd06-ca7a13f67665/orig.png"
                    className="third-img"
                  />
                </div>
                <h6>我要變水水-超值99體驗🎁</h6>
                <span>3030人免費體驗</span>
              </Link>
              <Link to="#">
                <div className="feature-goods-item">
                  <img
                    src="https://assets.dcard.tw/dadas-remote-entities/5e81791036b4fe8f3698d078.jpeg"
                    className="first-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3f5159ec-0f7d-4edd-86c1-85c9f5e47e6f/orig.jpeg"
                    className="second-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3b04115a-8a7f-44d8-bd06-ca7a13f67665/orig.png"
                    className="third-img"
                  />
                </div>
                <h6>我要變水水-超值99體驗🎁</h6>
                <span>3030人免費體驗</span>
              </Link>
            </div>
            <div className="feature-goods-content">
              <Link to="#">
                <div className="feature-goods-item">
                  <img
                    src="https://assets.dcard.tw/dadas-remote-entities/5e81791036b4fe8f3698d078.jpeg"
                    className="first-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3f5159ec-0f7d-4edd-86c1-85c9f5e47e6f/orig.jpeg"
                    className="second-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3b04115a-8a7f-44d8-bd06-ca7a13f67665/orig.png"
                    className="third-img"
                  />
                </div>
                <h6>我要變水水-超值99體驗🎁</h6>
                <span>3030人免費體驗</span>
              </Link>
              <Link to="#">
                <div className="feature-goods-item">
                  <img
                    src="https://assets.dcard.tw/dadas-remote-entities/5e81791036b4fe8f3698d078.jpeg"
                    className="first-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3f5159ec-0f7d-4edd-86c1-85c9f5e47e6f/orig.jpeg"
                    className="second-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3b04115a-8a7f-44d8-bd06-ca7a13f67665/orig.png"
                    className="third-img"
                  />
                </div>
                <h6>我要變水水-超值99體驗🎁</h6>
                <span>3030人免費體驗</span>
              </Link>
            </div>
            <div className="feature-goods-content">
              <Link to="#">
                <div className="feature-goods-item">
                  <img
                    src="https://assets.dcard.tw/dadas-remote-entities/5e81791036b4fe8f3698d078.jpeg"
                    className="first-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3f5159ec-0f7d-4edd-86c1-85c9f5e47e6f/orig.jpeg"
                    className="second-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3b04115a-8a7f-44d8-bd06-ca7a13f67665/orig.png"
                    className="third-img"
                  />
                </div>
                <h6>我要變水水-超值99體驗🎁</h6>
                <span>3030人免費體驗</span>
              </Link>
              <Link to="#">
                <div className="feature-goods-item">
                  <img
                    src="https://assets.dcard.tw/dadas-remote-entities/5e81791036b4fe8f3698d078.jpeg"
                    className="first-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3f5159ec-0f7d-4edd-86c1-85c9f5e47e6f/orig.jpeg"
                    className="second-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3b04115a-8a7f-44d8-bd06-ca7a13f67665/orig.png"
                    className="third-img"
                  />
                </div>
                <h6>我要變水水-超值99體驗🎁</h6>
                <span>3030人免費體驗</span>
              </Link>
            </div>
            <div className="feature-goods-content">
              <Link to="#">
                <div className="feature-goods-item">
                  <img
                    src="https://assets.dcard.tw/dadas-remote-entities/5e81791036b4fe8f3698d078.jpeg"
                    className="first-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3f5159ec-0f7d-4edd-86c1-85c9f5e47e6f/orig.jpeg"
                    className="second-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3b04115a-8a7f-44d8-bd06-ca7a13f67665/orig.png"
                    className="third-img"
                  />
                </div>
                <h6>我要變水水-超值99體驗🎁</h6>
                <span>3030人免費體驗</span>
              </Link>
              <Link to="#">
                <div className="feature-goods-item">
                  <img
                    src="https://assets.dcard.tw/dadas-remote-entities/5e81791036b4fe8f3698d078.jpeg"
                    className="first-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3f5159ec-0f7d-4edd-86c1-85c9f5e47e6f/orig.jpeg"
                    className="second-img"
                  />
                  <img
                    src="https://megapx-assets.dcard.tw/images/3b04115a-8a7f-44d8-bd06-ca7a13f67665/orig.png"
                    className="third-img"
                  />
                </div>
                <h6>我要變水水-超值99體驗🎁</h6>
                <span>3030人免費體驗</span>
              </Link>
            </div>
          </div>
          <div
            onClick={() =>
              clickLeftArrowIcon(featureGoodsTransfromXValue, "FeatureGoods")
            }
            style={{ opacity: featureGoodsTransfromXValue === 0 ? 0 : 1 }}
          >
            <SlideShowButton direction={direction.left} top={98} />
          </div>
          <div
            onClick={() =>
              clickRightArrowIcon(featureGoodsTransfromXValue, "FeatureGoods")
            }
            style={{ opacity: featureGoodsTransfromXValue === -300 ? 0 : 1 }}
          >
            <SlideShowButton direction={direction.right} top={98} />
          </div>
        </div>
      </div>
      <DirectionsSplitLine />
      <GoodsRankNavBar />
      <div className="goods-content-wrapper">
        <div className="goods-content-container">
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
        </div>
      </div>
    </Wrapper>
  );
}

export default Goods;
