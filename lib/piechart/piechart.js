/* eslint-disable react/prefer-stateless-function */
import { h, Component } 			from "preact";
import classNames					from "classnames";
import utils						from "./../utils.js";

import PieSegment					from "./piesegment";
import Legend						from "../legend/legend";


const propsErrorMessage = "PieChart was created with invalid props\n";

/**
 * Piechart
 * @extends Component Preact's component class
 * {@link Props}
 */
export default class PieChart extends Component {


	/**
	 * PieChart Props
	 * @protected
	 * @typedef {Object} Props
	 * @property {number[]} values
	 * @property {string[]} labels
	 * @property {number[]} [colors]
	 * @property {boolean} [usePercentages]
	 * @property {(string|string[])} [classname]
	 */

	 /**
	  * PieChart State
 	  * @typedef {Object} State
	  * @property {number[]} values
	  * @property {string[]} colors
	  * @property {string[]} percentages
	  * @property {string[]} names
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

		const colors = props.colors || utils.calcColors(props.values.length);

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
	 */
	render(  { classname }, { values, colors, percentages, names } ) {

		let Segments = [];
		let offset = 0;
		for ( let i = 0; i < values.length; i++ ) {

			// Create the Pie segments
			const segmentclass = classNames("-segment-"+i, classname);
			Segments.push(<PieSegment class={segmentclass} angle={percentages[i]} offset={offset} color={colors[i]} />);

			// Create the Labels

			offset += percentages[i];
		}

		return (
			<div class="chart">
				<div class="-pie">
					<svg class="-svg" viewBox="0 0 42 42" width="100%" height="100%">
						{Segments}
					</svg>
				</div>
				<Legend class={classNames(classname)} names={names} colors={colors} />
			</div>
		);
	}
}
