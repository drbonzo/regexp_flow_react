import {connect} from 'react-redux';

import FlowsListScreenComponent from '../Components/FlowsListScreenComponent';
// import {
//     filterUpdateSearchString,
//     filterToggleCaseInsensitive,
//     filterUpdateDescription,
//     filterToggleEnabled,
//     regexpFlowDeleteFilter
// } from '../redux/actions';

const mapStateToProps = (state) => ({
    regexpFlows: state.regexpFlows
});

const mapDispatchToProps = (/* dispatch, ownProps */) => ({
    // FIXME load current regexpFlow!!!
    // onDeleteClick: () => {
    //     dispatch(regexpFlowDeleteFilter(ownProps.id));
    // }
});

const FlowsListScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlowsListScreenComponent);

export default FlowsListScreenContainer;
