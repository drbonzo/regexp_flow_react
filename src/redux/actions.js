export const REGEXP_FLOW_ADD_FILTER = 'REGEXP_FLOW_ADD_FILTER';
export const REGEXP_FLOW_DELETE_FILTER = 'REGEXP_FLOW_DELETE_FILTER';
export const REGEXP_FLOW_UPDATE_DESCRIPTION = 'REGEXP_FLOW_UPDATE_DESCRIPTION';
export const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';

export const FILTER_TOGGLE_ENABLED = 'FILTER_TOGGLE_ENABLED';
export const FILTER_TOGGLE_CASE_INSENSITIVE = 'FILTER_TOGGLE_CASE_INSENSITIVE';
export const FILTER_TOGGLE_INVERT_MATCH = 'FILTER_TOGGLE_INVERT_MATCH';
export const FILTER_TOGGLE_GLOBAL = 'FILTER_TOGGLE_GLOBAL';
export const FILTER_TOGGLE_MULTILINE = 'FILTER_TOGGLE_MULTILINE';
export const FILTER_UPDATE_DESCRIPTION = 'FILTER_UPDATE_DESCRIPTION';
export const FILTER_UPDATE_SEARCH_STRING = 'FILTER_UPDATE_SEARCH_STRING';
export const FILTER_UPDATE_REPLACE_STRING = 'FILTER_UPDATE_REPLACE_STRING';

export function regexpFlowAddFilter(filterType) {
	return {
		type: REGEXP_FLOW_ADD_FILTER,
		filterType: filterType,
	};
}

export function regexpFlowDeleteFilter(id) {
	return {
		type: REGEXP_FLOW_DELETE_FILTER,
		id: id
	}
}

export function regxpFlowUpdateDescription(description) {
	return {
		type: REGEXP_FLOW_UPDATE_DESCRIPTION,
		description: description
	}
}

export function updateInputText(text) {
	return {
		type: UPDATE_INPUT_TEXT,
		text: text
	}
}

export function filterToggleEnabled(id) {
	return {
		type: FILTER_TOGGLE_ENABLED,
		id: id
	}
}

export function filterToggleCaseInsensitive(id, caseInsensitive) {
	return {
		type: FILTER_TOGGLE_CASE_INSENSITIVE,
		id: id,
		caseInsensitive: caseInsensitive
	}
}

export function filterToggleInvertMatch(id) {
	return {
		type: FILTER_TOGGLE_INVERT_MATCH,
		id: id
	}
}

export function filterToggleGlobal(id) {
	return {
		type: FILTER_TOGGLE_GLOBAL,
		id: id
	}
}

export function filterToggleMultiline(id) {
	return {
		type: FILTER_TOGGLE_MULTILINE,
		id: id
	}
}

export function filterUpdateDescription(id, description) {
	return {
		type: FILTER_UPDATE_DESCRIPTION,
		id: id,
		description: description
	}
}

export function filterUpdateSearchString(id, searchString) {
	return {
		type: FILTER_UPDATE_SEARCH_STRING,
		id: id,
		searchString: searchString
	}
}

export function filterUpdateReplaceString(id, replaceString) {
	return {
		type: FILTER_UPDATE_REPLACE_STRING,
		id: id,
		replaceString: replaceString
	}
}
