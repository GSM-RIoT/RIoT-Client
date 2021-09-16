import * as React from "react";

function Package(props) {
  return (
    <svg viewBox="0 0 64 64" width="15vh" height="15vh" {...props}>
      <path d="M58.878 13.521l-5.432-9.958A3 3 0 0050.812 2H13.188a3 3 0 00-2.634 1.563l-5.432 9.958A1 1 0 005 14v45a3 3 0 003 3h48a3 3 0 003-3V14a1 1 0 00-.122-.479zM25 21H7v-6h18zm2-6h10v15.132l-4.445-2.964a1 1 0 00-1.11 0L27 30.132zm12 0h18v6H39zm18 27.159l-.614-.937a1 1 0 00-1.439-.25l-3.116 2.355-2.144-3.275a1 1 0 00-1.44-.25l-3.115 2.353L43 38.884a1 1 0 00-.974-.446l-1.07.148 1.15-1.086 3.676 2.11a1 1 0 001.4-.429l1.712-3.518 3.391 1.947a1 1 0 001.4-.431l1.7-3.515 1.615.925zM12.31 4.521A1 1 0 0113.188 4h37.624a1 1 0 01.878.521L56.316 13H7.684zM56 60H8a1 1 0 01-1-1V23h18v9a1 1 0 001.555.832L32 29.2l5.445 3.63A1 1 0 0039 32v-9h18v9.283l-1.552-.89a1 1 0 00-1.4.431l-1.7 3.515-3.39-1.946a1 1 0 00-1.4.429l-1.709 3.518-3.391-1.947a1 1 0 00-1.185.14l-3.96 3.74a1 1 0 00.823 1.718l3.532-.484 2.374 3.639a1 1 0 001.441.251l3.117-2.355 2.144 3.275a1 1 0 001.439.25l3.117-2.355 1.7 2.6V59a1 1 0 01-1 1z" />
    </svg>
  );
}

const MemoPackage = React.memo(Package);
export default MemoPackage;
