import {connect} from 'react-redux'

import RegexpFlowComponent from '../Components/RegexpFlowComponent'

// import {
// 	updateRegexpFlowDescription
// } from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	textProcessors: state.textProcessors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onAddTextProcessorClick: (description) => {
		console.warn('add TP');
		// dispatch(updateRegexpFlowDescription(description));
	},
	onDeleteTextProcessorClick: (description) => {
		console.warn('delete TP');
		// dispatch(updateRegexpFlowDescription(description));
	}
});

const RegexpFlowContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RegexpFlowComponent);

export default RegexpFlowContainer;
