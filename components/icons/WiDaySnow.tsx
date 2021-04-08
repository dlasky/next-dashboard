import * as React from "react";

function SvgWiDaySnow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path d="M1.58 16.93c0 .86.21 1.67.64 2.41.42.74 1 1.34 1.74 1.79.73.45 1.54.69 2.4.71.11 0 .17-.06.17-.17v-1.33c0-.12-.06-.19-.17-.19-.85-.04-1.58-.38-2.18-1.02s-.9-1.37-.9-2.21c0-.82.28-1.54.85-2.16.57-.61 1.26-.97 2.1-1.07l.53-.06c.12 0 .18-.06.18-.19l.08-.51c.11-1.09.56-2 1.36-2.73s1.75-1.09 2.85-1.09c1.09 0 2.04.36 2.85 1.09.82.73 1.28 1.63 1.38 2.7l.07.58c0 .11.06.17.17.17h1.61c.9 0 1.67.32 2.31.96.64.64.96 1.4.96 2.29 0 .84-.3 1.57-.9 2.21-.6.63-1.33.97-2.17 1.02-.12 0-.19.06-.19.19v1.33c0 .11.06.17.19.17 1.33-.04 2.45-.54 3.38-1.5.93-.96 1.39-2.09 1.39-3.41 0-.76-.14-1.43-.43-2.03.75-.93 1.15-2.03 1.15-3.28 0-.94-.23-1.81-.7-2.61-.47-.8-1.11-1.44-1.91-1.91s-1.68-.7-2.62-.7c-1.54 0-2.83.58-3.87 1.73-.81-.44-1.71-.66-2.69-.66-1.41 0-2.65.44-3.74 1.31s-1.78 1.99-2.09 3.34c-1.12.28-2.03.86-2.74 1.75-.71.9-1.06 1.92-1.06 3.08zm6.34 4.05c0 .24.08.44.24.61.16.17.35.25.59.25.23 0 .43-.08.59-.25.16-.17.24-.37.24-.61 0-.23-.08-.42-.24-.58s-.35-.24-.59-.24c-.23 0-.43.08-.59.24s-.24.36-.24.58zm0 3.63c0 .21.08.4.24.57.18.16.37.24.58.24.24 0 .43-.08.59-.23.16-.16.23-.35.23-.58 0-.24-.08-.43-.24-.59a.784.784 0 00-.59-.23.84.84 0 00-.59.23c-.14.15-.22.35-.22.59zM9.97 4.68c0 .24.08.44.24.59l.66.66c.16.16.34.25.53.25.21.03.41-.04.61-.22s.3-.39.3-.63-.08-.46-.24-.64l-.64-.61a.73.73 0 00-.58-.25c-.25 0-.46.08-.63.25-.17.16-.25.36-.25.6zM11.1 22.9c0 .22.08.42.24.6.16.16.36.24.58.24.24 0 .44-.08.6-.24s.25-.36.25-.6c0-.23-.08-.43-.25-.6s-.37-.25-.6-.25c-.23 0-.42.08-.58.25s-.24.37-.24.6zm0-3.6c0 .23.08.42.24.58s.36.24.58.24c.24 0 .44-.08.6-.24.17-.16.25-.35.25-.59 0-.23-.08-.43-.25-.59s-.37-.24-.6-.24c-.23 0-.42.08-.58.24s-.24.37-.24.6zm0 7.26c0 .22.08.41.24.57.17.17.36.25.58.25.24 0 .44-.08.6-.23.17-.16.25-.35.25-.59s-.08-.44-.25-.6a.816.816 0 00-.6-.25c-.22 0-.41.08-.58.25-.16.17-.24.37-.24.6zm3.22-5.58c0 .24.08.44.24.61.16.17.36.25.59.25s.43-.08.59-.25c.16-.17.24-.37.24-.61 0-.23-.08-.42-.24-.58s-.35-.24-.59-.24-.43.08-.59.24-.24.36-.24.58zm0 3.63c0 .21.08.4.23.57.18.16.38.24.6.24.24 0 .43-.08.59-.23.16-.16.23-.35.23-.58 0-.24-.08-.43-.24-.59a.784.784 0 00-.59-.23c-.24 0-.44.08-.6.24-.14.15-.22.35-.22.58zm.98-15.55c.69-.66 1.51-.99 2.47-.99.97 0 1.8.35 2.48 1.04.69.69 1.03 1.53 1.03 2.49 0 .62-.17 1.24-.51 1.84-.95-.96-2.11-1.44-3.47-1.44h-.32c-.3-1.17-.86-2.15-1.68-2.94zm1.6-5.22c0 .23.08.43.25.58s.37.23.61.23.43-.08.59-.23c.16-.16.23-.35.23-.58V1.8c0-.24-.08-.44-.24-.61S18 .94 17.77.94s-.43.09-.6.26c-.17.17-.26.37-.26.6v2.04zm5.52 2.27c0 .23.08.43.25.59.15.16.34.24.56.26s.43-.07.62-.26l1.43-1.43c.18-.18.26-.38.26-.61 0-.24-.09-.44-.26-.61a.816.816 0 00-.6-.25c-.22 0-.41.08-.58.25l-1.43 1.46c-.17.16-.25.36-.25.6zm.8 11.8c0 .25.08.46.24.62l.64.63c.24.16.46.24.64.24.21 0 .39-.09.56-.26.17-.17.25-.38.25-.61 0-.23-.09-.42-.26-.58l-.62-.65c-.18-.16-.38-.24-.61-.24s-.43.08-.59.25c-.17.16-.25.36-.25.6zm1.45-6.31c0 .24.09.43.26.59.17.18.38.27.62.27h2.02c.23 0 .43-.08.6-.25s.25-.37.25-.61-.08-.44-.25-.6-.37-.25-.6-.25h-2.02c-.24 0-.44.08-.62.25s-.26.37-.26.6z" />
    </svg>
  );
}

export default SvgWiDaySnow;
