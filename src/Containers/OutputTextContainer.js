// @flow
import { connect } from 'react-redux';

import OutputTextComponent from '../Components/OutputTextComponent';

const mapStateToProps = state => ({
    inputText: state.app.inputText,
    filterConfigs: state.app.currentRegexpFlow.filterConfigs,
    outputText: state.app.outputText,
});

const OutputTextContainer = connect(mapStateToProps, null)(OutputTextComponent);

export default OutputTextContainer;
