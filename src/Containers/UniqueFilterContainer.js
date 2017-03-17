import {connect} from 'react-redux';

import UniqueFilterComponent from '../Components/UniqueFilterComponent';
import {
    filterUpdateDescription,
    filterToggleEnabled,
    filterToggleAddCounter,
    regexpFlowDeleteFilter
} from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({
    addCounter: state.filterConfigs[ownProps.id].addCounter,
    description: state.filterConfigs[ownProps.id].description,
    enabled: state.filterConfigs[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    onAddCounterChange: () => {
        dispatch(filterToggleAddCounter(ownProps.id));
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
