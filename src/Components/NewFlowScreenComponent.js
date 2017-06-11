import React, {Component, PropTypes} from 'react';
import FlowScreen from './FlowScreen';

class NewFlowScreenComponent extends Component {

    componentDidMount() {
        this.props.onClearRegexpFlowClick();
    }

    render() {
        return (
            <div>
                <h1>New Flow Screen</h1>
                <FlowScreen/>
            </div>
        );
    }
}

NewFlowScreenComponent.propTypes = {
    onClearRegexpFlowClick: PropTypes.func.isRequired
};

export default NewFlowScreenComponent;
