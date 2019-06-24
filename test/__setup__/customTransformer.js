const { transform } = require("@babel/core");
const config = require("../../config/.babelrc.json");

module.exports = {
	process(src, filename) {

		const result = transform(src,config);

		return result ? result.code : src;
	}
};
