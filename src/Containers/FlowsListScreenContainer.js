import {connect} from 'react-redux';

import FlowsListScreenComponent from '../Components/FlowsListScreenComponent';
import {
    deleteRegexpFlow
} from '../redux/actions';

const mapStateToProps = (state) => ({
    regexpFlows: state.regexpFlows
});

const mapDispatchToProps = (dispatch) => ({
    onDeleteRegexpFlow: (id) => {
        dispatch(deleteRegexpFlow(id));
    }
});

const FlowsListScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlowsListScreenComponent);

export default FlowsListScreenContainer;
