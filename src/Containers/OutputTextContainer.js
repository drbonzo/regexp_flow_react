import {connect} from 'react-redux';

import OutputTextComponent from '../Components/OutputTextComponent';

const mapStateToProps = (state) => ({
    inputText: state.inputText,
    filterConfigs: state.currentRegexpFlow.filterConfigs,
    outputText: state.outputText
});

const OutputTextContainer = connect(
    mapStateToProps,
    null
)(OutputTextComponent);

export default OutputTextContainer;
