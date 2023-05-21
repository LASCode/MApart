import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { wrapper } from "@/store";

import "@/styles/global.css";
import "@/styles/fonts.css";

function MyApp({ Component, ...rest }: AppProps) {
  const result = wrapper.useWrappedStore(rest);

  return (
    <Provider store={result.store}>
      <Component {...rest.pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
