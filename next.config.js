const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["picsum.photos", "cdn-icons-png.flaticon.com"],
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
                        svgoConfig: {
                            plugins: [
                                {
                                    name: "removeViewBox",
                                    active: false,
                                },
                            ],
                        },
                        memo: true,
                        // svgProps: {
                        //     width: "24px",
                        //     height: "24px",
                        // },
                    },
                },
                "url-loader",
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
