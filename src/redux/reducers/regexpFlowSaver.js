import {
    SAVE_REGEXP_FLOW,
} from './../actions';
import RegexpFlow from '../../RegexpFlow/RegexpFlow';

function cloneFilterConfigs(filterConfigs) {
    return JSON.parse(JSON.stringify(filterConfigs));
}

function regexpFlowSaver(state, action) {
    if (action.type === SAVE_REGEXP_FLOW) {

        // Clone mutable state
        const newState = Object.assign({}, state);
        newState.currentRegexpFlow = Object.assign({}, state.currentRegexpFlow);
        newState.regexpFlows = [...state.regexpFlows];

        let regexpFlowIndexToUpdate = undefined;
        state.regexpFlows.forEach((regexpFlow, index) => {
            if (regexpFlow.id === action.id) {
                regexpFlowIndexToUpdate = index;
            }
        });

        if (regexpFlowIndexToUpdate) {
            // we have existing RegexpFlow with the same ID
            const clonedRegexpFlow = new RegexpFlow();
            clonedRegexpFlow.id = state.currentRegexpFlow.id;
            clonedRegexpFlow.description = state.currentRegexpFlow.description;
            clonedRegexpFlow.filterConfigs = cloneFilterConfigs(state.currentRegexpFlow.filterConfigs);

            newState.regexpFlows[regexpFlowIndexToUpdate] = clonedRegexpFlow;

        } else {
            // save new object
            const newId = state.nextRegexpFlowIndex;
            newState.currentRegexpFlow.id = newId;

            const persistedRegexpFlow = new RegexpFlow();
            persistedRegexpFlow.id = newId;
            persistedRegexpFlow.description = state.currentRegexpFlow.description;
            persistedRegexpFlow.filterConfigs = cloneFilterConfigs(state.currentRegexpFlow.filterConfigs);

            newState.regexpFlows.push(persistedRegexpFlow);
            newState.nextRegexpFlowIndex++;
        }

        return newState;
    } else {
        return state === undefined ? '' : state;
    }
}
export default regexpFlowSaver;
