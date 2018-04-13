import {connect} from 'react-redux';

import UniqueFilterComponent from '../Components/UniqueFilterComponent';
import {
    filterUpdateDescription,
    filterToggleEnabled,
    filterToggleAddCounter,
    filterSetCounterSeparator,
} from '../Store/Actions/RegexpFlowActions';
import {regexpFlowDeleteFilter} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = (state, ownProps) => ({
    addCounter: state.app.currentRegexpFlow.filterConfigs[ownProps.id].addCounter,
    counterSeparator: state.app.currentRegexpFlow.filterConfigs[ownProps.id].counterSeparator,
    uniqueLinesCount: state.app.currentRegexpFlow.filterConfigs[ownProps.id].uniqueLinesCount,
    totalLinesCount: state.app.currentRegexpFlow.filterConfigs[ownProps.id].totalLinesCount,
    description: state.app.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.app.currentRegexpFlow.filterConfigs[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    onAddCounterChange: () => {
        dispatch(filterToggleAddCounter(ownProps.id));
    },
    counterSeparatorChange: (newCounterSeparator) => {
        dispatch(filterSetCounterSeparator(ownProps.id, newCounterSeparator));
    },
    onDescriptionChange: (newDescription) => {
        dispatch(filterUpdateDescription(ownProps.id, newDescription));
    },
    onEnabledClick: () => {
        dispatch(filterToggleEnabled(ownProps.id));
    },
    onDeleteClick: () => {
        dispatch(regexpFlowDeleteFilter(ownProps.id));
    }
});

const UniqueFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UniqueFilterComponent);

export default UniqueFilterContainer;
