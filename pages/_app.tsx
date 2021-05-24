import Head from "next/head";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Weather App</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌤️</text></svg>"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
