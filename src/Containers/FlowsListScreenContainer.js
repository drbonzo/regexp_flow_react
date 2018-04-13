import {connect} from 'react-redux';

import FlowsListScreenComponent from '../Components/FlowsListScreenComponent';
import {deleteRegexpFlow, loadRegexpFlow, navigateToEditFlowScreen} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = (state) => ({
    regexpFlows: state.app.regexpFlows
});

const mapDispatchToProps = (dispatch) => ({
    onDeleteRegexpFlow: (id) => {
        dispatch(deleteRegexpFlow(id));
    },

    onLoadRegexpFlow: (id) => {
        dispatch(loadRegexpFlow(id));
        dispatch(navigateToEditFlowScreen());
    }
});

const FlowsListScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlowsListScreenComponent);

export default FlowsListScreenContainer;
