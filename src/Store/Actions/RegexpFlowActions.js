// @flow
import MatchLinesFilterConfig from '../../RegexpFlow/FilterConfig/MatchLinesFilterConfig';
import UniqueFilterConfig from '../../RegexpFlow/FilterConfig/UniqueFilterConfig';
import MatchInLinesFilterConfig from '../../RegexpFlow/FilterConfig/MatchInLinesFilterConfig';
import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig';
import SortLinesFilterConfig from '../../RegexpFlow/FilterConfig/SortLinesFilterConfig';
import ReplaceFilterConfig from '../../RegexpFlow/FilterConfig/ReplaceFilterConfig';
import type { FilterConfigType, FilterType, FilterConfigCollection, FilterConfigId, RegexpFlowId } from '../../RegexpFlow/BasicTypes';
import RegexpFlow from '../../RegexpFlow/RegexpFlow';
import type { ApplicationAppState } from '../ApplicationState';
import { push } from 'react-router-redux';

// ACTION TYPES
export const REGEXP_FLOW_UPDATE_DESCRIPTION = 'REGEXP_FLOW_UPDATE_DESCRIPTION'; // FIXME rename action
export const REGEXP_FLOW_DELETE_FILTER = 'REGEXP_FLOW_DELETE_FILTER';
export const REGEXP_FLOW_ADD_FILTER = 'REGEXP_FLOW_ADD_FILTER';
export const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
export const REMOVE_ALL_FILTERS = 'REMOVE_ALL_FILTERS';
export const FILTER_TOGGLE_ENABLED = 'FILTER_TOGGLE_ENABLED';
export const FILTER_TOGGLE_CASE_INSENSITIVE = 'FILTER_TOGGLE_CASE_INSENSITIVE';
export const FILTER_TOGGLE_INVERT_MATCH = 'FILTER_TOGGLE_INVERT_MATCH';
export const FILTER_TOGGLE_GLOBAL = 'FILTER_TOGGLE_GLOBAL';
export const FILTER_TOGGLE_MULTILINE = 'FILTER_TOGGLE_MULTILINE';
export const FILTER_TOGGLE_ADD_COUNTER = 'FILTER_TOGGLE_ADD_COUNTER';
export const FILTER_SET_COUNTER_SEPARATOR = 'FILTER_SET_COUNTER_SEPARATOR';
export const FILTER_TOGGLE_INVERT_ORDER = 'FILTER_TOGGLE_INVERT_ORDER';
export const FILTER_UPDATE_DESCRIPTION = 'FILTER_UPDATE_DESCRIPTION';
export const FILTER_UPDATE_SEARCH_STRING = 'FILTER_UPDATE_SEARCH_STRING';
export const FILTER_UPDATE_REPLACE_STRING = 'FILTER_UPDATE_REPLACE_STRING';

export const CLEAR_CURRENT_REGEXP_FLOW = 'CLEAR_CURRENT_REGEXP_FLOW';
export const LOAD_REGEXP_FLOW = 'LOAD_REGEXP_FLOW';
export const SAVE_REGEXP_FLOW = 'SAVE_REGEXP_FLOW';
export const DELETE_REGEXP_FLOW = 'DELETE_REGEXP_FLOW';

// FLOW TYPES FOR ACTIONS
export type RegexpFlowUpdateDescriptionAction = {
    type: 'REGEXP_FLOW_UPDATE_DESCRIPTION',
    description: string,
};

export type RegexpFlowDeleteFilterAction = {
    type: 'REGEXP_FLOW_DELETE_FILTER',
    id: string,
};

export type RegexpFlowUpdateInputTextAction = {
    type: 'UPDATE_INPUT_TEXT',
    text: string,
};

export type ClearCurrentRegexpFlowAction = {
    type: 'CLEAR_CURRENT_REGEXP_FLOW',
};

export type DeleteRegexpFlowAction = {
    id: RegexpFlowId,
    type: 'DELETE_REGEXP_FLOW',
};

export type LoadRegexpFlowAction = {
    id: RegexpFlowId,
    type: 'LOAD_REGEXP_FLOW',
};

export type SaveRegexpFlowAction = {
    type: 'SAVE_REGEXP_FLOW',
};

