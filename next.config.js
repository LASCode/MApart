const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["picsum.photos", "cdn-icons-png.flaticon.com", "disk.yandex.ru", "downloader.disk.yandex.ru"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        prependData: `@import "@/styles/breakpoints.scss"; @import "@/styles/mixins.scss";`,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        prettier: false,
                        svgo: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: { removeViewBox: false },
                                    },
                                },
                            ],
                        },
                        titleProp: true,
                    },
                },
                "url-loader",
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
