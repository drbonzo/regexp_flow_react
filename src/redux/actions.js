export const REGEXP_FLOW_ADD_FILTER = 'REGEXP_FLOW_ADD_FILTER';
export const REGEXP_FLOW_DELETE_FILTER = 'REGEXP_FLOW_DELETE_FILTER';
export const REGEXP_FLOW_UPDATE_DESCRIPTION = 'REGEXP_FLOW_UPDATE_DESCRIPTION';
export const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';

export const UPDATE_TEXT_PROCESSOR_SEARCH_STRING = 'UPDATE_TEXT_PROCESSOR_SEARCH_STRING';
export const UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE = 'UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE';
export const UPDATE_TEXT_PROCESSOR_DESCRIPTION = 'UPDATE_TEXT_PROCESSOR_DESCRIPTION';
export const UPDATE_MATCH_LINES_INVERT_MATCH = 'UPDATE_MATCH_LINES_INVERT_MATCH';
export const UPDATE_TEXT_PROCESSOR_REPLACE_STRING = 'UPDATE_TEXT_PROCESSOR_REPLACE_STRING';
export const UPDATE_TEXT_PROCESSOR_GLOBAL = 'UPDATE_TEXT_PROCESSOR_GLOBAL';
export const UPDATE_TEXT_PROCESSOR_MULTILINE = 'UPDATE_TEXT_PROCESSOR_MULTILINE';
export const TOGGLE_TEXT_PROCESSOR_ENABLED = 'TOGGLE_TEXT_PROCESSOR_ENABLED';

export function regexpFlowAddFilter(filterType) {
	return {
		type: REGEXP_FLOW_ADD_FILTER,
		textProcessorType: filterType,
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

export function updateTextProcecssorSearchString(id, searchString) {
	return {
		type: UPDATE_TEXT_PROCESSOR_SEARCH_STRING,
		id: id,
		searchString: searchString
	}
}

export function updateReplaceFilterGlobalChange(id) {
	return {
		type: UPDATE_TEXT_PROCESSOR_GLOBAL,
		id: id
	}
}

export function updateReplaceFilterMultilineChange(id) {
	return {
		type: UPDATE_TEXT_PROCESSOR_MULTILINE,
		id: id
	}
}

export function updateReplaceFilterReplaceStringChange(id, replaceString) {
	return {
		type: UPDATE_TEXT_PROCESSOR_REPLACE_STRING,
		id: id,
		replaceString: replaceString
	}
}

export function updateTextProcessorCaseInsensitive(id, caseInsensitive) {
	return {
		type: UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE,
		id: id,
		caseInsensitive: caseInsensitive
	}
}

export function updateTextProcessorDescription(id, description) {
	return {
		type: UPDATE_TEXT_PROCESSOR_DESCRIPTION,
		id: id,
		description: description
	}
}

export function updateMatchLinesInvertMatchChange(id) {
	return {
		type: UPDATE_MATCH_LINES_INVERT_MATCH,
		id: id
	}
}

export function toggleTextProcessorEnabled(id) {
	return {
		type: TOGGLE_TEXT_PROCESSOR_ENABLED,
		id: id
	}
}
