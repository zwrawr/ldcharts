const configure = require("enzyme").configure;
const Adapter = require("enzyme-adapter-preact-pure").Adapter;

configure({ adapter: new Adapter() });