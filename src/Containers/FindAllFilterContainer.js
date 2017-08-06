import {connect} from 'react-redux';

import FindAllFilterComponent from '../Components/FindAllFilterComponent';
import {
    filterUpdateSearchString,
    filterToggleCaseInsensitive,
    filterUpdateDescription,
    filterToggleEnabled,
    regexpFlowDeleteFilter
} from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({
    searchString: state.currentRegexpFlow.filterConfigs[ownProps.id].searchString,
    caseInsensitive: state.currentRegexpFlow.filterConfigs[ownProps.id].caseInsensitive,
    matchesCount: state.currentRegexpFlow.filterConfigs[ownProps.id].matchesCount,
    description: state.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.currentRegexpFlow.filterConfigs[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    onSearchStringChange: (newSearchString) => {
        dispatch(filterUpdateSearchString(ownProps.id, newSearchString));
    },
    onCaseInsensitiveChange: () => {
        dispatch(filterToggleCaseInsensitive(ownProps.id));
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

const FindAllFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FindAllFilterComponent);

export default FindAllFilterContainer;
