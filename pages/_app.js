import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// use this for authentication.
// https://dev.to/justincy/detecting-a-user-s-authenticated-state-client-side-in-next-js-using-an-httponly-cookie-and-static-optimization-6ib
