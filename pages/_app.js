import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("sw", pageProps);
  return (
    <div>
      <h1>My website</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
