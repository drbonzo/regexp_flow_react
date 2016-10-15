import {connect} from 'react-redux'

import FindAllTextProcessorComponent from './FindAllTextProcessorComponent'
import {updateTextProcessorDescription} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	searchString: state.textProcessors[ownProps.id].searchString,
	description: state.textProcessors[ownProps.id].description,
	caseInsensitive: state.textProcessors[ownProps.id].caseInsensitive
});

const mapDispatchToProps = (dispatch, ownProps) => ({

	onCaseInsensitiveChange: () => {
		console.log('ci', ownProps.id);
		// FIXME dodaj akcje dispatch(setVisibilityFilter(ownProps.filter))
	},
	onDescriptionChange: (newDescription) => {
		dispatch(updateTextProcessorDescription(ownProps.id, newDescription));
	},
	onDeleteClick: () => {
		console.log('delete', ownProps.id);
		// FIXME dodaj akcje dispatch(setVisibilityFilter(ownProps.filter))
	},
	onPauseClick: () => {
		console.log('pause', ownProps.id);
		// FIXME dodaj akcje dispatch(setVisibilityFilter(ownProps.filter))
	}
});

const FindAllTextProcessorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FindAllTextProcessorComponent);

export default FindAllTextProcessorContainer;


