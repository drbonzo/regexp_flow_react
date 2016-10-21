import {connect} from 'react-redux'

import MatchLinesFilterComponent from '../Components/MatchLinesFilterComponent'
import {
	updateTextProcecssorSearchString,
	updateTextProcessorCaseInsensitive,
	updateTextProcessorDescription,
	updateMatchLinesInvertMatchChange,
	toggleTextProcessorEnabled,
	regexpFlowDeleteFilter
} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	searchString: state.textProcessors[ownProps.id].searchString,
	caseInsensitive: state.textProcessors[ownProps.id].caseInsensitive,
	invertMatch: state.textProcessors[ownProps.id].invertMatch,
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
	onInvertMatchChange: () => {
		dispatch(updateMatchLinesInvertMatchChange(ownProps.id))
	},
	onDescriptionChange: (newDescription) => {
		dispatch(updateTextProcessorDescription(ownProps.id, newDescription));
	},
	onEnabledClick: () => {
		dispatch(toggleTextProcessorEnabled(ownProps.id))
	},
	onDeleteClick: () => {
		dispatch(regexpFlowDeleteFilter(ownProps.id))
	}
});

const MatchLinesFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchLinesFilterComponent);

export default MatchLinesFilterContainer;
