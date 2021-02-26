import { Configuration } from "webpack";
import * as path from "path";
import sass from "sass";
import fibers from "fibers";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const baseURL = process.env.BASE_URL = "/";

const config: Configuration = {
    target: "web",
    mode: isProduction ? "production" : "development",
    entry: {
        index: path.join(__dirname, "src", "index.tsx"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: baseURL,
        filename: "assets/scripts/[name].[contenthash:8].js",
        chunkFilename: "assets/scripts/chunk.[contenthash:8].js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: /\.(?:c|sa|sc)ss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: isDevelopment,
                            importLoaders: 2,
                            modules: {
                                auto: true,
                                localIdentName: isProduction ? "[hash:base64:8]" : "[local]",
                                exportLocalsConvention: "dashesOnly",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: isDevelopment,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment,
                            implementation: sass,
                            sassOptions: {
                                fiber: fibers,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "head",
            minify: isProduction,
            template: path.join(__dirname, "src", "index.html"),
            scriptLoading: "defer",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "public"),
                },
            ],
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    devtool: isDevelopment ? "eval-source-map" : "nosources-source-map",
};

export default config;