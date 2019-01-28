const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ExtractLess = new ExtractTextPlugin({
  filename: "../style/[name].css",
  disable:process.env.NODE_ENV === "development"
})

module.exports = {
  entry: {
    index: './src/script/index.js',
    vendor:['react','react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'build/script'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        include: [path.resolve(__dirname, 'src/script')],
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
        // use: ExtractLess.extract({
        //   use: [
        //     { loader: 'css-loader' },
        //     { loader: 'less-loader' },
        //   ],
        //   //use style-loader in development
        //   fallback: 'style-loader'
        // })
      }
    ]
  },
  plugins: [
    //依赖包版本变更导致报错
    // ExtractLess,
    // new webpack.optimaize.CommonsChunkPlugin({
    //   names: ['vendor','runtime'],
    // }),
    // new UglifyJSPlugin()
  ],
  externals:{
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}







