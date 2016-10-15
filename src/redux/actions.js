export const ADD_REPLACE_TEXT_PROCESSOR = 'ADD_REPLACE_TEXT_PROCESSOR';
export const DELETE_TEXT_PROCESSOR = 'DELETE_TEXT_PROCESSOR';

export const UPDATE_REGEXP_FLOW_DESCRIPTION = 'UPDATE_REGEXP_FLOW_DESCRIPTION';

export const UPDATE_FIND_ALL_TEXT_PROCESSOR_SEARCH_STRING = 'UPDATE_FIND_ALL_TEXT_PROCESSOR_SEARCH_STRING';
export const UPDATE_TEXT_PROCESSOR_DESCRIPTION = 'UPDATE_TEXT_PROCESSOR_DESCRIPTION';

export function addReplaceTextProcessor() {
	return {
		type: ADD_REPLACE_TEXT_PROCESSOR
	};
}

export function deleteTextProcessor(id) {
	return {
		type: DELETE_TEXT_PROCESSOR,
		id: id
	}
}

export function updateRegexpFlowDescription(newDescription) {
	return {
		type: UPDATE_REGEXP_FLOW_DESCRIPTION,
		description: newDescription
	}
}

export function updateFindAllTextProcecssorSearchString(searchString) {
	return {
		type: UPDATE_FIND_ALL_TEXT_PROCESSOR_SEARCH_STRING,
		searchString: searchString
	}
}

export function updateTextProcecssorDescription(newDescription) {
	return {
		type: UPDATE_TEXT_PROCESSOR_DESCRIPTION,
		description: newDescription
	}
}
