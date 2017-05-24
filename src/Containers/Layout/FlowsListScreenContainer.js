import {connect} from 'react-redux';

import FlowsListScreen from '../../Components/Layout/FlowsListScreen';
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    // FIXME load current regexpFlow!!!
    // onDeleteClick: () => {
    //     dispatch(regexpFlowDeleteFilter(ownProps.id));
    // }
});

const FlowsListScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlowsListScreen);

export default FlowsListScreenContainer;
