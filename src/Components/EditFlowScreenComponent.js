import React, {Component, PropTypes} from 'react';
import FlowScreen from './FlowScreen';

class EditFlowScreenComponent extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id === 'new') {
            this.updateEditorForNewRegexpFlow();
        } else {
            const regexpFlowId = Number(id);
            this.updateEditorForExistingRegexpFlow(regexpFlowId);
        }
    }

    updateEditorForNewRegexpFlow() {
        if (this.props.currentRegexpFlowId === null) {
            // do nothing
        } else {
            this.props.clearCurrentRegexpFlow();
        }
    }

    updateEditorForExistingRegexpFlow(regexpFlowId) {
        if (this.props.currentRegexpFlowId === regexpFlowId) {
            // do nothing
        } else {
            this.props.loadRegexpFlow(regexpFlowId);
        }
    }

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
    match: React.PropTypes.object,
    loadRegexpFlow: PropTypes.func.isRequired,
    clearCurrentRegexpFlow: PropTypes.func.isRequired,
    currentRegexpFlowId: PropTypes.number // optional
};

export default EditFlowScreenComponent;
