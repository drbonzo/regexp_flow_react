import {
    SAVE_REGEXP_FLOW,
} from './../actions';

function regexpFlowSaver(state, action) {
    if (action.type === SAVE_REGEXP_FLOW) {

        const newState = Object.assign({}, state);

        // FIXME add new one
        // FIXME or update existing one

        return newState;
    } else {
        return state === undefined ? '' : state;
    }
}
export default regexpFlowSaver;
