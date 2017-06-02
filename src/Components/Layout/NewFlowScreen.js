import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FlowScreen from './FlowScreen';
import {clearRegexpFlow} from '../../redux/actions';

class NewFlowScreen extends Component {

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

NewFlowScreen.propTypes = {
    onClearRegexpFlowClick: PropTypes.func.isRequired
};

// =========

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    onClearRegexpFlowClick: () => {
        dispatch(clearRegexpFlow());
    }
});

const NewFlowScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewFlowScreen);

export default NewFlowScreenContainer;
