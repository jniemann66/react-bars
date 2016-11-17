var path = require('path');
var webpack = require('webpack');

module.exports = {
  
    entry: {
      dev: ['./demo/App.js'], // dev version includes a host application to demonstrate the component
      dist: ['./src/bars.js'] // dist version is component only
    },
    output: { 
      path: path.join(__dirname, '/build/'),
      filename: '[name].bars.js', // will be 'dev.bars.js' and 'dist.bars.js'
      publicPath: '/',                     // ./build => http://localhost:port/
      libraryTarget: 'umd'
    },
  
     externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    },

    module: {
        loaders: [
            { 
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
};