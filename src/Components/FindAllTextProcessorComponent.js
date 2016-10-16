import React, {PropTypes} from 'react'

const FindAllTextProcessorComponent = ({searchString, caseInsensitive, description, enabled, onSearchStringChange, onCaseInsensitiveChange, onDescriptionChange, onEnabledClick, onDeleteClick}) => {

	let showDescription = true; //FIXME add as state

	return (
		<div className="TextProcessor FindAllTextProcessor">
			<div className="TextProcessor__Header">
				Find all matches
				<div className="btn-group pull-right">
					{/* FIXME <TextProcessorControlls onShowHelpClicked={this.handleShowHelpChanged} onShowDescriptionClicked={this.handleShowDescriptionChanged}/>*/}
					{/*<button type="button" className="btn btn-default btn-xs regexpHelpButton" title="Toggle help" onClick={this.props.onShowHelpClicked}>?</button>*/}
					{/*<button type="button" className="btn btn-info btn-xs" title="Toggle description" onClick={this.props.onShowDescriptionClicked}><span className="glyphicon glyphicon-pencil"/></button>*/}
					<button type="button" className="btn btn-default btn-xs" onClick={onEnabledClick}>{enabled ? 'Disable' : 'Enable'}</button>
					<button type="button" className="btn btn-default btn-xs" onClick={onDeleteClick}>[X] Delete</button>
				</div>
			</div>
			<div className={enabled ? 'TextProcessor__Contents' : 'TextProcessor__Contents TextProcessor__Contents--Hidden'}>
				<form>
					<fieldset>
						<div className="form-group">
							<label className="TextProcessor__Contents__Checkbox__Label">Find all matches (Found: 0)</label>
							<input type="text" className="form-control input-sm" placeholder="regular expression" value={searchString} onChange={(event) => {
								onSearchStringChange(event.target.value)
							}}/>
							<p className="TextProcessor__Contents__RegexpErrors TextProcessor__Contents__RegexpErrors--Hidden"/>
						</div>
						<div className="form-group form-inline">
							<div className="checkbox TextProcessor__Contents__Checkbox">
								<label className="TextProcessor__Contents__Checkbox__Label">
									<input type="checkbox" checked={caseInsensitive} onChange={onCaseInsensitiveChange}/>
									Case Insensitive
								</label>
							</div>
						</div>
					</fieldset>
					<fieldset className={showDescription ? "help-block TextProcessor__Contents__Description" : "help-block TextProcessor__Contents__Description TextProcessor__Contents__Description--Hidden"}>
						<div className="form-group">
							<label className="TextProcessor__Contents__Checkbox__Label">Description</label>
							<input type="text" className="form-control input-sm" value={description} onChange={(event) => {
								onDescriptionChange(event.target.value)
							}}/>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	)
};

FindAllTextProcessorComponent.propTypes = {
	searchString: PropTypes.string.isRequired,
	caseInsensitive: PropTypes.bool.isRequired,
	description: PropTypes.string.isRequired,
	//
	enabled: PropTypes.bool.isRequired,
	//
	//
	//
	onSearchStringChange: PropTypes.func.isRequired,
	onCaseInsensitiveChange: PropTypes.func.isRequired,
	onDescriptionChange: PropTypes.func.isRequired,
	//
	onEnabledClick: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default FindAllTextProcessorComponent;
