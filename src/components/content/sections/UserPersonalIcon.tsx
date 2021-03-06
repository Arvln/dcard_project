import { Gender } from "../../../types";

type Props = {
  gender: Gender
}

function UserPersonalIcon({ gender }: Props) {
  switch (gender) {
    case Gender.D:
      return (
        <svg
          viewBox="0 0 100 100"
          focusable="false"
          width="16"
          height="16"
          fill="rgb(0, 106, 166)"
        >
          <title>官方</title>
          <path d="M100 50A50 50 0 110 50a50 50 0 01100 0"></path>
          <g fill="#FFF">
            <path d="M61 43.7a4.9 4.9 0 00-5 5c0 2.6 2.3 4.8 5 4.8s4.9-2.2 4.9-4.9-2.2-4.9-5-4.9"></path>
            <path d="M69.7 55.8l-.1 1.8a3.9 3.9 0 01-3.2.6c-1.6-.5-3.1-1.4-4.3-2.5l-4.1 4c2.5 2.5 5.7 4.2 9.4 4.7-3 5.3-8.8 9-15.3 9H34.5V49.5a44 44 0 0029.4-17.2c1.5 1 2.8 2.2 3.7 3.5 1.3 2.5 2 5.3 2 8.3v11.6zM52 20.8H28.6v58.4h23.5c13 0 23.4-10.5 23.4-23.4V44.2a23.4 23.4 0 00-23.4-23.4z"></path>
          </g>
          <path fill="none" d="M20.8 20.8h58.3v58.3H20.8z"></path>
        </svg>
      );

    case Gender.M:
      return (
        <svg viewBox="0 0 40 40" focusable="false" width="16" height="16">
          <title>男</title>
          <path fill="#81D4FA" d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"></path>
          <path
            fill="#2490BF"
            d="M16 7.9C12.4 7.4 9.3 6 9.3 6s5.5 4.3 5 5.3c-.4 1-4.2 0-4.2 0l4 2a9.7 9.7 0 00-1.5 4.6l.1 3.4a1.5 1.5 0 10.8 2.9 8.3 8.3 0 006.2 5.3c.6 0 .6 2 .6 3.2-1.6 1-2.5 3-2 5v2.2a20.2 20.2 0 009.9-1.6l-.7-2.7v-.4l-.2-.4-.2-.4-.2-.3-.2-.3c-.7-1-1.7-1.6-2.9-1.8l.6-2.3s1.4-1 3-2.6l.4 1.3 1.4-2.5.9-1.8s3.8-10.3.8-13.9c-2.6-3-11-1.9-14.7-2.3"
          ></path>
        </svg>
      );

    case Gender.F:
      return (
        <svg viewBox="0 0 40 40" focusable="false" width="16" height="16">
          <title>"女"</title>
          <path fill="#F48FB1" d="M40 20a20 20 0 11-40 0 20 20 0 0140 0"></path>
          <path
            fill="#CB3A6B"
            d="M28.7 17.5a9.6 9.6 0 00-1.4-4.4l.9-.6S25.5 6 17.9 7.3c-5.5 1-7.7 5.4-7.4 9C10.8 19.8 8.3 31 8.3 31l6.7 1.7a4.6 4.6 0 00-.7 1.1v.1a4.2 4.2 0 00-.4.8l-1.3 3.8a20 20 0 0010.6 1.1L23 37c.4-2-.4-4-2-5 0-1.1 0-3 .5-3.1 3-.6 5.1-2.5 6.2-5.3.3.2.6.2 1 .2a1.5 1.5 0 00-.2-3c.1-1 .2-2.2 0-3.3z"
          ></path>
        </svg>
      );
  }
}

export default UserPersonalIcon;
