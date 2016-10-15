import {ADD_REPLACE_TEXT_PROCESSOR, DELETE_TEXT_PROCESSOR, UPDATE_REGEXP_FLOW_DESCRIPTION, UPDATE_TEXT_PROCESSOR_DESCRIPTION} from './actions';
import {initialState} from './state'
import {combineReducers} from 'redux'

function description(state, action) {
	if (action.type === UPDATE_REGEXP_FLOW_DESCRIPTION) {
		return action.description
	} else {
		// Reducer "textProcessors" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
		return state === undefined ? '' : state;
	}
}

function textProcessors(state, action) {

	if (action.type === ADD_REPLACE_TEXT_PROCESSOR) {
		return state; // FIXME - id indexing
		// return [
		// 	...state,
		// 	{
		// 		type: 'ReplaceTextProcessor',
		// 		searchRegexp: ''
		// 	}
		// ];

	} else if (action.type === DELETE_TEXT_PROCESSOR) {
		// FIXME implement
		return initialState;

	} else if (action.type === UPDATE_TEXT_PROCESSOR_DESCRIPTION) {
		let id = action.id;
		let description = action.description;

		let newTextProcessor = Object.assign({}, state[id], {description: description});
		let overwrite = {};
		overwrite[id] = newTextProcessor;
		return Object.assign({}, state, overwrite);
	} else {
		// Reducer "textProcessors" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
		return (state === undefined ? [] : state);
	}
}

const mainReducer = combineReducers({
	textProcessors: textProcessors,
	description: description
});

export default mainReducer;
