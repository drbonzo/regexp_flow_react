// @flow

import { connect } from 'react-redux';

import ExamplesLoaderComponent from '../Components/ExamplesLoaderComponent';
import { removeAllFilterConfigs } from '../Store/Actions/RegexpFlowActions';
import type { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch<{ type: $Subtype<string> }>) => ({
    loadExampleHandler: example => {
        dispatch(removeAllFilterConfigs());

        for (let a = 0; a < example.actions.length; a++) {
            let action = example.actions[a];
            dispatch(action);
        }
    },
});

const ExamplesLoaderContainer = connect(() => ({}), mapDispatchToProps)(ExamplesLoaderComponent);

export default ExamplesLoaderContainer;
