import { h, Component } 				from "preact";
import classNames						from "classnames";

export default class PieSegment extends Component {

	render( props ) {

		// it's valid for offset/angle to be zero so we have to check it against undefined.
		if ( !(props && (props.angle != null) && (props.offset != null) && props.color) ) {
			console.warn("PieSegment was created with invalid props", props);
			return;
		}

		let angle = props.angle;

		// drawing a segment of 0 width causes artifacting so bail out. Also stops NaN or Null Segements being drawn
		if ( !(angle > 0) ) {
			return;
		}

		let offset = 100 - props.offset + 25;
		let color = props.color;
		let segmentclass = classNames("-segment", "vis_stroke_color_"+color, props.classname);
		let dash = angle + " " + (100 - angle);

		return (
			<circle
				class={segmentclass} fill="transparent"
				cx="21" cy="21" r="15.91549430918954"
				stroke-width="6" stroke-dasharray={dash} stroke-dashoffset={offset}
			/>
		);
	}
}
