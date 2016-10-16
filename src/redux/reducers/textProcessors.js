import {
	DELETE_TEXT_PROCESSOR,
	TOGGLE_TEXT_PROCESSOR_ENABLED,
	UPDATE_TEXT_PROCESSOR_SEARCH_STRING,
	UPDATE_TEXT_PROCESSOR_DESCRIPTION,
	UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE
} from './../actions';

function textProcessorReducer(state, id, replacement) {
	let newTextProcessor = Object.assign({}, state[id], replacement);
	let overwrite = {};
	overwrite[id] = newTextProcessor;
	return Object.assign({}, state, overwrite);
}
function textProcessors(state, action) {

	switch (action.type) {
		case DELETE_TEXT_PROCESSOR: {
			let newState = Object.assign({}, state);
			delete newState[action.id];
			return newState;
		}
		case TOGGLE_TEXT_PROCESSOR_ENABLED: {
			let id = action.id;
			let textProcessor = state[id];

			let replacement = {enabled: !textProcessor.enabled};

			return textProcessorReducer(state, id, replacement);
		}
		case UPDATE_TEXT_PROCESSOR_SEARCH_STRING: {
			let id = action.id;

			let searchString = action.searchString;
			let replacement = {searchString: searchString};

			return textProcessorReducer(state, id, replacement);
		}
		case UPDATE_TEXT_PROCESSOR_DESCRIPTION: {
			let id = action.id;

			let description = action.description;
			let replacement = {description: description};

			return textProcessorReducer(state, id, replacement);
		}
		case UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE: {
			let id = action.id;

			let replacement = {caseInsensitive: !state[id].caseInsensitive};

			return textProcessorReducer(state, id, replacement);
		}
		default: {
			// Reducer "textProcessors" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
			return (state === undefined ? {} : state);
		}
	}
}

export default textProcessors;
