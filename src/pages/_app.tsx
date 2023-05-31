import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { wrapper } from "@/store";

import "@/styles/global.scss";
import "@/styles/fonts.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import "@/styles/libs/react-responcive-carousel/react-responcive-carousel.scss";

function MyApp({ Component, ...rest }: AppProps) {
    const result = wrapper.useWrappedStore(rest);

    return (
        <Provider store={result.store}>
            <Component {...rest.pageProps} />
        </Provider>
    );
}

export default wrapper.withRedux(MyApp);
