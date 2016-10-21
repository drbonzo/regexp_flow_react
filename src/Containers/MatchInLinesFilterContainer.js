import {connect} from 'react-redux'

import MatchInLinesFilterComponent from '../Components/MatchInLinesFilterComponent'
import {
	filterUpdateSearchString,
	filterToggleCaseInsensitive,
	filterUpdateDescription,
	filterToggleEnabled,
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
		dispatch(filterUpdateSearchString(ownProps.id, newSearchString));
	},
	onCaseInsensitiveChange: () => {
		dispatch(filterToggleCaseInsensitive(ownProps.id))
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

const MatchInLinesFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchInLinesFilterComponent);

export default MatchInLinesFilterContainer;
