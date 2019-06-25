import PieSegment from "../../lib/piechart/piesegment";
import { h } from "preact";
import { shallow } from "enzyme";


const props = {
	angle: 90,
	offset: 50,
	color: 1,
	class: "mock-class"
};


describe("Initial Test of the PieSegment", () => {

	test("PieSegemnt mounts", () => {
		const context = shallow(<PieSegment {...props} />);

		expect(context.find("circle").exists()).toBeTruthy();
		expect(context.find(".-segment").exists()).toBeTruthy();
	});

});