import utils 	from "../lib/utils.js";
import { h } 	from "preact";
import each from "jest-each";
function compareFloatArray(rec, exp, places) {

	places = places || 4;

	expect(Array.isArray(exp)).toBeTruthy();
	expect(Array.isArray(rec)).toBeTruthy();

	expect(rec.length).toEqual(exp.length);

	for (let i = 0; i < rec.length; i++) {
		expect(rec[i]).toBeCloseTo(exp[i],places);
	}
}

describe("Test of utils", () => {

	each([
		[
			[1, 1, 2, 3, 4, 5],
			16,
			[6.25, 6.25, 12.5, 18.75, 25, 31.25]
		],
		[
			[1.1, 1.1, 2.2, 3.3, 4.4, 5.5],
			17.6,
			[6.25, 6.25, 12.5, 18.75, 25, 31.25]
		],
		[
			[1.1, -1.1, 2.2, 3.3, -4.4, 5.5],
			12.1,
			[9.090909, 0, 18.181818, 27.272727, 0, 45.454545]
		],
		[
			[0],
			0,
			[0]
		],
		[
			[],
			0,
			[]
		]
	]).test("Clac percentage : %#", (values, total, expected) => {

		compareFloatArray(utils.calcPercentages(values, total),expected);

		compareFloatArray(utils.calcPercentages(values),expected);

	});

	each([
		[
			[1.1, -1.1, 2.2, 3.3, -4.4, 5.5],
			12.1
		],
		[
			[1, 0, 6, 4, 1],
			12
		],
		[
			[0],
			0
		],
		[
			[1.1, 1.1, 2.2, 3.3, 4.4, 5.5],
			17.6
		],
		[
			[],
			0
		]
	]).test("Clac total : %#", (values, total) => {

		expect(utils.calcTotal(values)).toBe(total);

	});

	each([
		[Math.PI, [3, 3.1, 3.14, 3.142, 3.1416]],
		[1, [1, 1, 1]],
		[0.0001, [0, 0, 0, 0, 0.0001]],
		[-1.11, [-1, -1.1, -1.11, -1.11]]
	]).test("significantFigs : %d", (input, expected) => {

		for (let i = 0; i < expected.length; i ++ ) {
			expect(utils.significantFigs(input, i)).toBe(expected[i]);
		}

	});

	each([
		[Math.PI, 3.14],
		[1, 1],
		[0.0001, 0],
		[-1.11, -1.11]
	]).test("significantFigs no places : %d", (input, expected) => {

		expect(utils.significantFigs(input)).toBe(expected);

	});

});