export type RegexpFlowAddFilterAction = {
    type: 'REGEXP_FLOW_ADD_FILTER',
    filterType: FilterType,
    nextId: number,
};

export type AllRegexpFlowActions = RegexpFlowUpdateDescriptionAction | RegexpFlowDeleteFilterAction | RegexpFlowUpdateInputTextAction | ClearCurrentRegexpFlowAction | DeleteRegexpFlowAction | LoadRegexpFlowAction | SaveRegexpFlowAction;

// ACTION CREATORS

export const regxpFlowUpdateDescription = (description: string): RegexpFlowUpdateDescriptionAction => {
    return {
        type: REGEXP_FLOW_UPDATE_DESCRIPTION,
        description: description,
    };
};

export const regexpFlowDeleteFilter = (id: string): RegexpFlowDeleteFilterAction => {
    return {
        type: REGEXP_FLOW_DELETE_FILTER,
        id: id,
    };
};

export const descriptionReducer = (state: string, action: RegexpFlowUpdateDescriptionAction): string => {
    if (action.type === REGEXP_FLOW_UPDATE_DESCRIPTION) {
        return action.description;
    } else {
        // Reducer "filterConfigs" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
        return state === undefined ? '' : state;
    }
};

export function regexpFlowAddFilter(filterType: FilterType, nextId: number): RegexpFlowAddFilterAction {
    return {
        type: REGEXP_FLOW_ADD_FILTER,
        filterType: filterType,
        nextId: nextId,
    };
}

export function updateInputText(text: string): RegexpFlowUpdateInputTextAction {
    return {
        type: UPDATE_INPUT_TEXT,
        text: text,
    };
}

export function removeAllFilterConfigs() {
    return {
        type: REMOVE_ALL_FILTERS,
    };
}

export function filterToggleEnabled(id: FilterConfigId) {
    return {
        type: FILTER_TOGGLE_ENABLED,
        id: id,
    };
}

export function filterToggleCaseInsensitive(id: FilterConfigId) {
    return {
        type: FILTER_TOGGLE_CASE_INSENSITIVE,
        id: id,
    };
}

export function filterToggleInvertMatch(id: FilterConfigId) {
    return {
        type: FILTER_TOGGLE_INVERT_MATCH,
        id: id,
    };
}

export function filterToggleGlobal(id: FilterConfigId) {
    return {
        type: FILTER_TOGGLE_GLOBAL,
        id: id,
    };
}

export function filterToggleMultiline(id: FilterConfigId) {
    return {
        type: FILTER_TOGGLE_MULTILINE,
        id: id,
    };
}

export function filterToggleAddCounter(id: FilterConfigId) {
    return {
        type: FILTER_TOGGLE_ADD_COUNTER,
        id: id,
    };
}

export function filterSetCounterSeparator(id: FilterConfigId, counterSeparator: string) {
    return {
        type: FILTER_SET_COUNTER_SEPARATOR,
        id: id,
        counterSeparator: counterSeparator,
    };
}

export function filterToggleInvertOrder(id: FilterConfigId) {
    return {
        type: FILTER_TOGGLE_INVERT_ORDER,
        id: id,
    };
}

export function filterUpdateDescription(id: FilterConfigId, description: string) {
    return {
        type: FILTER_UPDATE_DESCRIPTION,
        id: id,
        description: description,
    };
}

export function filterUpdateSearchString(id: FilterConfigId, searchString: string) {
    return {
        type: FILTER_UPDATE_SEARCH_STRING,
        id: id,
        searchString: searchString,
    };
}

export function filterUpdateReplaceString(id: FilterConfigId, replaceString: string) {
    return {
        type: FILTER_UPDATE_REPLACE_STRING,
        id: id,
        replaceString: replaceString,
    };
}

export function clearRegexpFlow(): ClearCurrentRegexpFlowAction {
    return {
        type: CLEAR_CURRENT_REGEXP_FLOW, // FIXME rename
    };
}

export function loadRegexpFlow(id: RegexpFlowId) {
    return {
        type: LOAD_REGEXP_FLOW,
        id: String(id),
    };
}

/**
 * @returns {{type: String}}
 */
