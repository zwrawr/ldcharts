import BarChart from "../../lib/barchart/barchart";
import { h } from "preact";
import { shallow } from "enzyme";


const props = {
	labels: ["A", "B", "C"],
	values: [20, 20, 10],
	colors: undefined,
	class: "mock-class"
};

describe("Initial Test of the BarChart", () => {

	test("BarChart mounts", () => {
		const context = shallow(<BarChart {...props} />);

		expect(context.find(".chart").exists()).toBeTruthy();
	});

	test("BarChart has Bars ", () => {
		const context = shallow(<BarChart {...props} />);

		expect(context.find(".chart").exists()).toBeTruthy();
		expect(context.find(".chart").find(".-bar").exists()).toBeTruthy();
		expect(context.find(".chart").find(".-bar").find("svg").exists()).toBeTruthy();

	});

	test("BarChart has correct number of Bars", () => {
		const context = shallow(<BarChart {...props} />);

		expect(context.find(".chart").exists()).toBeTruthy();
		expect(context.find(".chart").find(".-bar").find(".-svg").find("g").children().length).toBe(props.values.length);
	});

});