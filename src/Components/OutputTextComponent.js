import React, {PropTypes} from 'react'

const OutputTextComponent = ({value}) => {

	return (
		<div className="OutputText">
			<h2>Output</h2>
			<form className="form">
				<textarea className="form-control" rows="10" value={value}/>
			</form>
		</div>
	)
};

OutputTextComponent.propTypes = {
	value: PropTypes.string.isRequired,
};

export default OutputTextComponent;
