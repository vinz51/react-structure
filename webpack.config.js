var path                = require('path')
const DIRNAME           = __dirname
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    watch: true, // watch the project
    entry : './index.js',
    output: {
        path : path.resolve(DIRNAME, 'static'),
        filename: './static/bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap       : true, // enable Sourcemaps
                                    modules         : true, // enable css module
                                    importLoaders   : true, // loader form the @import
                                    localIdentName  : "[name]__[local]___[hash:base64:5]" // hash the name of the class
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                })
            },
            {
                test: /\.png$/,
                use: { loader: "file-loader?name=img/[name].png" }
            },
            {
                test: /\.jpg|\.jpeg$/,
                use: { loader: "file-loader?name=img/[name].jpg" }
            },
            {
                test: /\.gif$/,
                use: { loader: "file-loader?name=img/[name].gif" }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./static/styles.css"),
    ],
    resolve : {
        extensions  : ['.js','.js6','.css','.scss','.html'], // import without extension like import App from './app'
        modules     : [path.resolve(DIRNAME, './'), 'node_modules'],
        alias       : {
            Actions     : path.resolve(DIRNAME, './actions/'),
            Containers  : path.resolve(DIRNAME, './containers/'),
            Errors      : path.resolve(DIRNAME, './errors/'),
            FormCore    : path.resolve(DIRNAME, './containers/core/'),
            Reducers    : path.resolve(DIRNAME, './reducers/'),
            Stateless   : path.resolve(DIRNAME, './stateless/'),
            Styles      : path.resolve(DIRNAME, './styles/'),
            Validators  : path.resolve(DIRNAME, './validators/validators')
        }
    }
}
