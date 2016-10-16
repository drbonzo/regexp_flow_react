import {connect} from 'react-redux'

import OutputTextComponent from '../Components/OutputTextComponent'

const mapStateToProps = (state, ownProps) => ({
	inputText: state.inputText,
	textProcessors: state.textProcessors
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const OutputTextContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OutputTextComponent);

export default OutputTextContainer;
