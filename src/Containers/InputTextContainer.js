import {connect} from 'react-redux';

import InputTextComponent from '../Components/InputTextComponent';
import {updateInputText} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = (state) => ({
    value: state.app.inputText
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
