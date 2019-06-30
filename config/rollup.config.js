
const { rollup } = require("rollup");
const babel = require("rollup-plugin-babel");


async function build() {
	const bundle = await rollup({
		input: "lib/index.js",
		plugins: [
			babel()
		]
	});
	await bundle.write({
		file: "build/bundle/bundle.js",
		format: "cjs"
	});
}
build();