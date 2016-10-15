export const ADD_REPLACE_TEXT_PROCESSOR = 'ADD_REPLACE_TEXT_PROCESSOR';
export const DELETE_TEXT_PROCESSOR = 'DELETE_TEXT_PROCESSOR';

export const UPDATE_REGEXP_FLOW_DESCRIPTION = 'UPDATE_REGEXP_FLOW_DESCRIPTION';

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
