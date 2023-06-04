import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

import { wrapper } from "@/store";

import "@/styles/global.scss";
import "@/styles/fonts.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import "@/styles/libs/react-responcive-carousel/react-responcive-carousel.scss";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import "@fancyapps/ui/dist/carousel/carousel.css";

function MyApp({ Component, ...rest }: AppProps) {
    const result = wrapper.useWrappedStore(rest);

    return (
        <>
            <Head>
                <title>M-Apart | Апартаменты в центре Петербурга</title>
                <meta name="theme-color" content="#e9e1c9" />
            </Head>
            <Provider store={result.store}>
                <Component {...rest.pageProps} />
            </Provider>
        </>
    );
}

export default wrapper.withRedux(MyApp);
