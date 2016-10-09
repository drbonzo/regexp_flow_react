import React, {Component} from 'react';
import TextProcessorControlls from './TextProcessorControlls.js';

class MatchLinesTextProcessor extends Component {

	constructor(props) {

		super();

		this.state = {
			searchRegexp: props.searchRegexp,
			caseInsensitive: props.caseInsensitive,
			invertMatch: props.invertMatch,
			description: props.description,

			showHelp: false,
			showDescription: Boolean(props.description)
		};

		// ES6 does not bind these automaticaly
		this.handleSearchRegexpChange = this.handleSearchRegexpChange.bind(this);
		this.handleCaseInsensitiveChange = this.handleCaseInsensitiveChange.bind(this);
		this.handleInvertMatchChange = this.handleInvertMatchChange.bind(this);
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

	handleInvertMatchChange() {
		this.setState({
			invertMatch: !this.state.invertMatch
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
			<div className="TextProcessor MatchLinesTextProcessor">
				<div className="TextProcessor__Header">
					Match lines with text
					<TextProcessorControlls onShowHelpClicked={this.handleShowHelpChanged} onShowDescriptionClicked={this.handleShowDescriptionChanged}/>
				</div>
				<div className="TextProcessor__Contents">
					<form>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">Get lines {this.state.invertMatch ? "not" : ""} matching (showing 1 of 1 lines)</label>
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
								<div className="checkbox TextProcessor__Contents__Checkbox">
									<label className="TextProcessor__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.state.invertMatch} onChange={this.handleInvertMatchChange}/>
										Invert match?
									</label>
								</div>
								<ul className={this.state.showHelp ? "help-block TextProcessor__Contents__Help" : "help-block TextProcessor__Contents__Help TextProcessor__Contents__Help--Hidden"}>
									<li>returns whole lines that are matched by regular expression</li>
									<li>if 'invert' flag is checked - then returns lines that DO NOT match regular expression</li>
									<li>lines are returned, joined with \n character - not their original newline character!</li>
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

MatchLinesTextProcessor.propTypes = {
	searchRegexp: React.PropTypes.string,
	caseInsensitive: React.PropTypes.bool,
	invertMatch: React.PropTypes.bool,
	description: React.PropTypes.string
};

export default MatchLinesTextProcessor;
