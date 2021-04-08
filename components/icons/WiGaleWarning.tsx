import * as React from "react";

function SvgWiGaleWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path d="M10.67 24.6V7.45h1.03V24.6h-1.03zm1.73-2.16v-7.41l8.65 3.69-8.65 3.72zm0-7.58V7.45l8.65 3.69-8.65 3.72z" />
    </svg>
  );
}

export default SvgWiGaleWarning;
