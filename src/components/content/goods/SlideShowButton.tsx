import { Wrapper } from "../../style/goods/SlideShowbuttonWrapper";


export enum direction {
  left = "left",
  right = "right"
}

type Props = {
  direction: direction
}

function SlideShowButton({ direction }: Props) {
  return (
    <Wrapper type="button" direction={direction}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" focusable="false" role="img" aria-hidden="true"><path d="M10.35 8.65l.79-.79a.5.5 0 01.71 0l5.79 5.79a.5.5 0 010 .71l-5.79 5.79a.5.5 0 01-.71 0l-.79-.79a.5.5 0 010-.71L15 14l-4.65-4.65a.5.5 0 010-.7z"></path></svg>
    </Wrapper>
  )
}

export default SlideShowButton
