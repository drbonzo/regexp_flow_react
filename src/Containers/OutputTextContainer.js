import {connect} from 'react-redux'

import OutputTextComponent from '../Components/OutputTextComponent'

const mapStateToProps = (state, ownProps) => ({
	inputText: state.inputText,
	filterConfigs: state.filterConfigs,
	outputText: state.outputText
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const OutputTextContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OutputTextComponent);

export default OutputTextContainer;
