import * as React from "react";

function SvgWiHurricaneWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path d="M7.8 24.6V7.45h1.13V24.6H7.8zm1.93-3.08v-6.6h8.55v6.6H9.73zm0-7.47v-6.6h8.55v6.6H9.73zm2.36 5.47h3.81v-2.51h-3.81v2.51zm0-7.47h3.81v-2.5h-3.81v2.5z" />
    </svg>
  );
}

export default SvgWiHurricaneWarning;
