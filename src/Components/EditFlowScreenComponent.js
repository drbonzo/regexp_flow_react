import React, {Component, PropTypes} from 'react';
import FlowScreen from './FlowScreen';

class EditFlowScreen extends Component {

    componentDidMount() {
        const regexpFlowId = this.props.match.params.id;
        if (regexpFlowId === 'new') {
            this.props.resetCurrentRegexpFlow();
        } else {
            this.props.loadRegexpFlow(regexpFlowId);
        }
    }

    render() {
        return (
            <div>
                <h1>EDIT Flow Screen: #{this.props.match.params.id}</h1>
                <FlowScreen/>
            </div>
        );
    }
}

EditFlowScreen.propTypes = {
    match: React.PropTypes.object,
    loadRegexpFlow: PropTypes.func.isRequired,
    resetCurrentRegexpFlow: PropTypes.func.isRequired
};

export default EditFlowScreen;
