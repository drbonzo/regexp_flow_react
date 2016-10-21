import {connect} from 'react-redux'

import ReplaceFilterComponent from '../Components/ReplaceFilterComponent'
import {
	filterUpdateSearchString,
	filterToggleCaseInsensitive,
	filterUpdateDescription,
	filterToggleGlobal,
	filterToggleMultiline,
	filterUpdateReplaceString,
	filterToggleEnabled,
	regexpFlowDeleteFilter
} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	searchString: state.textProcessors[ownProps.id].searchString,
	global: state.textProcessors[ownProps.id].global,
	caseInsensitive: state.textProcessors[ownProps.id].caseInsensitive,
	multiline: state.textProcessors[ownProps.id].multiline,
	replaceString: state.textProcessors[ownProps.id].replaceString,
	description: state.textProcessors[ownProps.id].description,
	enabled: state.textProcessors[ownProps.id].enabled,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

	onSearchStringChange: (newSearchString) => {
		dispatch(filterUpdateSearchString(ownProps.id, newSearchString));
	},
	onGlobalChange: () => {
		dispatch(filterToggleGlobal(ownProps.id));
	},
	onCaseInsensitiveChange: () => {
		dispatch(filterToggleCaseInsensitive(ownProps.id))
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
		dispatch(filterToggleEnabled(ownProps.id))
	},
	onDeleteClick: () => {
		dispatch(regexpFlowDeleteFilter(ownProps.id))
	}
});

const ReplaceFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ReplaceFilterComponent);

export default ReplaceFilterContainer;
