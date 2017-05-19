import {connect} from 'react-redux';

import OutputTextComponent from '../Components/OutputTextComponent';

const mapStateToProps = (state) => ({
    inputText: state.currentRegexpFlow.inputText,
    filterConfigs: state.currentRegexpFlow.filterConfigs,
    outputText: state.currentRegexpFlow.outputText
});

const OutputTextContainer = connect(
    mapStateToProps,
    null
)(OutputTextComponent);

export default OutputTextContainer;
