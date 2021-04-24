import { Wrapper } from "../style/GameZoneWrapper";
import { RelatedForums, ArticleItem } from "../../components/common"

function GameZone() {
  return (
    <Wrapper>
      <div className="top-banner">
        <img src="https://megapx-assets.dcard.tw/images/910dc5dd-5b1a-4d14-a4f1-4852079fec41/1280.jpeg" alt="full.jpeg" width="100%" />
      </div>
      <RelatedForums />
      <ul>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </ul>
    </Wrapper>
  )
}

export default GameZone
