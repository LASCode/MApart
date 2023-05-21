import '@/styles/global.css'
import '@/styles/fonts.css'
import type { AppProps } from 'next/app'
import {wrapper} from "@/store";
import {Provider} from "react-redux";

export default function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

//font-family: "CormorantInfant" sans-serif;
//     font-weight: 300;
//     font-size: 16px;
//     line-height: 19.38px;