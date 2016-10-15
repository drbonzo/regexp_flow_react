import {ADD_REPLACE_TEXT_PROCESSOR, DELETE_TEXT_PROCESSOR, UPDATE_REGEXP_FLOW_DESCRIPTION} from './actions';
import {initialState} from './state'
import {combineReducers} from 'redux'

function description(state, action) {
	if (action.type === UPDATE_REGEXP_FLOW_DESCRIPTION) {
		return action.description
	} else {
		return state;
	}
}

function textProcessors(state, action) {

	if (action.type === ADD_REPLACE_TEXT_PROCESSOR) {
		return {
			textProcessors: [
				...state.textProcessors,
				{
					type: 'ReplaceTextProcessor',
					searchRegexp: ''
				}
			]
		}

	} else if (action.type === DELETE_TEXT_PROCESSOR) {
		// FIXME implement
		return initialState;

	} else {
		return initialState;
	}
}

const mainReducer = combineReducers({
	textProcessors: textProcessors,
	description: description
});

export default mainReducer;
