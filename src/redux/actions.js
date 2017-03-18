export const REGEXP_FLOW_ADD_FILTER = 'REGEXP_FLOW_ADD_FILTER';
export const REGEXP_FLOW_DELETE_FILTER = 'REGEXP_FLOW_DELETE_FILTER';
export const REGEXP_FLOW_UPDATE_DESCRIPTION = 'REGEXP_FLOW_UPDATE_DESCRIPTION';
export const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
export const REMOVE_ALL_FILTERS = 'REMOVE_ALL_FILTERS';

export const FILTER_TOGGLE_ENABLED = 'FILTER_TOGGLE_ENABLED';
export const FILTER_TOGGLE_CASE_INSENSITIVE = 'FILTER_TOGGLE_CASE_INSENSITIVE';
export const FILTER_TOGGLE_INVERT_MATCH = 'FILTER_TOGGLE_INVERT_MATCH';
export const FILTER_TOGGLE_GLOBAL = 'FILTER_TOGGLE_GLOBAL';
export const FILTER_TOGGLE_MULTILINE = 'FILTER_TOGGLE_MULTILINE';
export const FILTER_TOGGLE_ADD_COUNTER = 'FILTER_TOGGLE_ADD_COUNTER';
export const FILTER_SET_COUNTER_SEPARATOR = 'FILTER_SET_COUNTER_SEPARATOR';
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
    };
}

export function regxpFlowUpdateDescription(description) {
    return {
        type: REGEXP_FLOW_UPDATE_DESCRIPTION,
        description: description
    };
}

export function updateInputText(text) {
    return {
        type: UPDATE_INPUT_TEXT,
        text: text
    };
}

export function removeAllFilterConfigs() {
    return {
        type: REMOVE_ALL_FILTERS
    };
}

export function filterToggleEnabled(id) {
    return {
        type: FILTER_TOGGLE_ENABLED,
        id: id
    };
}

export function filterToggleCaseInsensitive(id) {
    return {
        type: FILTER_TOGGLE_CASE_INSENSITIVE,
        id: id
    };
}

export function filterToggleInvertMatch(id) {
    return {
        type: FILTER_TOGGLE_INVERT_MATCH,
        id: id
    };
}

export function filterToggleGlobal(id) {
    return {
        type: FILTER_TOGGLE_GLOBAL,
        id: id
    };
}

export function filterToggleMultiline(id) {
    return {
        type: FILTER_TOGGLE_MULTILINE,
        id: id
    };
}

export function filterToggleAddCounter(id) {
    return {
        type: FILTER_TOGGLE_ADD_COUNTER,
        id: id
    };
}

export function filterSetCounterSeparator(id, counterSeparator) {
    return {
        type: FILTER_SET_COUNTER_SEPARATOR,
        id: id,
        counterSeparator: counterSeparator
    };
}

export function filterUpdateDescription(id, description) {
    return {
        type: FILTER_UPDATE_DESCRIPTION,
        id: id,
        description: description
    };
}

export function filterUpdateSearchString(id, searchString) {
    return {
        type: FILTER_UPDATE_SEARCH_STRING,
        id: id,
        searchString: searchString
    };
}

export function filterUpdateReplaceString(id, replaceString) {
    return {
        type: FILTER_UPDATE_REPLACE_STRING,
        id: id,
        replaceString: replaceString
    };
}
