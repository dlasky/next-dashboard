import * as React from "react";

function SvgWiThermometerInternal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path d="M12.48 19.56c0 .71.24 1.32.73 1.82s1.07.75 1.76.75 1.28-.25 1.79-.75.76-1.11.76-1.81c0-.63-.22-1.19-.65-1.67-.43-.48-.96-.77-1.57-.85V9.69c0-.06-.03-.13-.1-.19a.299.299 0 00-.22-.1c-.09 0-.16.03-.21.08-.05.06-.08.12-.08.21v7.34c-.61.09-1.13.37-1.56.85-.44.49-.65 1.04-.65 1.68z" />
    </svg>
  );
}

export default SvgWiThermometerInternal;
