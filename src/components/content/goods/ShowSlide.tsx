import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlideShowButton, { direction } from "./SlideShowButton";
import { Wrapper } from "../../style/goods/ShowSlideWrapper";
import SlideShowNavBar from "./SlideShowNavBar";

type Props = {
  showSlideBarCount: number
}

function ShowSlide({ showSlideBarCount }: Props) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [showSlideTransformXValue, setShowSlideTransformXValue] = useState(0);
  // 頁面頂部廣告輪播圖折返點
  const showSlideReturnPoint: number = (showSlideBarCount - 1) * -100;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    isMouseEnter ||
      (timer = setTimeout(() => {
        if (showSlideTransformXValue === showSlideReturnPoint) {
          setShowSlideTransformXValue(0);
        } else {
          setShowSlideTransformXValue(showSlideTransformXValue - 100);
        }
      }, 2500));
    // 用戶點擊按鈕後清除計時器
    return () => clearTimeout(timer);
  }, [showSlideTransformXValue, isMouseEnter]);

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
      <div
        className="slideshow-container"
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
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
              src="https://megapx-assets.dcard.tw/images/6806452e-7835-48ed-913a-86f94e5e60f9/orig.jpeg"
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
              src="https://megapx-assets.dcard.tw/images/62076f82-7f10-48c8-9a62-6dc6e6e90a33/orig.jpeg"
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
          onClick={() => clickLeftArrowIcon(showSlideTransformXValue)}
          style={{ opacity: showSlideTransformXValue === 0 ? 0 : 1 }}
        >
          <SlideShowButton direction={direction.left} />
        </div>
        <div
          onClick={() =>
            clickRightArrowIcon(showSlideTransformXValue, showSlideReturnPoint)
          }
          style={{
            opacity: showSlideTransformXValue === showSlideReturnPoint ? 0 : 1,
          }}
        >
          <SlideShowButton direction={direction.right} />
        </div>
        <div className="top-banner-navbar-wrapper">
          <SlideShowNavBar
            bannerCount={showSlideBarCount}
            transformXValue={showSlideTransformXValue}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default ShowSlide;
