import {
	DELETE_TEXT_PROCESSOR,
	ADD_TEXT_PROCESSOR,
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
let nextId = 1;

function createNewTextProcessor(textProcessorType) {
	// FIXME use textProcessor type
	return {
		id: nextId++,
		type: textProcessorType,
		searchString: '',
		caseInsensitive: false,
		description: '',
		enabled: true
	};
}
function textProcessors(state, action) {

	switch (action.type) {
		case DELETE_TEXT_PROCESSOR: {
			let newState = Object.assign({}, state);
			delete newState[action.id];
			return newState;
		}
		case ADD_TEXT_PROCESSOR: {
			let newState = Object.assign({}, state);
			let newTextProcessor = createNewTextProcessor(action.textProcessorType);
			newState[newTextProcessor.id] = newTextProcessor;
			return newState;
		}
		case TOGGLE_TEXT_PROCESSOR_ENABLED: {
			let id = action.id;
			let textProcessor = state[id];

			let replacement = {enabled: !textProcessor.enabled};

			return textProcessorReducer(state, id, replacement);
		}
		case UPDATE_TEXT_PROCESSOR_SEARCH_STRING: {
			// FIXME nie działa dla każdego z typów
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
			// FIXME nie działa dla każdego z typów
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
