import React, {PropTypes} from 'react'

const FindAllTextProcessorComponent = ({searchString, caseInsensitive, description, enabled, onDeleteClick, onPauseClick, onCaseInsensitiveChange, onDescriptionChange}) => {

	return (
		<div style={{padding: '10px', border: 'solid 1px #ccc', margin: '10px'}}>
			<button type="button" className="btn btn-default" onClick={onDeleteClick}>Delete</button>
			<button type="button" className="btn btn-default" onClick={onPauseClick}>Pause</button>

			<br/>
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
	//
	onDeleteClick: PropTypes.func.isRequired,
	onPauseClick: PropTypes.func.isRequired,
	onCaseInsensitiveChange: PropTypes.func.isRequired,
	onDescriptionChange: PropTypes.func.isRequired
};

export default FindAllTextProcessorComponent;
