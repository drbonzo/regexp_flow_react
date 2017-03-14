import React, {PropTypes} from 'react';
import FilterConfigControlls from './FilterConfigControlls';
import FilterComponent from './FilterComponent';
import HelpForFilterComponent from './Layout/HelpForFilterComponent';

class MatchLinesFilterComponent extends FilterComponent {

    render() {
        return (
			<div className="FilterConfig MatchLinesFilterConfig">
				<div className="FilterConfig__Header">
					Match lines with text
					<div className="btn-group pull-right">
						<FilterConfigControlls toggleShowHelp={this.toggleShowHelp} toggleShowDescription={this.toggleShowDescription} onEnabledClick={this.props.onEnabledClick} onDeleteClick={this.props.onDeleteClick}/>
					</div>
				</div>
				<div className={this.props.enabled ? 'FilterConfig__Contents' : 'FilterConfig__Contents FilterConfig__Contents--Hidden'}>
					<form>
						<fieldset>
							<div className="form-group">
								<label className="FilterConfig__Contents__Checkbox__Label">Get lines {this.props.invertMatch ? 'not' : ''} matching {/* FIXME implement (showing 1 of 1 lines)*/}</label>
								<input type="text" className="form-control input-sm" placeholder="regular expression" value={this.props.searchString} onChange={(event) => {
    this.props.onSearchStringChange(event.target.value);
}}/>
								<p className="FilterConfig__Contents__RegexpErrors FilterConfig__Contents__RegexpErrors--Hidden"/>
							</div>
							<div className="form-group form-inline">
								<div className="checkbox FilterConfig__Contents__Checkbox">
									<label className="FilterConfig__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.props.caseInsensitive} onChange={this.props.onCaseInsensitiveChange}/>
										Case Insensitive
									</label>
								</div>
								<div className="checkbox FilterConfig__Contents__Checkbox">
									<label className="FilterConfig__Contents__Checkbox__Label">
										<input type="checkbox" checked={this.props.invertMatch} onChange={this.props.onInvertMatchChange}/>
										Invert match
									</label>
								</div>
							</div>
						</fieldset>

						<HelpForFilterComponent showHelp={this.state.showHelp}>
							<li>returns whole lines that are matched by regular expression</li>
							<li>if 'invert' flag is checked - then returns lines that DO NOT match regular expression</li>
							<li>lines are returned, joined with \n character - not their original newline character!</li>
						</HelpForFilterComponent>

						<fieldset className={this.state.showDescription ? 'FilterConfig__Contents__Description' : 'FilterConfig__Contents__Description FilterConfig__Contents__Description--Hidden'}>
							<div className="form-group">
								<label className="FilterConfig__Contents__Checkbox__Label">Description</label>
								<input type="text" className="form-control input-sm" value={this.props.description} onChange={(event) => {
    this.props.onDescriptionChange(event.target.value);
}}/>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
        );
    }
}

MatchLinesFilterComponent.propTypes = {
    searchString: PropTypes.string.isRequired,
    caseInsensitive: PropTypes.bool.isRequired,
    invertMatch: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
	//
    enabled: PropTypes.bool.isRequired,
	//
	//
	//
    onSearchStringChange: PropTypes.func.isRequired,
    onCaseInsensitiveChange: PropTypes.func.isRequired,
    onInvertMatchChange: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
	//
    onEnabledClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default MatchLinesFilterComponent;
