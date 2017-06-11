import {connect} from 'react-redux';
import NewFlowScreen from '../Components/NewFlowScreenComponent';
import {clearRegexpFlow} from '../redux/actions';

const mapStateToProps = () => ({});

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
