// @flow

import type {ApplicationState} from './ApplicationState';

export const initialState: ApplicationState = {
    app: {
        inputText: '',
        outputText: '',
        currentRegexpFlow: {
            id: null,
            description: '',
            filterConfigs: {}
        },
        regexpFlows: [],
        nextRegexpFlowIndex: 1
    }
};
