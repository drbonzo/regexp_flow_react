// @flow

import type {ApplicationAppState} from './ApplicationState';
import boilerplateReducer from './Actions/BoilerplateActions';
import {initialState} from './initialState';
import {descriptionReducer, filterConfigsReducer, inputText, regexpFlowClearer, regexpFlowDeleter, regexpFlowLoader, regexpFlowSaver} from './Actions/RegexpFlowActions';
import FilterRunner from '../RegexpFlow/FilterRunner';

const mainReducer = (state: ApplicationAppState | void, action: any) => {

    if (state === undefined) {
        // https://redux.js.org/docs/api/combineReducers.html#notes
        // > If the state given to it is undefined, it must return the initial state for this specific reducer. According to the previous rule, the initial state must not be undefined either.
        // combineReducers() is used by redux-persis
        return initialState;
    }

    let filterConfigsNew = filterConfigsReducer(state.currentRegexpFlow.filterConfigs, action);
    let descriptionNew = descriptionReducer(state.currentRegexpFlow.description, action);
    let inputTextNew = inputText(state.inputText, action);

    let runner = new FilterRunner();

    let outputTextNew = runner.processString(filterConfigsNew, inputTextNew);

    let newState: ApplicationAppState = Object.assign({}, state, {
        inputText: inputTextNew,
        outputText: outputTextNew,
        currentRegexpFlow: {
            id: state.currentRegexpFlow.id,
            filterConfigs: filterConfigsNew,
            description: descriptionNew,
        },
        regexpFlows: state.regexpFlows,
        nextRegexpFlowIndex: state.nextRegexpFlowIndex,
    });

    // changes .currentRegexpFlow, .regexpFlows
    const newState2 = regexpFlowSaver(newState, action);
    Object.assign(newState, newState2);

    // changes .currentRegexpFlow
    const newState3 = regexpFlowLoader(newState, action);
    Object.assign(newState, newState3);

    // changes .currentRegexpFlow
    const newState4 = regexpFlowClearer(newState, action);
    Object.assign(newState, newState4);

    // changes .currentRegexpFlow
    const newState5 = regexpFlowDeleter(newState, action);
    Object.assign(newState, newState5);

    const newState6 = boilerplateReducer(newState, action);
    Object.assign(newState, newState6);

    return newState;
};

export default mainReducer;
