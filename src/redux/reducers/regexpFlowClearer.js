import {
    CLEAR_REGEXP_FLOW,
} from './../actions';

function regexpFlowClearer(state, action) {
    if (action.type === CLEAR_REGEXP_FLOW) {

        const newState = Object.assign({}, state);

        newState.currentRegexpFlow = {
            id: null,
            description: '',
            filterConfigs: {}
        };

        newState.inputText = '';
        newState.outputText = '';

        return newState;

    } else {
        return state === undefined ? '' : state;
    }
}

export default regexpFlowClearer;
