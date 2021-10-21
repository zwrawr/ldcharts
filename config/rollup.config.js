
const { rollup } = require("rollup");
const babel = require("rollup-plugin-babel");
const postcss = require("rollup-plugin-postcss");

async function build() {

	const bundle = await rollup({
		input: { lib: "lib/index.js" },
		plugins: [
			babel(),
			postcss({ modules: true })
		]
	});

	await bundle.write({
		dir: "build/bundle/",
		format: "cjs"
	});
}

build();