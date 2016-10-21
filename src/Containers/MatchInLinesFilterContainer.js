import {connect} from 'react-redux'

import MatchInLinesFilterComponent from '../Components/MatchInLinesFilterComponent'
import {
	updateTextProcecssorSearchString,
	updateTextProcessorCaseInsensitive,
	updateTextProcessorDescription,
	toggleTextProcessorEnabled,
	regexpFlowDeleteFilter
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
		dispatch(regexpFlowDeleteFilter(ownProps.id))
	}
});

const MatchInLinesFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchInLinesFilterComponent);

export default MatchInLinesFilterContainer;
