import {connect} from 'react-redux';
import EditFlowScreen from '../Components/EditFlowScreenComponent';
import {loadRegexpFlow, clearRegexpFlow} from '../redux/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    loadRegexpFlow: (id) => {
        dispatch(loadRegexpFlow(id));
    },
    resetCurrentRegexpFlow: () => {
        dispatch(clearRegexpFlow());
    }
});

const EditFlowScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditFlowScreen);

export default EditFlowScreenContainer;
