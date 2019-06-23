import { h, Component } 				from "preact";
import classNames						from "classnames";

export default class Legend extends Component {


	render( props ) {

		if ( !(props && props.colors && props.names) ) {
			console.warn("Legend was created with invalid props", props);
			return;
		}

		let { colors, names } = props;

		let Legend = [];
		for (let index = 0; index < names.length; index++) {
			let name = names[index];
			let color = colors[index];

			let legendclass = classNames("-shape-circle", "vis_bg_color_"+color, props.class);

			Legend.push(
				<li>
					<span class={legendclass} />
					<p>{name}</p>
				</li>
			);

		}

		return (
			<div class="-legend">
				<ul>
					{Legend}
				</ul>
			</div>
		);
	}
}
