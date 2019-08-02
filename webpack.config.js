var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./app/index.jsx",
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
              // для react и es6 классов 
              test: /\.(jsx|js)$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              options:{
                  presets:["@babel/preset-env", "@babel/preset-react"],
                  plugins: ["@babel/plugin-proposal-class-properties"]
              }
            },
            { 
              // препроцессор stylus
              test: /\.styl$/, 
              loader: 'style-loader!css-loader!stylus-loader' 
            },
            {
              // картинки и иконки
              test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]'
                  }
                }
              ]
            }
        ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: './app/assets/images', to: './assets/images' },
        { from: './app/assets/fonts', to: './assets/fonts' },
      ])
    ]
}
