import React, {PropTypes, Component} from 'react'
import FilterRunner from '../RegexpFlow/FilterRunner'

class OutputTextComponent extends Component {

	computeOutputText() {

		let inputText = this.props.inputText;
		let runner = new FilterRunner();
		// FIXME update totals/counters in filter configs
		return runner.processString(this.props.filterConfigs, inputText);
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
	filterConfigs: PropTypes.objectOf(Object) // FIXME create class for these text processors + subclasses
};

export default OutputTextComponent;
