import {
    DELETE_REGEXP_FLOW,
} from './../actions';

function regexpFlowDeleter(state, action) {
    if (action.type === DELETE_REGEXP_FLOW) {

        // Clone mutable state
        const newState = Object.assign({}, state);
        newState.currentRegexpFlow = Object.assign({}, state.currentRegexpFlow);
        newState.regexpFlows = state.regexpFlows.filter((regexpFlow) => {
            // Leave only not-deleted RegexpFlows
            return regexpFlow.id !== action.id;
        });

        return newState;

    } else {
        return state === undefined ? '' : state;
    }
}
export default regexpFlowDeleter;
