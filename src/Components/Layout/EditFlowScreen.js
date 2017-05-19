import React, {Component} from 'react';
import FlowScreen from './FlowScreen';

class EditFlowScreen extends Component {

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
    match: React.PropTypes.object
};

export default  EditFlowScreen;
