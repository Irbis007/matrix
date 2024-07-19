const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development', // Убедитесь, что используется 'production' для включения минификации
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
      fallback: {
          "path": require.resolve("path-browserify")
      }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
        minimizer: [
            new TerserPlugin(),
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        allowedHosts: "all",
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            devServer.app.get('/swagger.json', function(req, res) {
                res.sendFile(path.join(__dirname, 'swagger.json'));
            });

            return middlewares;
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/calculators.html',
            filename: 'calculators.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/prognosis.html',
            filename: 'prognosis.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/compatibility.html',
            filename: 'compatibility.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/blog.html',
            filename: 'blog.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/article.html',
            filename: 'article.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/auth.html',
            filename: 'auth.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/cabinet.html',
            filename: 'cabinet.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pay.html',
            filename: 'pay.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.html$/i,
              loader: 'html-loader',
            },
        ],
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 2000000, // 2 MB
        maxAssetSize: 2000000, // 2 MB
    }
};

