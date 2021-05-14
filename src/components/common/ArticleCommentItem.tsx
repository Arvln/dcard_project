import { Wrapper } from "../style/ArticleCommentItemWrapper";

type Props = {
  id: string,
  count: number
}

function ArticleCommentItem({id, count}: Props) {
  const commentContent: string =
    "先說 老夫老妻不是這樣的模式😂\n感覺他沒有很用心在這段關係中\n似乎只有你在努力經營\n忙不是藉口 再忙也是有時間好好相處的\n如果溝通無誤的話 你就好好考慮一下吧";
  return (
    <Wrapper>
      <div className="comment-title-wrapper">
        <svg viewBox="0 0 40 40" focusable="false" width="32" height="32" style={{paddingRight: "8px"}}>
          <title>女</title>
          <path fill="#F48FB1" d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"></path>
          <path
            fill="#CB3A6B"
            d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
          ></path>
        </svg>
        <div className="comment-info-wrapper">
          <div className="comment-author-name">天蠍男寵愛的獅子女👸</div>
          <div className="comment-info">
            <div className="comment-floor">B1</div>
            <div className="comment-edit-date">4月29日 00:27</div>
          </div>
        </div>
        <label className="comment-like-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            focusable="false"
            role="img"
            aria-hidden="true"
          >
            <path
              d="M16.5 4A5.49 5.49 0 0012 6.344 5.49 5.49 0 007.5 4 5.5 5.5 0 002 9.5C2 16 12 22 12 22s10-6 10-12.5A5.5 5.5 0 0016.5 4z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span>729</span>
        </label>
      </div>
      <div className="comment-content">
        <p>{commentContent}</p>
      </div>
    </Wrapper>
  );
}

export default ArticleCommentItem;
