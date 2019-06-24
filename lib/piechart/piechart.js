/* eslint-disable react/prefer-stateless-function */
import { h, Component } 			from "preact";
import classNames					from "classnames";
import utils						from "./../utils.js";

import PieSegment					from "./piesegment";
import Legend						from "../legend/legend";


const propsErrorMessage = "PieChart was created with invalid props\n";

export default class PieChart extends Component {


	render(  { labels, values, usePercentages, colors, classname } ) {

		if ( !(labels && values) ) {
			console.warn(propsErrorMessage + "Needs labels:String[] and values:number[]", labels, values);
			return;
		}

		if (labels.length !== values.length) {
			console.warn(propsErrorMessage + "labels.length must equal values.length", labels.length, values.length);
			return;
		}

		colors = colors || utils.calcColors(values.length);

		values = values.map((v) => utils.truncate(v));
		const percentages = utils.calcPercentages(values);

		let Segments = [];
		let Names = [];
		let offset = 0;
		for ( let i = 0; i < values.length; i++ ) {

			// Create the Pie segments
			const segmentclass = classNames("-segment-"+i, classname);
			Segments.push(<PieSegment class={segmentclass} angle={percentages[i]} offset={offset} color={colors[i]} />);

			// Create the Labels
			const percenttext = (usePercentages) ? " : " + percentages[i] + "%" : "";
			Names.push(labels[i] +" (" + values[i] + percenttext + ")");

			offset += percentages[i];
		}

		return (
			<div class="chart">
				<div class="-pie">
					<svg class="-svg" viewBox="0 0 42 42" width="100%" height="100%">
						{Segments}
					</svg>
				</div>
				<Legend class={classNames(classname)} names={Names} colors={colors} />
			</div>
		);
	}
}
