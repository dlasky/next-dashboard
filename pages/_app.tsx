import { Global, css } from "@emotion/react";
import toBool from "../util/toBool";

const dark = toBool(process.env.NEXT_PUBLIC_DARK_MODE);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Gugi|Rajdhani:100,300,400,700");

          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background: ${dark ? "#000" : "#FFF"};
            overflow: hidden;
          }
        `}
      />
      ;
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
