import {connect} from 'react-redux';

import MatchLinesFilterComponent from '../Components/MatchLinesFilterComponent';
import {
    filterUpdateSearchString,
    filterToggleCaseInsensitive,
    filterUpdateDescription,
    filterToggleInvertMatch,
    filterToggleEnabled,
    regexpFlowDeleteFilter
} from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({
    searchString: state.currentRegexpFlow.filterConfigs[ownProps.id].searchString,
    caseInsensitive: state.currentRegexpFlow.filterConfigs[ownProps.id].caseInsensitive,
    invertMatch: state.currentRegexpFlow.filterConfigs[ownProps.id].invertMatch,
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
    onInvertMatchChange: () => {
        dispatch(filterToggleInvertMatch(ownProps.id));
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

const MatchLinesFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MatchLinesFilterComponent);

export default MatchLinesFilterContainer;
