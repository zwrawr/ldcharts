import PieChart from "../../lib/piechart/piechart";
import { h } from "preact";
import { shallow } from "enzyme";


const props = {
	labels: ["A", "B", "C"],
	values: [20, 20, 10],
	usePercentage: true,
	colors: undefined,
	class: "mock-class"
};


describe("Initial Test of the File", () => {

	test("File mounts", () => {
		const context = shallow(<PieChart {...props} />);

		expect(context.find(".chart").exists()).toBeTruthy();
	});

});
