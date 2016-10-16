export const UPDATE_REGEXP_FLOW_DESCRIPTION = 'UPDATE_REGEXP_FLOW_DESCRIPTION';
// export const ADD_REPLACE_TEXT_PROCESSOR = 'ADD_REPLACE_TEXT_PROCESSOR';


export const UPDATE_TEXT_PROCESSOR_SEARCH_STRING = 'UPDATE_TEXT_PROCESSOR_SEARCH_STRING';
export const UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE = 'UPDATE_TEXT_PROCESSOR_CASE_INSENSITIVE';
export const UPDATE_TEXT_PROCESSOR_DESCRIPTION = 'UPDATE_TEXT_PROCESSOR_DESCRIPTION';

export const DELETE_TEXT_PROCESSOR = 'DELETE_TEXT_PROCESSOR';
export const TOGGLE_TEXT_PROCESSOR_ENABLED = 'TOGGLE_TEXT_PROCESSOR_ENABLED';
// export function updateRegexpFlowDescription(id, newDescription) {
// 	return {
// 		type: UPDATE_REGEXP_FLOW_DESCRIPTION,
// 		id: id,
// 		description: newDescription
// 	}
// }

// export function addReplaceTextProcessor() {
// 	return {
// 		type: ADD_REPLACE_TEXT_PROCESSOR
// 	};
// }


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
