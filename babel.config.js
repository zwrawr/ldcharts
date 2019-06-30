
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
			"@babel/plugin-transform-react-jsx",
			{
				pragma: "h",
				pragmaFrag: "Fragment"
			}
		]
	];

	return {
		presets,
		plugins
	};

};
