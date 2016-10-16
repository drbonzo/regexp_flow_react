import {connect} from 'react-redux'

import TextFieldComponent from './TextFieldComponent'

import {
	updateRegexpFlowDescription
} from '../redux/actions'

const mapStateToProps = (state, ownProps) => ({
	value: state.description
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onValueChange: (description) => {
		dispatch(updateRegexpFlowDescription(description));
	}
});

const RegexpFlowDescriptionContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TextFieldComponent);

export default RegexpFlowDescriptionContainer;
