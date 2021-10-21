import { h, Component } 			from "preact";

import utils						from "./../utils.js";

import PieSegment					from "./piesegment";
import Legend						from "../legend/legend";

import PieChartStyle				from "./piechart.less";


const propsErrorMessage = "PieChart was created with invalid props\n";

/**
 * Piechart
 * @extends Component Preact's component class
 * {@link Props}
 */
export default class PieChart extends Component {


	/**
	 * PieChart Props
	 * @typedef {Object} Props
	 * @property {number[]} values The amounts of each item
	 * @property {string[]} labels The label of each item
	 * @property {number[]} [colors] The color indices of each item
	 * @property {boolean} [usePercentages]	Weather to display percentage in the Legend
	 * @property {(string|string[])} [classname] Any extra classes to add to the piechart, piesegment and Legend
	 */

	 /**
	  * PieChart State
 	  * @typedef {Object} State
	  * @property {number[]} values Processed amounts of each item
	  * @property {string[]} colors Processed color indexes of each item
	  * @property {string[]} percentages Calculated pergentage of total of each item
	  * @property {string[]} names Calculated names for each item in the Legend
	  */

	/**
	 * Calculates the needed state from props.
	 * - removes extra significant figues from values.
	 * - calculates percentages from values.
	 * - generates names based on labels, usePercentages and values.
	 * @param {Props} props
	 *
	 * @returns {State} calculated state containing colors, values, percentages, names
	 */
	calcStateFromProps( props ) {

		const colors = props.colors || utils.palleteDutch;

		const values = props.values.map((v) => utils.significantFigs(v));

		const percentages = utils.calcPercentages(values);

		let names = [];
		for (let i = 0; i < props.labels.length; i++ ) {
			const percenttext = (props.usePercentages) ? " : " + percentages[i] + "%" : "";
			names.push(props.labels[i] +" (" + values[i] + percenttext + ")");
		}

		return {
			colors,
			values,
			percentages,
			names
		};
	}

	/**
	 * Validates that the required props exist.
	 * @param {Props} props
	 */
	validateProps({ labels, values }) {
		if ( !(labels && values) ) {
			console.error(propsErrorMessage + "Needs labels:String[] and values:number[]", labels, values);
		}

		if (labels.length !== values.length) {
			console.error(propsErrorMessage + "labels.length must equal values.length", labels.length, values.length);
		}

	}

	/**
	 * Creates a PieChart
	 *  - validates props then calculates state from those props.
 	 * @param {Props} props
	 */
	constructor(props) {
		super(props);

		this.validateProps(props);
		this.state = this.calcStateFromProps(props);
	}

	/**
	 * validates nextProps and then calcuates state from them.
 	 * @param {Props} nextProps
	 */
	componentWillReceiveProps(nextProps) {

		this.validateProps(nextProps);

		this.setState(this.calcStateFromProps(nextProps));

	}

	/**
	 * renders a piechart composed of a svg image and a legend
	 * @param {Props} props
	 * @param {State} state
	 * @returns {Object} jsx
	 */
	render(  { }, { values, colors, percentages, names } ) {

		let Segments = [];
		let offset = 0;
		for ( let i = 0; i < values.length; i++ ) {

			// Create the Pie segments
			Segments.push(<PieSegment class={PieChartStyle.segment} angle={percentages[i]} offset={offset} color={colors[i%colors.length]} />);

			// Create the Labels

			offset += percentages[i];
		}

		return (
			<div class={PieChartStyle.chart}>
				<div class={PieChartStyle.pie}>
					<svg class="-svg" viewBox="0 0 42 42" width="100%" height="100%">
						{Segments}
					</svg>
				</div>
				<Legend names={names} colors={colors} />
			</div>
		);
	}
}
