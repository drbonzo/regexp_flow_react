import {connect} from 'react-redux'

import FindAllTextProcessorComponent from './FindAllTextProcessorComponent'
import {
	updateTextProcecssorSearchString,
	updateTextProcessorDescription,
	updateTextProcessorCaseInsensitive,
	deleteTextProcessor,
	toggleTextProcessorEnabled
} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	searchString: state.textProcessors[ownProps.id].searchString,
	description: state.textProcessors[ownProps.id].description,
	caseInsensitive: state.textProcessors[ownProps.id].caseInsensitive,
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
	onDeleteClick: () => {
		dispatch(deleteTextProcessor(ownProps.id))
	},
	onEnabledClick: () => {
		dispatch(toggleTextProcessorEnabled(ownProps.id))
	}
});

const FindAllTextProcessorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FindAllTextProcessorComponent);

export default FindAllTextProcessorContainer;


