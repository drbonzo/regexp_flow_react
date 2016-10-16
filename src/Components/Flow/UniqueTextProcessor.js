import React, {Component} from 'react';
import TextProcessorControlls from './TextProcessorControlls.js';

class UniqueTextProcessor extends Component {

	constructor(props) {

		super(props);

		this.state = {
			description: props.description,

			showHelp: false,
			showDescription: Boolean(props.description)
		};

		// ES6 does not bind these automaticaly
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

		this.handleShowHelpChanged = this.handleShowHelpChanged.bind(this);
		this.handleShowDescriptionChanged = this.handleShowDescriptionChanged.bind(this);
	}

	handleDescriptionChange(event) {
		this.setState({
			description: event.target.value
		});
	}

	handleShowHelpChanged() {
		this.setState({
			showHelp: !this.state.showHelp
		})
	}

	handleShowDescriptionChanged() {
		this.setState({
			showDescription: !this.state.showDescription
		})
	}

	render() {
		return (
			<div className="TextProcessor UniqueTextProcessor">
				<div className="TextProcessor__Header">
					Unique
					<TextProcessorControlls onShowHelpClicked={this.handleShowHelpChanged} onShowDescriptionClicked={this.handleShowDescriptionChanged}/>
				</div>
				<div className="TextProcessor__Contents">
					<form>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">Show just unique lines (showing 5 of 10 lines)</label>
							</div>
							<div className="form-group form-inline">
							</div>
						</fieldset>
						<fieldset className={this.state.showDescription ? "help-block TextProcessor__Contents__Description" : "help-block TextProcessor__Contents__Description TextProcessor__Contents__Description--Hidden"}>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">Description</label>
								<input type="text" className="form-control input-sm" value={this.state.description} onChange={this.handleDescriptionChange}/>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
}

UniqueTextProcessor.propTypes = {
	description: React.PropTypes.string.isRequired
};

export default UniqueTextProcessor;
