import { h } 				from "preact";
import classNames			from "classnames";

const MAJOR_TICK_LENGTH = 1.5;
const MINOR_TICK_LENGTH = 0.5;

const Tick = {
	// NOTE: This emits SVG, not HTML
	render( props ) {
		const { major, horizontal, outside, axis, position } = props;
		const pos0 = outside ? (axis - (major ? MAJOR_TICK_LENGTH : MINOR_TICK_LENGTH)) : (axis + (major ? MAJOR_TICK_LENGTH : MINOR_TICK_LENGTH));
		if ( horizontal ) {
			return <line class={classNames("-axis-tick", major ? "-tick-major": "-tick-minor")} x1={pos0} x2={axis} y1={position} y2={position} />;
		}

		return <line class={classNames("-axis-tick", major ? "-tick-major": "-tick-minor")} x1={position} x2={position} y1={pos0} y2={axis} />;

	}
};

export default Tick;
