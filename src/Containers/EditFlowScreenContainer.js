import {connect} from 'react-redux';
import EditFlowScreenComponent from '../Components/EditFlowScreenComponent';
import {loadRegexpFlow, clearRegexpFlow} from '../redux/actions';

const mapStateToProps = (state) => ({
    currentRegexpFlowId: state.currentRegexpFlow.id
});

const mapDispatchToProps = (dispatch) => ({
    loadRegexpFlow: (id) => {
        dispatch(loadRegexpFlow(id));
    },
    clearCurrentRegexpFlow: () => {
        dispatch(clearRegexpFlow());
    }
});

const EditFlowScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditFlowScreenComponent);

export default EditFlowScreenContainer;
