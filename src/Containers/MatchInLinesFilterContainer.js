// @flow
import {connect} from 'react-redux';

import MatchInLinesFilterComponent from '../Components/MatchInLinesFilterComponent';
import {filterToggleCaseInsensitive, filterToggleEnabled, filterUpdateDescription, filterUpdateSearchString, regexpFlowDeleteFilter} from '../Store/Actions/RegexpFlowActions';
import type {Dispatch} from 'redux';

const mapStateToProps = (state, ownProps) => ({
    searchString: state.app.currentRegexpFlow.filterConfigs[ownProps.id].searchString,
    caseInsensitive: state.app.currentRegexpFlow.filterConfigs[ownProps.id].caseInsensitive,
    totalLinesCount: state.app.currentRegexpFlow.filterConfigs[ownProps.id].totalLinesCount,
    matchedLinesCount: state.app.currentRegexpFlow.filterConfigs[ownProps.id].matchedLinesCount,
    description: state.app.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.app.currentRegexpFlow.filterConfigs[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch: Dispatch<{ type: $Subtype<string> }>, ownProps) => ({

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

const MatchInLinesFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MatchInLinesFilterComponent);

export default MatchInLinesFilterContainer;
