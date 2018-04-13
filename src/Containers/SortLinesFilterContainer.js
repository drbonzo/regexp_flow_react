import {connect} from 'react-redux';

import SortLinesFilterComponent from '../Components/SortLinesFilterComponent';
import {
    filterUpdateDescription,
    filterToggleEnabled,
    filterToggleInvertOrder,
} from '../Store/Actions/RegexpFlowActions';
import {regexpFlowDeleteFilter} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = (state, ownProps) => ({
    description: state.app.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.app.currentRegexpFlow.filterConfigs[ownProps.id].enabled,
    invertOrder: state.app.currentRegexpFlow.filterConfigs[ownProps.id].invertOrder,
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
    },
    onInvertOrderChanged: () => {
        dispatch(filterToggleInvertOrder(ownProps.id));
    }
});

const SortLinesFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SortLinesFilterComponent);

export default SortLinesFilterContainer;
