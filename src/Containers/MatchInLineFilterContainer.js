import {connect} from 'react-redux'

import MatchInLineFilterComponent from '../Components/MatchInLineFilterComponent'
import {
	updateTextProcecssorSearchString,
	updateTextProcessorCaseInsensitive,
	updateTextProcessorDescription,
	toggleTextProcessorEnabled,
	deleteTextProcessor
} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	searchString: state.textProcessors[ownProps.id].searchString,
	caseInsensitive: state.textProcessors[ownProps.id].caseInsensitive,
	description: state.textProcessors[ownProps.id].description,
	enabled: state.textProcessors[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch, ownProps) => ({

	onSearchStringChange: (newSearchString) => {
		dispatch(updateTextProcecssorSearchString(ownProps.id, newSearchString));
	},
	onCaseInsensitiveChange: () => {
		dispatch(updateTextProcessorCaseInsensitive(ownProps.id))
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

const MatchInLineFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchInLineFilterComponent);

export default MatchInLineFilterContainer;
