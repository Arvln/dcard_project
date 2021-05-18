import { Wrapper } from "../../style/goods/SlideShowNavBarWrapper";

type Props = {
  bannerCount: number;
  transformXValue: number;
};

function SlideShowNavBar({ bannerCount, transformXValue }: Props) {
  const classNameForEachDivElement: string[] = [];

  function generateClassNameForEachDivElement() {
    for (let i = 0; i < bannerCount; i++) {
      if (i === transformXValue / -100) {
        classNameForEachDivElement.push("selected");
      } else {
        classNameForEachDivElement.push("");
      }
    }
    return classNameForEachDivElement;
  }

  return (
    <Wrapper>
      {generateClassNameForEachDivElement().map((className, index) => {
        return <div className={className} key={index}></div>;
      })}
    </Wrapper>
  );
}

export default SlideShowNavBar;
