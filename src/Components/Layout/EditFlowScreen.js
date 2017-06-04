import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadRegexpFlow} from '../../redux/actions';
import FlowScreen from './FlowScreen';

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

// =========

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    loadRegexpFlow: (id) => {
        dispatch(loadRegexpFlow(id));
    }
});

const EditFlowScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditFlowScreen);

export default EditFlowScreenContainer;
