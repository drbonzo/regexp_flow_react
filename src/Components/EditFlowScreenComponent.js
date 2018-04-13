import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlowScreen from './FlowScreen';

class EditFlowScreenComponent extends Component {

    render() {
        return (
            <div className="Screen">
                <h1 className="Screen__Title">Edit RegexpFlow</h1>
                <FlowScreen/>
            </div>
        );
    }
}

EditFlowScreenComponent.propTypes = {
    match: PropTypes.object,
    loadRegexpFlow: PropTypes.func.isRequired
};

export default EditFlowScreenComponent;
