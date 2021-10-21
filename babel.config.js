
module.exports = function (api) {
	api.cache.forever();

	const presets = [
		[
			"@babel/preset-env",
			{
				targets: {
					browsers: "last 2 version, > 1%, maintained node versions, not dead"
				},
				modules: false
			}
		],
		"@babel/preset-react"
	];

	const plugins = [
		[
			'babel-plugin-postcss',
			{
				test : /\.less$/,
			}
		],
		[
			"@babel/plugin-transform-react-jsx",
			{
				pragma: "h",
				pragmaFrag: "Fragment"
			}
		],
		"@babel/plugin-proposal-class-properties"
	];

	return {
		presets,
		plugins
	};

};
