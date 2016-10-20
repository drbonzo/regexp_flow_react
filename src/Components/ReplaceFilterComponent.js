import React, {PropTypes, Component} from 'react'
import TextProcessorControlls from './Flow/TextProcessorControlls'

class ReplaceFilterComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showDescription: Boolean(props.description),
			showHelp: false
		};

		this.toggleShowHelp = this.toggleShowHelp.bind(this);
		this.toggleShowDescription = this.toggleShowDescription.bind(this);
	}

	toggleShowHelp() {
		this.setState({
			showHelp: !this.state.showHelp
		})
	}

	toggleShowDescription() {
		this.setState({
			showDescription: !this.state.showDescription
		})
	}

	render() {
		return (
			<div className="TextProcessor ReplaceTextProcessor">
				<div className="TextProcessor__Header">
					Replace in text
					<div className="btn-group pull-right">
						<TextProcessorControlls toggleShowHelp={this.toggleShowHelp} toggleShowDescription={this.toggleShowDescription} onEnabledClick={this.props.onEnabledClick} onDeleteClick={this.props.onDeleteClick}/>
					</div>
				</div>
				<div className={this.props.enabled ? 'TextProcessor__Contents' : 'TextProcessor__Contents TextProcessor__Contents--Hidden'}>
					<form>
						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">Search for</label>
								<input type="text" className="form-control input-sm" placeholder="regular expression" value={this.props.searchString} onChange={(event) => {
									this.props.onSearchStringChange(event.target.value)
								}}/>
								<p className="TextProcessor__Contents__RegexpErrors TextProcessor__Contents__RegexpErrors--Hidden"/>
							</div>
							<div className="form-group form-inline">
								<div className="checkbox TextProcessor__Contents__Checkbox">
									<label className="TextProcessor__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.props.global} onChange={this.props.onGlobalChange}/>
										Global
									</label>
								</div>
								<div className="checkbox TextProcessor__Contents__Checkbox">
									<label className="TextProcessor__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.props.multiline} onChange={this.props.onMultilineChange}/>
										Multiline
									</label>
								</div>
								<div className="checkbox TextProcessor__Contents__Checkbox">
									<label className="TextProcessor__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.props.caseInsensitive} onChange={this.props.onCaseInsensitiveChange}/>
										Case Insensitive
									</label>
								</div>
								<ul className={this.state.showHelp ? "help-block TextProcessor__Contents__Help" : "help-block TextProcessor__Contents__Help TextProcessor__Contents__Help--Hidden"}>
									<li>returns whole lines that are matched by regular expression</li>
									<li>if 'invert' flag is checked - then returns lines that DO NOT match regular expression</li>
									<li>lines are returned, joined with \n character - not their original newline character!</li>
								</ul>
							</div>
						</fieldset>

						<fieldset>
							<div className="form-group">
								<label className="TextProcessor__Contents__Checkbox__Label">and replace with. (5 replacements)</label>
								<input type="text" className="form-control input-sm" placeholder="replacement string" value={this.props.replaceString} onChange={(event) => {
									this.props.onReplaceStringChange(event.target.value)
								}}/>
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
								<input type="text" className="form-control input-sm" value={this.props.description} onChange={(event) => {
									this.props.onDescriptionChange(event.target.value)
								}}/>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		)
	}
}

ReplaceFilterComponent.propTypes = {
	searchString: PropTypes.string.isRequired,
	global: PropTypes.bool.isRequired,
	caseInsensitive: PropTypes.bool.isRequired,
	multiline: PropTypes.bool.isRequired,
	replaceString: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	//
	enabled: PropTypes.bool.isRequired,
	//
	//
	//
	onSearchStringChange: PropTypes.func.isRequired,
	onGlobalChange: PropTypes.func.isRequired,
	onCaseInsensitiveChange: PropTypes.func.isRequired,
	onMultilineChange: PropTypes.func.isRequired,
	onReplaceStringChange: PropTypes.func.isRequired,
	onDescriptionChange: PropTypes.func.isRequired,
	//
	onEnabledClick: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default ReplaceFilterComponent;
