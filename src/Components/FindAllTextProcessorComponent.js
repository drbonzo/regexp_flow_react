import React, {PropTypes} from 'react'

const FindAllTextProcessorComponent = ({searchString, caseInsensitive, description, enabled, onDeleteClick, onEnabledClick, onSearchStringChange, onCaseInsensitiveChange, onDescriptionChange}) => {

	return (
		<div style={{padding: '10px', border: 'solid 1px #ccc', margin: '10px'}}>
			<button type="button" className="btn btn-default" onClick={onDeleteClick}>[X] Delete</button>
			<button type="button" className="btn btn-default" onClick={onEnabledClick}>{enabled ? 'Disable' : 'Enable'}</button>

			<br/>
			<label>Search string</label>
			<input type="text" value={searchString} onChange={(event) => {
				onSearchStringChange(event.target.value)
			}}/>

			<br/>
			<label>Description</label>
			<input type="text" value={description} onChange={(event) => {
				onDescriptionChange(event.target.value)
			}}/>
			<br/>

			<label className="TextProcessor__Contents__Checkbox__Label">
				<input type="checkbox" checked={caseInsensitive} onChange={onCaseInsensitiveChange}/>
				Case Insensitive
			</label>
			<br/>
			Enabled? {enabled ? 'YES' : 'NO'}
		</div>
	)
};

FindAllTextProcessorComponent.propTypes = {
	searchString: PropTypes.string.isRequired,
	caseInsensitive: PropTypes.bool.isRequired,
	description: PropTypes.string.isRequired,
	enabled: PropTypes.bool.isRequired,
	//
	onDeleteClick: PropTypes.func.isRequired,
	onEnabledClick: PropTypes.func.isRequired,
	onSearchStringChange: PropTypes.func.isRequired,
	onCaseInsensitiveChange: PropTypes.func.isRequired,
	onDescriptionChange: PropTypes.func.isRequired
};

export default FindAllTextProcessorComponent;
