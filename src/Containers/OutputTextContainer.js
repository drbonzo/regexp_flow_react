import {connect} from 'react-redux'

import OutputTextComponent from '../Components/OutputTextComponent'

const mapStateToProps = (state, ownProps) => ({
	value: state.outputText
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const OutputTextContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OutputTextComponent);

export default OutputTextContainer;
