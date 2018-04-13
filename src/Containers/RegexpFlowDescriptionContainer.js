import {connect} from 'react-redux';

import TextFieldComponent from '../Components/TextFieldComponent';
import {regxpFlowUpdateDescription} from '../Store/Actions/RegexpFlowActions';

const mapStateToProps = (state) => ({
    value: state.app.currentRegexpFlow.description
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
