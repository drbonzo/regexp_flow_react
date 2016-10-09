import React, {Component} from 'react';
import TextProcessorControlls from './TextProcessorControlls.js';

class ReplaceTextProcessor extends Component {

	constructor(props) {

		super();

		this.state = {
			searchRegexp: props.searchRegexp,
			global: props.global,
			caseInsensitive: props.caseInsensitive,
			multiline: props.multiline,
			replaceRegexp: props.replaceRegexp,
			description: props.description,

			showHelp: false,
			showDescription: Boolean(props.description)
		};

		// ES6 does not bind these automaticaly
		this.handleSearchRegexpChange = this.handleSearchRegexpChange.bind(this);
		this.handleGlobalChange = this.handleGlobalChange.bind(this);
		this.handleCaseInsensitiveChange = this.handleCaseInsensitiveChange.bind(this);
		this.handleMultilineChange = this.handleMultilineChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

		this.handleShowHelpChanged = this.handleShowHelpChanged.bind(this);
		this.handleShowDescriptionChanged = this.handleShowDescriptionChanged.bind(this);
	}

	handleSearchRegexpChange(event) {
		this.setState({
			searchRegexp: event.target.value
		});
	}

	handleGlobalChange() {
		this.setState({
			global: !this.state.global
		});
	}

	handleCaseInsensitiveChange() {
		this.setState({
			caseInsensitive: !this.state.caseInsensitive
		});
	}

	handleMultilineChange() {
		this.setState({
			multiline: !this.state.multiline
		});
	}

	handleReplaceRegexpChange(event) {
		this.setState({
			replaceRegexp: event.target.value
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
			<div className="TextProcessor ReplaceTextProcessor">
				<div className="TextProcessor__Header">
					Replace in text
					<TextProcessorControlls onShowHelpClicked={this.handleShowHelpChanged} onShowDescriptionClicked={this.handleShowDescriptionChanged}/>
				</div>
				<div className="TextProcessor__Contents">
					<form>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">Search for</label>
								<input type="text" className="form-control input-sm" placeholder="regular expression" value={this.state.searchRegexp} onChange={this.handleSearchRegexpChange}/>
								<p className="TextProcessor__Contents__RegexpErrors TextProcessor__Contents__RegexpErrors--Hidden"/>
							</div>
							<div className="form-group form-inline">
								<div className="checkbox TextProcessor__Contents__Checkbox">
									<label className="TextProcessor__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.state.global} onChange={this.handleGlobalChange}/>
										Global
									</label>
								</div>
								<div className="checkbox TextProcessor__Contents__Checkbox">
									<label className="TextProcessor__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.state.multiline} onChange={this.handleMultilineChange}/>
										Multiline
									</label>
								</div>
								<div className="checkbox TextProcessor__Contents__Checkbox">
									<label className="TextProcessor__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.state.caseInsensitive} onChange={this.handleCaseInsensitiveChange}/>
										Case Insensitive
									</label>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">and replace with. (5 replacements)</label>
								<input type="text" className="form-control input-sm" placeholder="replacement string" value={this.state.replaceRegexp} onChange={this.handleReplaceRegexpChange}/>
								<ul className={this.state.showHelp ? "help-block TextProcessor__Contents__Help" : "help-block TextProcessor__Contents__Help TextProcessor__Contents__Help--Hidden"}>
									<li>$1, $2, $3 - for groups.</li>
									<li>$$ Inserts a "$".</li>
									<li>$& Inserts the matched substring.</li>
									<li>$` Inserts the portion of the string that precedes the matched substring.</li>
									<li>$' Inserts the portion of the string that follows the matched substring.</li>
									<li>$n or $nn</li>
									<li>Where n or nn are decimal digits, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object.</li>
									<li>\t, \n - to insert tab/newline characters</li>
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

ReplaceTextProcessor.propTypes = {
	searchRegexp: React.PropTypes.string,
	global: React.PropTypes.bool,
	caseInsensitive: React.PropTypes.bool,
	multiline: React.PropTypes.bool,
	replaceRegexp: React.PropTypes.string,
	description: React.PropTypes.string
};

export default ReplaceTextProcessor;
