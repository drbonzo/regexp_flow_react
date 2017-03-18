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
    addCounter: state.filterConfigs[ownProps.id].addCounter,
    counterSeparator: state.filterConfigs[ownProps.id].counterSeparator,
    description: state.filterConfigs[ownProps.id].description,
    enabled: state.filterConfigs[ownProps.id].enabled
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
