
function calcPercentages(values, total) {

	// if total is undefined calc it from the values
	total = total || this.calcTotal(values);
	return values.map((x) => ((x > 0) ? 100* (x/total) : 0));
}

function calcTotal(values) {
	return values.reduce((a, b) => ((b > 0) ? (a + b) : a),0);
}

function calcColors(num) {

	let colors = [];
	for (let i = 0; i < num; i++) {
		colors.push(1 + ( i % 12 ));
	}

	return colors;
}

function significantFigs(value, places) {
	places = (places == undefined) ? 2 : places ;
	const scaler = (10**(places));
	return Math.round(scaler*value)/scaler;
}

export default {
	significantFigs,
	calcColors,
	calcTotal,
	calcPercentages
};
