import {
	REGEXP_FLOW_UPDATE_DESCRIPTION,
} from './../actions';

function description(state, action) {
	if (action.type === REGEXP_FLOW_UPDATE_DESCRIPTION) {
		return action.description
	} else {
		// Reducer "textProcessors" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
		return state === undefined ? '' : state;
	}
}
export default description;
