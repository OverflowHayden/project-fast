const ConcatPlugin = require('webpack-concat-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const publicJS = [
    './node_modules/tingle.js/src/tingle.js',
];

module.exports = [
    {
        mode: 'production',
        entry: publicJS,
        output: {
          filename: 'src/assets/js/bundle.js',
            path: __dirname,
            hotUpdateChunkFilename: 'hot/hot-update.js',
            hotUpdateMainFilename: 'hot/hot-update.json'
        },
        
        plugins: [
            //new UglifyJSPlugin(),
            new ConcatPlugin({
                uglify: true, // uglify js or set process.env.NODE_ENV = 'production'
                useHash: false, // md5 file
                sourceMap: false, // generate sourceMap
                name: 'flexible', // used in html-webpack-plugin
                fileName: 'src/assets/js/bundle.js',
                filesToConcat: publicJS
            })
        ],
    },
    {
        mode: 'development',
        entry: ['./src/assets/js/app.js', './src/assets/scss/includes.scss'],
        output: {
            filename: 'src/assets/js/app.min.js',
            path: __dirname,
            hotUpdateChunkFilename: 'hot/hot-update.js',
            hotUpdateMainFilename: 'hot/hot-update.json'
        },
        devtool: "source-map",
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
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
                                minimize: true,
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
                                includePaths: ["node_modules"]
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
                    loaders: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'src/assets/img/min/[name].[ext]',
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            query: {
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
                                svgo:{
                                    removeViewBox: false,
                                    removeEmptyAttrs: false,
                                }
                            }
                        }
                    ],
                },
                {// fonts
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loaders: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                emitFile: true,
                                publicPath: '../fonts/',
                                outputPath: 'src/assets/fonts/',
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
                filename: 'src/assets/css/style.css',
                allChunks: true,
            }),
            new UglifyJSPlugin({
                test: /\.js($|\?)/i,
                parallel: true
            })
        ]
    },
]