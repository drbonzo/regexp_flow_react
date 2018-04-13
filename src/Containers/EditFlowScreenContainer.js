import {connect} from 'react-redux';
import EditFlowScreenComponent from '../Components/EditFlowScreenComponent';
import {loadRegexpFlow} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    loadRegexpFlow: (id) => {
        dispatch(loadRegexpFlow(id));
    }
});

const EditFlowScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditFlowScreenComponent);

export default EditFlowScreenContainer;
