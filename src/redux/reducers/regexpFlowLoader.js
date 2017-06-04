import {
    LOAD_REGEXP_FLOW,
} from './../actions';

function cloneFilterConfigs(filterConfigs) {
    return JSON.parse(JSON.stringify(filterConfigs));
}

function regexpFlowLoader(state, action) {
    if (action.type === LOAD_REGEXP_FLOW) {

        const newState = Object.assign({}, state);
        const requestedId = Number(action.id);

        const requestedRegexpFlow = state.regexpFlows.find((regexpFlow) => {
            return regexpFlow.id === requestedId;
        });

        if (requestedRegexpFlow) {
            newState.inputText = '';
            newState.outputText = '';
            newState.currentRegexpFlow = {
                id: requestedRegexpFlow.id,
                description: requestedRegexpFlow.description,
                filterConfigs: cloneFilterConfigs(requestedRegexpFlow.filterConfigs)
            };
            return newState;
        } else {
            // dont change anything
            return newState;
        }


    } else {
        return state === undefined ? '' : state;
    }
}

export default regexpFlowLoader;
