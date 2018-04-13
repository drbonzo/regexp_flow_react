import {connect} from 'react-redux';

import MatchLinesFilterComponent from '../Components/MatchLinesFilterComponent';
import {filterToggleCaseInsensitive, filterToggleEnabled, filterToggleInvertMatch, filterUpdateDescription, filterUpdateSearchString, regexpFlowDeleteFilter} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = (state, ownProps) => ({
    searchString: state.app.currentRegexpFlow.filterConfigs[ownProps.id].searchString,
    caseInsensitive: state.app.currentRegexpFlow.filterConfigs[ownProps.id].caseInsensitive,
    invertMatch: state.app.currentRegexpFlow.filterConfigs[ownProps.id].invertMatch,
    totalLinesCount: state.app.currentRegexpFlow.filterConfigs[ownProps.id].totalLinesCount,
    matchedLinesCount: state.app.currentRegexpFlow.filterConfigs[ownProps.id].matchedLinesCount,
    description: state.app.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.app.currentRegexpFlow.filterConfigs[ownProps.id].enabled
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
