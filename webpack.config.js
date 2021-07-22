const WebpackConcatPlugin = require('webpack-concat-files-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

const publicJS = [
    './node_modules/tingle.js/dist/tingle.min.js',
    './node_modules/choices.js/public/assets/scripts/choices.min.js',
];

const files = [
    './src/js/app.js',
    './src/scss/includes.scss'
];

module.exports = [
    {
        mode: 'development',
        entry: files,
        output: {
            filename: 'dist/js/app.min.js',
            path: __dirname,
            hotUpdateChunkFilename: 'hot/hot-update.js',
            hotUpdateMainFilename: 'hot/hot-update.json'
        },
        optimization: {
            minimize: true,
            minimizer: [
                new OptimizeCSSAssetsPlugin({}),
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                    test: /\.js(\?.*)?$/i,
                    extractComments: false,
                    parallel: true,
                }),
            ],
        },
        module: {

            rules: [
                /*
                 your other rules for JavaScript transpiling go in here
                 */
                {// regular css files
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader?importLoaders=1"
                    ]
                },
                {// sass / scss loader for webpack
                    test: /\.(sass|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader', options: {
                                import: false,
                                sourceMap: true,
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader', options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader', options: {
                                sourceMap: true,
                                sassOptions: {
                                    includePaths: ["node_modules"]
                                }
                            }
                        }
                    ]
                },
                {// js es6 / babel loader for webpack
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime'],
                            minified: true
                        }
                    },
                },
                {// image loader
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                emitFile: true,
                                publicPath: '../img/',
                                outputPath: 'dist/img/',
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                },
                                svgo: {
                                    removeViewBox: false,
                                    removeEmptyAttrs: false,
                                }
                            }
                        }
                    ],
                },
                {// fonts
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                emitFile: true,
                                publicPath: '../fonts/',
                                outputPath: 'dist/fonts/',
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new StyleLintPlugin({
                configFile: '.stylelintrc',
            }),
            new MiniCssExtractPlugin({// define where to save the file
                filename: 'dist/css/style.css',
            }),
            new CompressionPlugin({
                filename: "[path][base].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new WebpackConcatPlugin({
                bundles: [
                    {
                        destination: 'dist/js/bundle.js',
                        source: publicJS,
                    },
                ],
            }),
        ]
    },
]