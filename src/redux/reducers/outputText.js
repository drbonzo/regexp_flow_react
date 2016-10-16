import {
	UPDATE_OUTPUT_TEXT,
} from './../actions';

function outputText(state, action) {
	if (action.type === UPDATE_OUTPUT_TEXT) {
		return action.text
	} else {
		// Reducer "textProcessors" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
		return state === undefined ? '' : state;
	}
}
export default outputText;
