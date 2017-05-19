import {connect} from 'react-redux';

import TextFieldComponent from '../Components/TextFieldComponent';

import {
    regxpFlowUpdateDescription
} from '../redux/actions';

const mapStateToProps = (state) => ({
    value: state.currentRegexpFlow.description
});

const mapDispatchToProps = (dispatch) => ({
    onValueChange: (description) => {
        dispatch(regxpFlowUpdateDescription(description));
    }
});

const RegexpFlowDescriptionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextFieldComponent);

export default RegexpFlowDescriptionContainer;
