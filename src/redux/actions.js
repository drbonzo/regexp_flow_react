export const UPDATE_REGEXP_FLOW_DESCRIPTION = 'UPDATE_REGEXP_FLOW_DESCRIPTION';
export const ADD_TEXT_PROCESSOR = 'ADD_TEXT_PROCESSOR';

export const UPDATE_TEXT_PROCESSOR_SEARCH_STRING = 'UPDATE_TEXT_PROCESSOR_SEARCH_STRING';
export const UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE = 'UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE';
export const UPDATE_TEXT_PROCESSOR_DESCRIPTION = 'UPDATE_TEXT_PROCESSOR_DESCRIPTION';
export const UPDATE_MATCH_LINES_INVERT_MATCH = 'UPDATE_MATCH_LINES_INVERT_MATCH';

export const DELETE_TEXT_PROCESSOR = 'DELETE_TEXT_PROCESSOR';
export const TOGGLE_TEXT_PROCESSOR_ENABLED = 'TOGGLE_TEXT_PROCESSOR_ENABLED';

export const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';

export function updateRegexpFlowDescription(description) {
	return {
		type: UPDATE_REGEXP_FLOW_DESCRIPTION,
		description: description
	}
}

export function addTextProcessor(filterType) {
	return {
		type: ADD_TEXT_PROCESSOR,
		textProcessorType: filterType,
	};
}


export function updateTextProcecssorSearchString(id, searchString) {
	return {
		type: UPDATE_TEXT_PROCESSOR_SEARCH_STRING,
		id: id,
		searchString: searchString
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

export function deleteTextProcessor(id) {
	return {
		type: DELETE_TEXT_PROCESSOR,
		id: id
	}
}

export function toggleTextProcessorEnabled(id) {
	return {
		type: TOGGLE_TEXT_PROCESSOR_ENABLED,
		id: id
	}
}

export function updateInputText(text) {
	return {
		type: UPDATE_INPUT_TEXT,
		text: text
	}
}
