import {connect} from 'react-redux'
import RegexpFlowComponent from '../Components/RegexpFlowComponent'
import {regexpFlowAddFilter} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	textProcessors: state.filterConfigs
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onAddTextProcessorClick: (filterType) => {
		dispatch(regexpFlowAddFilter(filterType));
	}
});

const RegexpFlowContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RegexpFlowComponent);

export default RegexpFlowContainer;