export function saveRegexpFlow() {
    return {
        type: SAVE_REGEXP_FLOW,
    };
}

export function deleteRegexpFlow(id: RegexpFlowId) {
    return {
        type: DELETE_REGEXP_FLOW,
        id: id,
    };
}

export function navigateToEditFlowScreen() {
    // Uses: react-router-redux
    return push('/editor');
}

export const createNewFilterConfig = (filterType: FilterType, nextId: number): FilterConfigType | null => {
    switch (filterType) {
        case FindAllFilterConfig.FILTER_TYPE: {
            let config = new FindAllFilterConfig();
            config.searchString = '\\b.+?\\b';
            config.id = nextId;
            return config;
        }
        case MatchLinesFilterConfig.FILTER_TYPE: {
            let config = new MatchLinesFilterConfig();
            config.searchString = ''; // will match all lines
            config.id = nextId;
            return config;
        }
        case MatchInLinesFilterConfig.FILTER_TYPE: {
            let config = new MatchInLinesFilterConfig();
            config.searchString = '^.*$';
            config.id = nextId;
            return config;
        }
        case ReplaceFilterConfig.FILTER_TYPE: {
            let config = new ReplaceFilterConfig();
            config.searchString = '^(.+?)$';
            config.replaceString = '$1';
            config.id = nextId;
            return config;
        }
        case UniqueFilterConfig.FILTER_TYPE: {
            let config = new UniqueFilterConfig();
            config.id = nextId;
            return config;
        }
        case SortLinesFilterConfig.FILTER_TYPE: {
            let config = new SortLinesFilterConfig();
            config.id = nextId;
            return config;
        }
        default: {
            return null;
        }
    }
};

function filterConfigReplacer(state, id, replacement) {
    let newFilterConfig = Object.assign({}, state[id], replacement);
    let overwrite = {};
    overwrite[id] = newFilterConfig;
    return Object.assign({}, state, overwrite);
}

