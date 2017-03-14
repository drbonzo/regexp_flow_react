import React, {PropTypes, Component} from 'react';

class OutputTextComponent extends Component {

    render() {
        return (
			<div className="OutputText">
				<h2>Output</h2>
				<form className="form">
				<textarea className="form-control" rows="10" value={this.props.outputText} onChange={()=> {
}}/>
				</form>
			</div>
        );
    }
}

OutputTextComponent.propTypes = {
    inputText: PropTypes.string.isRequired,
    outputText: PropTypes.string.isRequired,
    filterConfigs: PropTypes.objectOf(Object) // FIXME create class for these text processors + subclasses
};

export default OutputTextComponent;
