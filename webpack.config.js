module.exports = {
	entry: './src/app.js',
	output: {
		path: "src/assets/build",
    	filename: "bundle.js"
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
			  }
			},
			{
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
		]
	}
}