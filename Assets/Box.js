import * as React from "react";

function Box(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 230 230" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)" fill="#000">
        <path d="M220.283 50.608L116.143.334a3.363 3.363 0 00-2.922 0L9.081 50.608a3.36 3.36 0 00-1.899 3.026v122.095a3.36 3.36 0 001.899 3.026l104.14 50.274a3.355 3.355 0 002.922 0l104.14-50.274a3.36 3.36 0 001.899-3.026V53.634c0-1.29-.739-2.465-1.899-3.026zM114.682 7.091l96.412 46.543-27.948 13.492a3.348 3.348 0 00-.569-.358L86.82 20.54l27.862-13.45zM79.232 24.34l96.272 46.476-19.718 9.519-96.232-46.457 19.678-9.538zm98.524 52.85v35.186l-18.417 8.891V86.081l18.417-8.892zm37.706 96.431l-97.42 47.029V106.017l23.237-11.218a3.36 3.36 0 10-2.921-6.051l-23.676 11.43-9.316-4.498a3.36 3.36 0 10-2.922 6.051l8.878 4.286V220.65l-97.42-47.03V58.987L88.086 94.8a3.36 3.36 0 102.921-6.051L18.27 53.634 51.646 37.52l100.926 48.723.047.06v40.317a3.362 3.362 0 004.821 3.025l25.137-12.135a3.359 3.359 0 001.899-3.025v-40.54l30.986-14.959v114.634z" />
        <path d="M41.629 160.59l-15.283-7.378a3.36 3.36 0 10-2.922 6.051l15.283 7.378a3.358 3.358 0 004.486-1.565 3.359 3.359 0 00-1.564-4.486zM55.694 151.435l-29.327-14.158a3.36 3.36 0 10-2.921 6.051l29.326 14.158a3.36 3.36 0 102.921-6.051z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h229.364v229.364H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoBox = React.memo(Box);
export default MemoBox;