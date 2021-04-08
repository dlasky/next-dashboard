import * as React from "react";

function SvgWiStormWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path d="M9.76 24.6V7.45h1.13V24.6H9.76zm1.94-10.55v-6.6h8.55v6.6H11.7zm2.36-2h3.81v-2.5h-3.81v2.5z" />
    </svg>
  );
}

export default SvgWiStormWarning;