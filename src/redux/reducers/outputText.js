function outputText(state, action) {
	// Reducer "textProcessors" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
	return state === undefined ? '' : state;
}
export default outputText;
