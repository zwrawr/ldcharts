import { h, Component } 				from "preact";

/**
 * PieSegment
 * returns an svg element
 * @extends Component Preact's component class
 * {@link Props}
 */
export default class PieSegment extends Component {

	/**
	 * PieSegment Props
	 * @typedef {Object} Props
	 * @property {number} angle The angle that the PieSegment takes up
	 * @property {number} offset The offset of the PieSegment from the vertical
	 * @property {number} color The color index of the PieSegment
	 * @property {(string|string[])} [classname] Any extra classes to add to the PieSegment
	 */

	/**
	 * renders a piesegment svg circle
	 * @param {Props} props
	 * @returns {Object} jsx
	 */
	render( props ) {

		// it's valid for offset/angle to be zero so we have to check it against undefined.
		if ( !(props && (props.angle != null) && (props.offset != null) && props.color) ) {
			console.warn("PieSegment was created with invalid props", props);
			return;
		}

		// drawing a segment of 0 width causes artifacting so bail out. Also stops NaN or Null Segements being drawn
		if ( !(props.angle > 0) ) {
			return;
		}

		const offset = 100 - props.offset + 25;
		const dash = props.angle + " " + (100 - props.angle);

		return (
			<circle
				stroke={props.color} fill="transparent"
				cx="21" cy="21" r="15.91549430918954"
				stroke-width="6" stroke-dasharray={dash} stroke-dashoffset={offset}
			/>
		);
	}
}
