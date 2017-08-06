import {connect} from 'react-redux';

import UniqueFilterComponent from '../Components/UniqueFilterComponent';
import {
    filterUpdateDescription,
    filterToggleEnabled,
    filterToggleAddCounter,
    filterSetCounterSeparator,
    regexpFlowDeleteFilter
} from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({
    addCounter: state.currentRegexpFlow.filterConfigs[ownProps.id].addCounter,
    counterSeparator: state.currentRegexpFlow.filterConfigs[ownProps.id].counterSeparator,
    uniqueLinesCount: state.currentRegexpFlow.filterConfigs[ownProps.id].uniqueLinesCount,
    totalLinesCount: state.currentRegexpFlow.filterConfigs[ownProps.id].totalLinesCount,
    description: state.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.currentRegexpFlow.filterConfigs[ownProps.id].enabled
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
