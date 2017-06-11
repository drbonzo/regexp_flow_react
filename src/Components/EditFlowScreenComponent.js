import React, {Component, PropTypes} from 'react';
import FlowScreen from './Layout/FlowScreen';

class EditFlowScreen extends Component {

    componentDidMount() {
        this.props.loadRegexpFlow(this.props.match.params.id);
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
    loadRegexpFlow: PropTypes.func.isRequired
};

export default EditFlowScreen;
