import {connect} from 'react-redux';

import InputTextComponent from '../Components/InputTextComponent';

import {
    updateInputText
} from '../redux/actions';

const mapStateToProps = (state) => ({
    value: state.currentRegexpFlow.inputText
});

const mapDispatchToProps = (dispatch) => ({
    onValueChange: (text) => {
        dispatch(updateInputText(text));
    }
});

const InputTextContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputTextComponent);

export default InputTextContainer;
