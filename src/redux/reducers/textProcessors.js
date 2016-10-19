import {
	DELETE_TEXT_PROCESSOR,
	ADD_TEXT_PROCESSOR,
	TOGGLE_TEXT_PROCESSOR_ENABLED,
	UPDATE_TEXT_PROCESSOR_SEARCH_STRING,
	UPDATE_TEXT_PROCESSOR_DESCRIPTION,
	UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE
} from './../actions';

import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig'
import MatchLinesFilterConfig from '../../RegexpFlow/FilterConfig/MatchLinesFilterConfig'
import MatchInLineFilterConfig from '../../RegexpFlow/FilterConfig/MatchInLineFilterConfig'
import ReplaceFilterConfig from '../../RegexpFlow/FilterConfig/ReplaceFilterConfig'
import UniqueFilterConfig from '../../RegexpFlow/FilterConfig/UniqueFilterConfig'

function textProcessorReducer(state, id, replacement) {
	let newTextProcessor = Object.assign({}, state[id], replacement);
	let overwrite = {};
	overwrite[id] = newTextProcessor;
	return Object.assign({}, state, overwrite);
}
let nextId = 1;

/**
 * @param {String} filterType
 * @returns {FilterConfig|null}
 */
function createNewTextProcessor(filterType) {
	switch (filterType) {
		case 'FindAll': {
			let config = new FindAllFilterConfig();
			config.searchString = '\\b.+?\\b';
			config.id = nextId++;
			return config;
		}
		case 'MatchLines': {
			let config = new MatchLinesFilterConfig();
			config.searchString = '';// will match all lines
			config.id = nextId++;
			return config;
		}
		case 'MatchInLines': {
			let config = new MatchInLineFilterConfig();
			config.searchString = '^.*$';
			config.id = nextId++;
			return config;
		}
		case 'Replace': {
			let config = new ReplaceFilterConfig();
			config.searchString = '^(.+?)$';
			config.replaceString = '$1';
			config.id = nextId++;
			return config;
		}
		case 'Unique': {
			let config = new UniqueFilterConfig();
			config.id = nextId++;
			return config;
		}
		default: {
			return null;
		}
	}
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
