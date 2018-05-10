// @flow

import {connect} from 'react-redux';

import FindAllFilterComponent from '../Components/FindAllFilterComponent';
import {filterToggleCaseInsensitive, filterToggleEnabled, filterUpdateDescription, filterUpdateSearchString, regexpFlowDeleteFilter} from '../Store/Actions/RegexpFlowActions';
import type { Dispatch } from 'redux';

const mapStateToProps = (state, ownProps) => ({
    searchString: state.app.currentRegexpFlow.filterConfigs[ownProps.id].searchString,
    caseInsensitive: state.app.currentRegexpFlow.filterConfigs[ownProps.id].caseInsensitive,
    matchesCount: state.app.currentRegexpFlow.filterConfigs[ownProps.id].matchesCount,
    description: state.app.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.app.currentRegexpFlow.filterConfigs[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch: Dispatch<{type: $Subtype<string>}>, ownProps) => ({

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
