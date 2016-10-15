import {
	DELETE_TEXT_PROCESSOR,
	TOGGLE_TEXT_PROCESSOR_ENABLE,
	UPDATE_TEXT_PROCESSOR_SEARCH_STRING,
	UPDATE_TEXT_PROCESSOR_DESCRIPTION,
	UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE
} from './actions';

import {combineReducers} from 'redux'

function description(state, action) {
	return state === undefined ? '' : state;
	// if (action.type === UPDATE_REGEXP_FLOW_DESCRIPTION) {
	// 	return action.description
	// } else {
	// 	// Reducer "textProcessors" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
	// 	return state === undefined ? '' : state;
	// }
}

function textProcessors(state, action) {

	switch (action.type) {
		case DELETE_TEXT_PROCESSOR: {
			// FIXME remove state[action.id]
			return (state === undefined ? {} : state);
		}
		case TOGGLE_TEXT_PROCESSOR_ENABLE: {
			let id = action.id;

			let newTextProcessor = Object.assign({}, state[id], {enabled: !state[id].enabled});
			console.log(newTextProcessor);
			let overwrite = {};
			overwrite[id] = newTextProcessor;
			return Object.assign({}, state, overwrite);
		}
		case UPDATE_TEXT_PROCESSOR_SEARCH_STRING: {

			// FIXME
			return (state === undefined ? {} : state);
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
			console.log(newTextProcessor);
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

const mainReducer = combineReducers({
	textProcessors: textProcessors,
	description: description
});

export default mainReducer;
