import { h, Component } 				from "preact";

import Line							from "./line";
import Legend						from "../legend/legend";
import Axes							from "../axes/axes";

export default class Graph extends Component {


	findLimits(values) {
		let maxX = values[0].x[0];
		let maxY = values[0].y[0];
		let minX = values[0].x[0];
		let minY = values[0].y[0];

		for (let i = 0; i < values.length; i++) {
			const series = values[i];
			for (let j = 0; j < series.x.length; j++) {
				const elementX = series.x[j];
				if (elementX > maxX) {
					maxX = elementX;
				}
				if (elementX < minX) {
					minX = elementX;
				}

				const elementY = series.y[j];
				if (elementY > maxY) {
					maxY = elementY;
				}
				if (elementY < minY) {
					minY = elementY;
				}
			}
		}

		return { min: { x: minX, y: minY }, max: { x: maxX, y: maxY } };
	}

	scaleValues( values, range ) {

		let scaleValues = [];
		for (let i = 0; i < values.length; i++) {
			const series = values[i];

			let scaleSeriesX = [];
			let scaleSeriesY = [];
			for (let j = 0; j < series.x.length; j++) {
				let x = (series.x[j] - range.min.x)/(range.max.x - range.min.x);
				let y = (series.y[j] - range.min.y)/(range.max.y - range.min.y);

				scaleSeriesX.push(10 + (80 * x));
				scaleSeriesY.push(10 + (80 * y));
			}

			scaleValues.push({ x: scaleSeriesX, y: scaleSeriesY });
		}

		return scaleValues;
	}


	render( props ) {

		if ( !(props && props.labels && props.values && Array.isArray(props.values)) && props.values[0].x && props.values[0].y) {
			console.warn("Graph was created with invalid props", props);
			return <div>No Data!</div>;
		}

		//const usePercentages = (props.use_percentages === undefined)? false : props.usePercentages;

		let { labels, values } = props;

		let range = this.findLimits(values);
		let svalues = this.scaleValues(values, range);

		let Lines = [];
		let Names = [];
		let Colors = [];

		for (let i = 0; i < values.length; i++) {
			Colors.push(1 + ( i % 12 ));
			Names.push(labels[i]);
			Lines.push(<Line x={values[i].x} y={values[i].y} sx={svalues[i].x} sy={svalues[i].y} color={Colors[i]} />);
		}

		return (
			<div class="chart">
				<div class="-graph">
					<svg class="-svg" viewBox="0 0 100 100" width="100%" height="100%" transform="translate(0,0) scale(1,-1)">
						<Axes width={100} height={100} range={range} />
						<g>
							{Lines}
						</g>
					</svg>
				</div>
				<Legend names={Names} colors={Colors} />
			</div>
		);
	}
}
