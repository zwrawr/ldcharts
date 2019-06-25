/* eslint-disable react/prefer-stateless-function */
import { h, Component } 			from "preact";
import classNames					from "classnames";
import utils						from "./../utils.js";

import PieSegment					from "./piesegment";
import Legend						from "../legend/legend";


const propsErrorMessage = "PieChart was created with invalid props\n";

export default class PieChart extends Component {


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

	validateProps(props) {
		if ( !(props.labels && props.values) ) {
			console.error(propsErrorMessage + "Needs labels:String[] and values:number[]", props.labels, props.values);
		}

		if (props.labels.length !== props.values.length) {
			console.error(propsErrorMessage + "labels.length must equal values.length", props.labels.length, props.values.length);
		}

	}

	constructor(props) {
		super(props);

		this.validateProps(props);
		this.state = this.calcStateFromProps(props);
	}

	componentWillReceiveProps(nextProps) {

		this.validateProps(nextProps);

		this.setState(this.calcStateFromProps(nextProps));

	}

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
