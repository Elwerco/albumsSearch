const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: false,
    clientLogLevel: false,
    quiet: false,
	// It suppress everything except error, so it has to be set to false as well
	// to see success build.
	noInfo: false,
	stats: {
	    hash: false,
	    version: false,
	    timings: false,
	    assets: false,
	    chunks: false,
	    modules: false,
	    reasons: false,
	    children: false,
	    source: false,
	    errors: false,
	    errorDetails: false,
	    warnings: false,
	    publicPath: false
	}
  }
})
