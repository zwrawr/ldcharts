/**
 * utils
 * Provides utility functions to all ldcharts classes
 */
export default class utils {

	// https://flatuicolors.com/palette/nl   @AhmetSulek, @jeroenvaneerden
	static palleteDutch = [
		"#FFC312", "#C4E538", "#12CBC4", "#FDA7DF",
		"#ED4C67", "#F79F1F", "#A3CB38", "#1289A7",
		"#D980FA", "#B53471", "#EE5A24", "#009432",
		"#0652DD", "#9980FA", "#833471", "#EA2027",
		"#006266", "#1B1464", "#5758BB", "#6F1E51"
	];

	static pallete = [
		"#F94144",
		"#F3722C",
		"#F8961E",
		"#F9C74F",
		"#90BE6D",
		"#43AA8B",
		"#4D908E",
		"#577590",
		"#277DA1",
		"#0B68B9",
		"#213ebf",
		"#4B35C4",
		"#7F37CB",
		"#C031B7"
	]; 

	/**
	 * Calculates the percentage share of each value
	 *
	 * @static
	 * @param {number[]} values Array of numeric values
	 * @param {number} [total] The total of values
	 * @returns {number[]} An Array of the shares
	 * @memberof utils
	 */
	static calcPercentages(values, total) {
		// if total is undefined calc it from the values
		total = total || this.calcTotal(values);
		return values.map((x) => ((x > 0) ? this.significantFigs(100* (x/total)) : 0));
	}

	/**
	 * Calculates the total of values
	 *
	 * @static
	 * @param {number[]} values
	 * @returns {number} the sum of all positive values
	 * @memberof utils
	 */
	static calcTotal(values) {
		return values.reduce((a, b) => ((b > 0) ? (a + b) : a),0);
	}

	/**
	 * Takes a number and returns it with any extra sig figs removed
	 *
	 * @static
	 * @param {number} value
	 * @param {number} [places=2]
	 * @returns {number}
	 * @memberof utils
	 */
	static significantFigs(value, places) {
		places = (places == undefined) ? 1 : places ;
		const scaler = (10**(places));
		return Math.round(scaler*value)/scaler;
	}
}