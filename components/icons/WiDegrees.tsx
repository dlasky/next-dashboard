import * as React from "react";

function SvgWiDegrees(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path d="M13.19 9.21c0-.5.18-.93.53-1.28.36-.36.78-.53 1.28-.53.49 0 .92.18 1.27.53.35.36.53.78.53 1.28s-.18.93-.53 1.29c-.35.36-.78.54-1.27.54s-.92-.18-1.28-.54-.53-.79-.53-1.29zm.88 0c0 .26.09.48.27.67.19.19.41.28.67.28.26 0 .48-.09.67-.28s.28-.41.28-.67a.87.87 0 00-.28-.66.947.947 0 00-.67-.28c-.26 0-.48.09-.67.27-.18.18-.27.4-.27.67z" />
    </svg>
  );
}

export default SvgWiDegrees;
