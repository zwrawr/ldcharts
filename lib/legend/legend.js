import { h, Component } 				from "preact";
import classNames						from "classnames";

import LegendStyle						from "./legend.css";

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
				<li class={LegendStyle.item}>
					<span class={LegendStyle.icon} />
					<p class={LegendStyle.label}>{name}</p>
				</li>
			);

		}

		return (
			<div class={LegendStyle.legend}>
				<ul>
					{Legend}
				</ul>
			</div>
		);
	}
}
