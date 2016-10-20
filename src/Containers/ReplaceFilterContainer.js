import {connect} from 'react-redux'

import ReplaceFilterComponent from '../Components/ReplaceFilterComponent'
import {
	updateTextProcecssorSearchString,
	updateTextProcessorCaseInsensitive,
	updateTextProcessorDescription,

	toggleTextProcessorEnabled,
	deleteTextProcessor
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
		dispatch(updateTextProcecssorSearchString(ownProps.id, newSearchString));
	},
	onGlobalChange: () => {
		// dispatch(updateReplaceFilterGlobalChange(ownProps.id)); // FIXME
	},
	onCaseInsensitiveChange: () => {
		dispatch(updateTextProcessorCaseInsensitive(ownProps.id))
	},
	onMultilineChange: () => {
		// dispatch(updateReplaceFilterMultilineChange(ownProps.id)); // FIXME
	},
	onReplaceStringChange: (newReplaceString) => {
		// dispatch(updateReplaceFilterReplaceStringChange(ownProps.id, newReplaceString));// FIXME
	},
	onDescriptionChange: (newDescription) => {
		dispatch(updateTextProcessorDescription(ownProps.id, newDescription));
	},
	onEnabledClick: () => {
		dispatch(toggleTextProcessorEnabled(ownProps.id))
	},
	onDeleteClick: () => {
		dispatch(deleteTextProcessor(ownProps.id))
	}
});

const ReplaceFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ReplaceFilterComponent);

export default ReplaceFilterContainer;
