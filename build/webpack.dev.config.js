/**
 * Created by li on 2018/2/10 9:52.
 */
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.config')

const config = webpackMerge(baseConfig,{
    output:{
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            }
        ]
    },
    devtool:'#cheap-module-eval-source-map',
    devServer:{
        port:8000,
        host:'127.0.0.1',
        overlay:{
            errors:true
        },
        hot:true,
        open:true,
        progress:true,
        historyApiFallback:true,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})

module.exports = config
