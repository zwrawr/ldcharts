import { h } 				from "preact";
import classNames			from "classnames";
// Non used prop `height` is the expected maximum extent of axis
// content down from the `yZeroPos` y.
//
// Component returns a group to support extension with ticks and labels
const XAxis = {
	// NOTE: This emits SVG, not HTML
	render( props ) {
		const { yZeroPos, padLeft, padRight } = props;

		// FIXME: does this need to be inside <g>? Can this just be <line>? Please document if <g> is needed.
		return (
			<g>
				<line class={classNames("-chart-axis", "x-axis", this.props.class)} x1={padLeft} y1={yZeroPos} x2={100 - padRight} y2={yZeroPos} />
			</g>
		);
	}
};

export default XAxis;
