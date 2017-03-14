import {connect} from 'react-redux';

import TextFieldComponent from '../Components/TextFieldComponent';

import {
	regxpFlowUpdateDescription
} from '../redux/actions';

const mapStateToProps = (state, ownProps) => ({
    value: state.description
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onValueChange: (description) => {
        dispatch(regxpFlowUpdateDescription(description));
    }
});

const RegexpFlowDescriptionContainer = connect(
	mapStateToProps,
 mapDispatchToProps
)(TextFieldComponent);

export default RegexpFlowDescriptionContainer;
