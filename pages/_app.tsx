import { Global, css } from "@emotion/react";

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
            background: black;
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
