import React, {PropTypes, Component} from 'react'

class OutputTextComponent extends Component {

	computeOutputText() {
		return this.props.inputText + Math.random(); // FIXME;
	}

	render() {
		let outputText = this.computeOutputText();
		return (
			<div className="OutputText">
				<h2>Output</h2>
				<form className="form">
				<textarea className="form-control" rows="10" value={outputText} onChange={()=> {
				}}/>
				</form>
			</div>
		)
	}
}

OutputTextComponent.propTypes = {
	inputText: PropTypes.string.isRequired,
	textProcessors: PropTypes.objectOf(Object) // FIXME create class for these text processors + subclasses
};

export default OutputTextComponent;