// FIXME any action
export const filterConfigsReducer = (state: FilterConfigCollection, action: any): FilterConfigCollection => {
    switch (action.type) {
        case REGEXP_FLOW_DELETE_FILTER: {
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        }
        case REGEXP_FLOW_ADD_FILTER: {
            let newState = Object.assign({}, state);
            let newFilterConfig = createNewFilterConfig(action.filterType, action.nextId);
            if (newFilterConfig) {
                newState[newFilterConfig.id] = newFilterConfig;
            }
            return newState;
        }
        case REMOVE_ALL_FILTERS: {
            return {};
        }
        case FILTER_TOGGLE_ENABLED: {
            let id = action.id;
            let filterConfig = state[id];

            let replacement = { enabled: !filterConfig.enabled };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_UPDATE_SEARCH_STRING: {
            let id = action.id;

            let searchString = action.searchString;
            let replacement = { searchString: searchString };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_UPDATE_DESCRIPTION: {
            let id = action.id;

            let description = action.description;
            let replacement = { description: description };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_TOGGLE_CASE_INSENSITIVE: {
            let id = action.id;
            let replacement = { caseInsensitive: !state[id].caseInsensitive };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_TOGGLE_INVERT_MATCH: {
            let id = action.id;
            let replacement = { invertMatch: !state[id].invertMatch };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_UPDATE_REPLACE_STRING: {
            let id = action.id;

            let replaceString = action.replaceString;
            let replacement = { replaceString: replaceString };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_TOGGLE_GLOBAL: {
            let id = action.id;
            let replacement = { global: !state[id].global };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_TOGGLE_MULTILINE: {
            let id = action.id;
            let replacement = { multiline: !state[id].multiline };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_TOGGLE_ADD_COUNTER: {
            let id = action.id;
            let replacement = { addCounter: !state[id].addCounter };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_SET_COUNTER_SEPARATOR: {
            let id = action.id;
            let replacement = { counterSeparator: action.counterSeparator };

            return filterConfigReplacer(state, id, replacement);
        }
        case FILTER_TOGGLE_INVERT_ORDER: {
            let id = action.id;
            let replacement = { invertOrder: !state[id].invertOrder };

            return filterConfigReplacer(state, id, replacement);
        }
        default: {
            // Reducer "filterConfigs" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
            return state === undefined ? {} : state;
        }
    }
};

export const inputText = (state: string, action: RegexpFlowUpdateInputTextAction): string => {
    if (action.type === UPDATE_INPUT_TEXT) {
        return action.text;
    } else {
        // Reducer "filterConfigs" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state.
        return state === undefined ? '' : state;
    }
};

export const regexpFlowClearer = (state: ApplicationAppState, action: ClearCurrentRegexpFlowAction): ApplicationAppState => {
    if (action.type === CLEAR_CURRENT_REGEXP_FLOW) {
        const newState: ApplicationAppState = Object.assign({}, state);

        newState.currentRegexpFlow = {
            id: null,
            description: '',
            filterConfigs: {},
        };

        newState.inputText = '';
        newState.outputText = '';

        return newState;
    } else {
        return state;
    }
};

export const regexpFlowDeleter = (state: ApplicationAppState, action: DeleteRegexpFlowAction): ApplicationAppState => {
    if (action.type === DELETE_REGEXP_FLOW) {
        // Clone mutable state
        const newState = Object.assign({}, state);
        newState.currentRegexpFlow = Object.assign({}, state.currentRegexpFlow);
        newState.regexpFlows = state.regexpFlows.filter(regexpFlow => {
            // Leave only not-deleted RegexpFlows
            return regexpFlow.id !== action.id;
        });

        return newState;
    } else {
        return state;
    }
};

const cloneFilterConfigs = filterConfigs => {
    return JSON.parse(JSON.stringify(filterConfigs));
};

export const regexpFlowLoader = (state: ApplicationAppState, action: LoadRegexpFlowAction): ApplicationAppState => {
    if (action.type === LOAD_REGEXP_FLOW) {
        const newState = Object.assign({}, state);
        const requestedId = action.id;

        const requestedRegexpFlow = state.regexpFlows.find(regexpFlow => {
            return regexpFlow.id === requestedId;
        });

        if (requestedRegexpFlow) {
            newState.inputText = '';
            newState.outputText = '';
            newState.currentRegexpFlow = {
                id: requestedRegexpFlow.id,
                description: requestedRegexpFlow.description,
                filterConfigs: cloneFilterConfigs(requestedRegexpFlow.filterConfigs),
            };
            return newState;
        } else {
            // dont change anything
            return newState;
        }
    } else {
        return state;
    }
};

export const regexpFlowSaver = (state: ApplicationAppState, action: SaveRegexpFlowAction): ApplicationAppState => {
    if (action.type === SAVE_REGEXP_FLOW) {
        // Clone mutable state
        const newState = Object.assign({}, state);
        newState.currentRegexpFlow = Object.assign({}, state.currentRegexpFlow);
        newState.regexpFlows = [...state.regexpFlows];

        const regexpFlowId = state.currentRegexpFlow.id;

        let regexpFlowIndexToUpdate = undefined;
        state.regexpFlows.forEach((regexpFlow, index) => {
            if (regexpFlow.id === regexpFlowId) {
                regexpFlowIndexToUpdate = index;
            }
        });

        if (regexpFlowIndexToUpdate === undefined) {
            // save new object
            const newId = state.nextRegexpFlowIndex;
            newState.currentRegexpFlow.id = String(newId);

            const persistedRegexpFlow = new RegexpFlow();
            persistedRegexpFlow.id = String(newId);
            persistedRegexpFlow.description = state.currentRegexpFlow.description;
            persistedRegexpFlow.filterConfigs = cloneFilterConfigs(state.currentRegexpFlow.filterConfigs);

            newState.regexpFlows.push(persistedRegexpFlow);
            newState.nextRegexpFlowIndex++;
        } else {
            // we have existing RegexpFlow with the same ID
            const clonedRegexpFlow = new RegexpFlow();
            clonedRegexpFlow.id = state.currentRegexpFlow.id;
            clonedRegexpFlow.description = state.currentRegexpFlow.description;
            clonedRegexpFlow.filterConfigs = cloneFilterConfigs(state.currentRegexpFlow.filterConfigs);

            newState.regexpFlows[regexpFlowIndexToUpdate] = clonedRegexpFlow;
        }

        return newState;
    } else {
        return state;
    }
};
