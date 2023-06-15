/* eslint-disable */
// @ts-nocheck
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
                <title>M Apart | Апартаменты в центре Петербурга</title>
                <meta name="theme-color" content="#e9e1c9" />
                <link href="/favicon-apart.svg" rel="icon" type="image/svg+xml" />
                <script
                    dangerouslySetInnerHTML={{
                        __html:
                            "(function(m,e,t,r,i,k,a){\n" +
                            "m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n" +
                            "m[i].l=1*new Date();\n" +
                            "for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n" +
                            "k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n" +
                            '(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n' +
                            "\n" +
                            'ym(93975202, "init", {\n' +
                            "   clickmap:true,\n" +
                            "   trackLinks:true,\n" +
                            "   accurateTrackBounce:true,\n" +
                            "   webvisor:true\n" +
                            "})",
                    }}
                />
                <script type="text/javascript">{}</script>
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/93975202"
                            style={{ position: "absolute", left: "-9999px" }}
                            alt=""
                        />
                    </div>
                </noscript>
            </Head>
            <Provider store={result.store}>
                <Component {...rest.pageProps} />
            </Provider>
        </>
    );
}

export default wrapper.withRedux(MyApp);
