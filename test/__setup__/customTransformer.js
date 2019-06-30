const { transform } = require("@babel/core");
const config = require("../../config/jest/.babelrc.json");

module.exports = {
	process(src, filename) {

		const result = transform(src,config);

		return result ? result.code : src;
	}
};
