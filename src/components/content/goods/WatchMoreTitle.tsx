import { Link } from "react-router-dom";
import { Wrapper } from "../../style/goods/WatchMoreTitleWrapper";

type Props = {
  imageUrl?: string;
  sectionTitle: string;
};

function WatchMoreTitle({ imageUrl, sectionTitle }: Props) {
  return (
    <Wrapper>
      {imageUrl && <img src={imageUrl} width="20" height="20" />}
      <h4>{sectionTitle}</h4>
      <Link to="#">
        <span>查看更多</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="18"
          height="18"
          fill="rgba(0, 0, 0, .5)"
          focusable="false"
          role="img"
          aria-hidden="true"
        >
          <path d="M10.35 8.65l.79-.79a.5.5 0 01.71 0l5.79 5.79a.5.5 0 010 .71l-5.79 5.79a.5.5 0 01-.71 0l-.79-.79a.5.5 0 010-.71L15 14l-4.65-4.65a.5.5 0 010-.7z"></path>
        </svg>
      </Link>
    </Wrapper>
  );
}

export default WatchMoreTitle;
