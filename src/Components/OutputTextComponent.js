import React, {PropTypes} from 'react'

const OutputTextComponent = ({inputText, textProcessors}) => {
	// WTF make class
	let outputText = inputText + Math.random(); // FIXME do real computation
	return (
		<div className="OutputText">
			<h2>Output</h2>
			<form className="form">
				<textarea className="form-control" rows="10" value={outputText} onChange={()=> {
				}}/>
			</form>
		</div>
	)
};

OutputTextComponent.propTypes = {
	inputText: PropTypes.string.isRequired,
	textProcessors: PropTypes.objectOf(Object) // FIXME create class for these text processors + subclasses
};

export default OutputTextComponent;
