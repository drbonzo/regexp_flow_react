// @flow

import { connect } from 'react-redux';

import InputTextComponent from '../Components/InputTextComponent';
import { updateInputText } from '../Store/Actions/RegexpFlowActions';
import type { Dispatch } from 'redux';

const mapStateToProps = state => ({
    value: state.app.inputText,
});

const mapDispatchToProps = (dispatch: Dispatch<{ type: $Subtype<string> }>) => ({
    onValueChange: text => {
        dispatch(updateInputText(text));
    },
});

const InputTextContainer = connect(mapStateToProps, mapDispatchToProps)(InputTextComponent);

export default InputTextContainer;
