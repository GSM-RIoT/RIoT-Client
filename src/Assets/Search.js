import * as React from "react";

function Search(props) {
  return (
    <svg width="3vh" height="3vh" viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M25.32 27.68l-9.526-9.527A10 10 0 012.93 2.93a10 10 0 0115.224 12.863l9.525 9.527-2.357 2.357-.002.001zM10 3.333a6.667 6.667 0 104.861 2.107l1.008 1-1.136-1.133-.02-.02a6.62 6.62 0 00-4.714-1.954z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
