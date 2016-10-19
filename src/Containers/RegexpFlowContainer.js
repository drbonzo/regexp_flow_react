import {connect} from 'react-redux'
import RegexpFlowComponent from '../Components/RegexpFlowComponent'
import {addTextProcessor} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	textProcessors: state.textProcessors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onAddTextProcessorClick: (filterType) => {
		dispatch(addTextProcessor(filterType));
	}
});

const RegexpFlowContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RegexpFlowComponent);

export default RegexpFlowContainer;
