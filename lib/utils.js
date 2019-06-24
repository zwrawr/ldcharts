
function calcPercentages(values, total) {

	// if total is undefined calc it from the values
	total = total || this.calcTotal(values);
	return values.map((x) => 100* (x/total));
}

function calcTotal(values) {
	return values.reduce((a, b) => a + b, 0);
}

function calcColors(num) {

	let colors = [];
	for (let i = 0; i < num; i++) {
		colors.push(1 + ( i % 12 ));
	}

	return colors;
}

function truncate(value, places) {
	places = places || 2;
	const scaler = (10**(places));
	return Math.round(scaler*value)/scaler;
}

module.exports = {
	truncate,
	calcColors,
	calcTotal,
	calcPercentages
};
