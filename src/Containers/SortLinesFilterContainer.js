import {connect} from 'react-redux';

import SortLinesFilterComponent from '../Components/SortLinesFilterComponent';
import {
    filterUpdateDescription,
    filterToggleEnabled,
    regexpFlowDeleteFilter
} from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({
    description: state.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.currentRegexpFlow.filterConfigs[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch, ownProps) => ({

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

const SortLinesFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SortLinesFilterComponent);

export default SortLinesFilterContainer;
