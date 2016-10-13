import React, {Component} from 'react';
import TextProcessorControlls from './TextProcessorControlls.js';

class MatchInLineTextProcessor extends Component {

	constructor(props) {

		super();

		this.state = {
			searchRegexp: props.searchRegexp,
			caseInsensitive: props.caseInsensitive,
			description: props.description,

			showHelp: false,
			showDescription: Boolean(props.description)
		};

		// ES6 does not bind these automaticaly
		this.handleSearchRegexpChange = this.handleSearchRegexpChange.bind(this);
		this.handleCaseInsensitiveChange = this.handleCaseInsensitiveChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

		this.handleShowHelpChanged = this.handleShowHelpChanged.bind(this);
		this.handleShowDescriptionChanged = this.handleShowDescriptionChanged.bind(this);
	}

	handleSearchRegexpChange(event) {
		this.setState({
			searchRegexp: event.target.value
		});
	}

	handleCaseInsensitiveChange() {
		this.setState({
			caseInsensitive: !this.state.caseInsensitive
		});
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
			<div className="TextProcessor MatchInLineTextProcessor">
				<div className="TextProcessor__Header">
					Match in line
					<TextProcessorControlls onShowHelpClicked={this.handleShowHelpChanged} onShowDescriptionClicked={this.handleShowDescriptionChanged}/>
				</div>
				<div className="TextProcessor__Contents">
					<form>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">From each line, extract text matching (showing 10 of 200 lines)</label>
								<input type="text" className="form-control input-sm" placeholder="regular expression" value={this.state.searchRegexp} onChange={this.handleSearchRegexpChange}/>
								<p className="TextProcessor__Contents__RegexpErrors TextProcessor__Contents__RegexpErrors--Hidden"/>
							</div>
							<div className="form-group form-inline">
								<div className="checkbox TextProcessor__Contents__Checkbox">
									<label className="TextProcessor__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.state.caseInsensitive} onChange={this.handleCaseInsensitiveChange}/>
										Case Insensitive
									</label>
								</div>
								<ul className={this.state.showHelp ? "help-block TextProcessor__Contents__Help" : "help-block TextProcessor__Contents__Help TextProcessor__Contents__Help--Hidden"}>
									<li>checks each line of input - if it matches regular expression</li>
									<li>if line matches regular expression - then the match from regular expression is being returned
										<ul>
											<li>if regular expression had no groups - then full match is being returned ($&/$0)</li>
											<li>if regular expression did had groups - then only first group is being returned ($1)</li>
										</ul>
									</li>
									<li>if line does not match - then it is being ommited in result</li>
								</ul>
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

MatchInLineTextProcessor.propTypes = {
	searchRegexp: React.PropTypes.string.isRequired,
	caseInsensitive: React.PropTypes.bool.isRequired,
	description: React.PropTypes.string.isRequired
};

export default MatchInLineTextProcessor;
