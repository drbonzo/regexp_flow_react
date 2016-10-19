import {connect} from 'react-redux'

import UniqueFilterComponent from '../Components/UniqueFilterComponent'
import {
	updateTextProcessorDescription,
	toggleTextProcessorEnabled,
	deleteTextProcessor
} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	description: state.textProcessors[ownProps.id].description,
	enabled: state.textProcessors[ownProps.id].enabled
});

const mapDispatchToProps = (dispatch, ownProps) => ({

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

const UniqueFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UniqueFilterComponent);

export default UniqueFilterContainer;
