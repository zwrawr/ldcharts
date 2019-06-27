/**
 * Provides utility functions to all ldcharts classes
 */
export default class utils {


	/**
	 * Calculates the percentage share of each value in values
	 *
	 * @static
	 * @param {number[]} values What to calculate the perentages of
	 * @param {number} [total] The sum of values
	 * @returns {numer[]} The percentage share of each value
	 * @memberof utils
	 */
	static calcPercentages(values, total) {

		// if total is undefined calc it from the values
		total = total || this.calcTotal(values);
		return values.map((x) => ((x > 0) ? 100* (x/total) : 0));
	}

	/**
	 * Calculates the total of values
	 *
	 * @static
	 * @param {number[]} values
	 * @returns {number} the sum of all psoitive values
	 * @memberof utils
	 */
	static calcTotal(values) {
		return values.reduce((a, b) => ((b > 0) ? (a + b) : a),0);
	}


	/**
	 * generates color ids
	 *
	 * @static
	 * @param {number} num color index
	 * @returns color id
	 * @memberof utils
	 */
	static calcColors(num) {

		let colors = [];
		for (let i = 0; i < num; i++) {
			colors.push(1 + ( i % 12 ));
		}

		return colors;
	}


	/**
	 * Takes a number and returns it with extra sig figs removed
	 *
	 * @static
	 * @param {number} value
	 * @param {number} [places=2]
	 * @returns {number}
	 * @memberof utils
	 */
	static significantFigs(value, places) {
		places = (places == undefined) ? 2 : places ;
		const scaler = (10**(places));
		return Math.round(scaler*value)/scaler;
	}
}