import Theme from "../styles/Theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <Theme>
      <Component {...pageProps} />;
    </Theme>
  );
}

export default MyApp;
