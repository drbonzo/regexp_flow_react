import {connect} from 'react-redux'

import FindAllFilterComponent from '../Components/FindAllFilterComponent'
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

const FindAllFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FindAllFilterComponent);

export default FindAllFilterContainer;


