import * as React from "react";

function Delete(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M12.59 0L7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41 12.59 0z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoDelete = React.memo(Delete);
export default MemoDelete;
