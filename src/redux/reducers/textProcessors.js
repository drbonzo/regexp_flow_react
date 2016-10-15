import {
	DELETE_TEXT_PROCESSOR,
	TOGGLE_TEXT_PROCESSOR_ENABLED,
	UPDATE_TEXT_PROCESSOR_SEARCH_STRING,
	UPDATE_TEXT_PROCESSOR_DESCRIPTION,
	UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE
} from './../actions';

function textProcessors(state, action) {

	switch (action.type) {
		case DELETE_TEXT_PROCESSOR: {
			let newState = Object.assign({}, state);
			delete newState[action.id];
			return newState;
		}
		case TOGGLE_TEXT_PROCESSOR_ENABLED: {
			let id = action.id;

			let newTextProcessor = Object.assign({}, state[id], {enabled: !state[id].enabled});
			let overwrite = {};
			overwrite[id] = newTextProcessor;
			return Object.assign({}, state, overwrite);
		}
		case UPDATE_TEXT_PROCESSOR_SEARCH_STRING: {
			let id = action.id;
			let searchString = action.searchString;

			let newTextProcessor = Object.assign({}, state[id], {searchString: searchString});
			let overwrite = {};
			overwrite[id] = newTextProcessor;
			return Object.assign({}, state, overwrite);
		}
		case UPDATE_TEXT_PROCESSOR_DESCRIPTION: {

			let id = action.id;
			let description = action.description;

			let newTextProcessor = Object.assign({}, state[id], {description: description});
			let overwrite = {};
			overwrite[id] = newTextProcessor;
			return Object.assign({}, state, overwrite);
		}
		case UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE: {

			let id = action.id;

			let newTextProcessor = Object.assign({}, state[id], {caseInsensitive: !state[id].caseInsensitive});
			let overwrite = {};
			overwrite[id] = newTextProcessor;
			return Object.assign({}, state, overwrite);
		}
		default: {
			// Reducer "textProcessors" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
			return (state === undefined ? {} : state);
		}
	}
}

export default textProcessors;
