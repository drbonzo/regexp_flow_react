import React, {PropTypes, Component} from 'react'

class ExamplesLoaderComponent extends Component {

	constructor() {

		super();

		this.state = {
			examples: []
		};

		let example1 = {
			name: 'Find words and convert to JS array',
			actions: [
				{type: "REGEXP_FLOW_ADD_FILTER", filterType: "FindAll"},
				{type: "FILTER_UPDATE_SEARCH_STRING", id: "1", searchString: "[a-z]+"},
				{type: "FILTER_TOGGLE_CASE_INSENSITIVE", id: "1"},

				{type: "REGEXP_FLOW_ADD_FILTER", filterType: "Unique"},

				{type: "REGEXP_FLOW_ADD_FILTER", filterType: "Replace"},
				{type: "FILTER_UPDATE_SEARCH_STRING", id: "3", searchString: "^(.+?)$"},
				{type: "FILTER_UPDATE_REPLACE_STRING", id: "3", replaceString: "'$1',"},

				{
					type: "UPDATE_INPUT_TEXT",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
					"Cras ut pharetra ipsum, in interdum risus. " +
					"Donec ante mauris, pellentesque condimentum felis sed, dictum pulvinar elit. " +
					"Sed nulla metus, sagittis eu elit vel, adipdsdsdiscing interdum risus. " +
					"Mauris vitae ligula massa. " +
					"Integer in blandit arcu. " +

					"Aliquam laoreet justo a lorem pellentesque scelerisque. " +
					"Curabitur varius et odio ut condimentum. " +
					"Etiam cursus nunc et porttitor cursus. " +
					"Nulla blandit hendrerit metus, a auctor magna ullamcorper non. " +
					"Cras vitae metus tortor. " +
					"Proin venenatis eros et sem consectetur vehicula. " +
					"Donec commodo sit amet metus a scelerisque. " +
					"Sed vitae dapibus lorem. " +
					"Vestibulum sed varius nisl. " +

					"Curabitur id lobortis dui.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse egestas ultrices eros et cursus. " +
					"In quam erat, fermentum in volutpat eu, ornare eget enim. " +
					"Vivamus eu pharetra sem. " +
					"Mauris id congue urna. " +
					"Proin leo augue, pretium eu pulvinar sit amet, placerat eget sapien. " +
					"Phasellus porta nunc euismod ultricies dignissim. " +
					"Mauris luctus bibendum vehicula. " +
					"In hac habitasse platea dictumst. " +
					"Curabitur posuere ac felis non interdum. " +
					"Phasellus laoreet id purus id semper. "
				},
			]
		};

		this.state.examples.push(example1);

		this.loadExample = this.loadExample.bind(this);
	}

	loadExample(i) {
		this.props.loadExampleHandler(this.state.examples[i]);
	}

	render() {

		let exampleElements = [];

		for (let i = 0; i < this.state.examples.length; i++) {
			let example = this.state.examples[i];
			exampleElements.push(<li key="example_{i}"><a href="#" onClick={(event) => this.loadExample(i)}>{example.name}</a></li>);
		}
		return (
			<div className="btn-group">
				<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Load an example <span className="caret"></span>
				</button>
				<ul className="dropdown-menu">
					{exampleElements}
				</ul>
			</div>
		)
	}
}

ExamplesLoaderComponent.propTypes = {
	loadExampleHandler: PropTypes.func.isRequired
};

export default ExamplesLoaderComponent;
