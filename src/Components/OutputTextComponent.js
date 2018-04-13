import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OutputTextComponent extends Component {

    render() {
        return (
            <div className="OutputText">
                <h2 className="Screen__Subtitle">Output</h2>
                <form className="form">
                    <textarea className="form-control" rows="10" value={this.props.outputText} onChange={() => {
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
