import PieSegment from "../../lib/piechart/piesegment";
import { h } from "preact";
import { shallow } from "enzyme";


const props = {
	angle: 90,
	offset: 50,
	color: 1
};

const zeroAngleProps = {
	...props,
	angle: 0
};

const classProps = {
	...props,
	classname: "test"
};

describe("Initial Test of the PieSegment", () => {

	test("PieSegemnt mounts", () => {
		const context = shallow(<PieSegment {...props} />);

		expect(context.find("circle").exists()).toBeTruthy();
		expect(context.find(".-segment").exists()).toBeTruthy();
	});

	test("PieSegemnt with 0 angle", () => {
		const context = shallow(<PieSegment {...zeroAngleProps} />);

		expect(context.find("circle").exists()).toBeFalsy();
		expect(context.find(".-segment").exists()).toBeFalsy();

		expect(context.exists()).toBeFalsy();

	});

	test("PieSegemnt with classname", () => {
		const context = shallow(<PieSegment {...classProps} />);

		expect(context.find("circle").exists()).toBeTruthy();
		expect(context.find(".-segment").exists()).toBeTruthy();
		expect(context.find("."+classProps.classname).exists()).toBeTruthy();
	});

});