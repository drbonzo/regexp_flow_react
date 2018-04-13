import {connect} from 'react-redux';

import ReplaceFilterComponent from '../Components/ReplaceFilterComponent';
import {
    filterUpdateSearchString,
    filterToggleCaseInsensitive,
    filterUpdateDescription,
    filterToggleGlobal,
    filterToggleMultiline,
    filterUpdateReplaceString,
    filterToggleEnabled,
} from '../Store/Actions/RegexpFlowActions';
import {regexpFlowDeleteFilter} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = (state, ownProps) => ({
    searchString: state.app.currentRegexpFlow.filterConfigs[ownProps.id].searchString,
    global: state.app.currentRegexpFlow.filterConfigs[ownProps.id].global,
    caseInsensitive: state.app.currentRegexpFlow.filterConfigs[ownProps.id].caseInsensitive,
    multiline: state.app.currentRegexpFlow.filterConfigs[ownProps.id].multiline,
    replaceString: state.app.currentRegexpFlow.filterConfigs[ownProps.id].replaceString,
    replacementsCount: state.app.currentRegexpFlow.filterConfigs[ownProps.id].replacementsCount,
    description: state.app.currentRegexpFlow.filterConfigs[ownProps.id].description,
    enabled: state.app.currentRegexpFlow.filterConfigs[ownProps.id].enabled,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    onSearchStringChange: (newSearchString) => {
        dispatch(filterUpdateSearchString(ownProps.id, newSearchString));
    },
    onGlobalChange: () => {
        dispatch(filterToggleGlobal(ownProps.id));
    },
    onCaseInsensitiveChange: () => {
        dispatch(filterToggleCaseInsensitive(ownProps.id));
    },
    onMultilineChange: () => {
        dispatch(filterToggleMultiline(ownProps.id));
    },
    onReplaceStringChange: (newReplaceString) => {
        dispatch(filterUpdateReplaceString(ownProps.id, newReplaceString));
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

const ReplaceFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReplaceFilterComponent);

export default ReplaceFilterContainer;
