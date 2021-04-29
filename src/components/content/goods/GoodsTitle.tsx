import { Wrapper } from "../../style/goods/GoodsTitleWrapper";

type Props = {
  catalogTitle: string;
};

function GoodsTitle({ catalogTitle }: Props) {
  return (
    <Wrapper>
      <div className="goods-title-container">
        <h1>{catalogTitle}</h1>
      </div>
    </Wrapper>
  );
}

export default GoodsTitle;
