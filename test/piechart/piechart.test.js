import PieChart from "../../lib/piechart/piechart";
import { h } from "preact";
import { shallow } from "enzyme";


const props = {
	labels: ["A", "B", "C"],
	values: [20, 20, 10],
	colors: undefined,
	class: "mock-class"
};

const propsPercentages = {
	...props,
	usePercentages: true
};

const propsNoPercentages = {
	...props,
	usePercentages: false
};


function genPercentages(values, total) {
	return values.map((x) => 100* (x/total));
}

function genTotal(values) {
	return values.reduce((a, b) => a + b, 0);
}

describe("Initial Test of the Piechart", () => {

	test("Piechart mounts", () => {
		const context = shallow(<PieChart {...props} />);

		expect(context.find(".chart").exists()).toBeTruthy();
	});

	test("Piechart has pie ", () => {
		const context = shallow(<PieChart {...props} />);

		expect(context.find(".chart").exists()).toBeTruthy();
		expect(context.find(".chart").find(".-pie").exists()).toBeTruthy();
		expect(context.find(".chart").find(".-pie").find("svg").exists()).toBeTruthy();

	});

	test("Pie has correct number of Segements", () => {
		const context = shallow(<PieChart {...props} />);

		expect(context.find(".chart").exists()).toBeTruthy();
		expect(context.find(".chart").find(".-pie").find("svg").children().length).toBe(props.values.length);
	});

	test("Pie Segements have correct data", () => {
		const context = shallow(<PieChart {...props} />);

		const percentages = genPercentages(props.values, genTotal(props.values));

		const segementsContext = context.find(".chart").find(".-pie").find("svg").children();

		let offset = 0;
		for (let i = 0; i < segementsContext.length; i++ ){
			expect(segementsContext.at(i).prop("angle")).toBeCloseTo(percentages[i],4);

			expect(segementsContext.at(i).prop("offset")).toBeCloseTo(offset,4);

			offset += percentages[i];
		}
	});

	test("Piechart has Legend ", () => {
		const context = shallow(<PieChart {...props} />);

		expect(context.find(".chart").exists()).toBeTruthy();
		expect(context.find(".chart").find("Legend").exists()).toBeTruthy();

	});

	test("Legend has correct data when usePercentages is undefined", () => {
		testLegendHasCorrectData(props);
	});

	test("Legend has correct data when usePercentages is true", () => {
		testLegendHasCorrectData(propsPercentages);
	});

	test("Legend has correct data when usePercentages is false", () => {
		testLegendHasCorrectData(propsNoPercentages);
	});

});


function testLegendHasCorrectData(props) {

	const context = shallow(<PieChart {...props} />);
	const namesContext = context.find(".chart").find("Legend").prop("names");

	const percentages = genPercentages(props.values, genTotal(props.values));

	for (let i = 0; i < namesContext.length; i++ ){
		if (props.usePercentages) {
			expect(namesContext[i]).toBe(props.labels[i] +" (" + props.values[i] + " : " + percentages[i] + "%)");
		}
		else {
			expect(namesContext[i]).toBe(props.labels[i] +" (" + props.values[i] + ")");
		}
	}
}