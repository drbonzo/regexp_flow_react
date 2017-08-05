import description from './description';
import filterConfigs from './filterConfigs';
import inputText from './inputText';
import FilterRunner from '../../RegexpFlow/FilterRunner';
import regexpFlowSaver from './regexpFlowSaver';
import regexpFlowLoader from './regexpFlowLoader';
import regexpFlowClearer from './regexpFlowClearer';
import regexpFlowDeleter from './regexpFlowDeleter';
import {NAVIGATE_TO_EDIT_FLOW_SCREEN} from '../actions';
import history from '../../history';

function navigatorRedirector(state, action) {
    if (action.type === NAVIGATE_TO_EDIT_FLOW_SCREEN) {
        history.push('/editor');
    }
}

const mainReducer = function (state, action) {
    if (action.type === 'persist/REHYDRATE') {
        return Object.assign({}, state, action.payload, {rehydrated: true});
        // state gives inputText, outputText
        // action.payload gives other data
        //
        // `rehydrated` === true indicates that data has been loaded into store
    }
    navigatorRedirector(state, action);
    let filterConfigsNew = filterConfigs(state.currentRegexpFlow.filterConfigs, action);
    let descriptionNew = description(state.currentRegexpFlow.description, action);
    let inputTextNew = inputText(state.inputText, action);

    let runner = new FilterRunner();
    // FIXME update totals/counters in filter configs
    let outputTextNew = runner.processString(filterConfigsNew, inputTextNew);

    let newState = Object.assign({}, state, {
        inputText: inputTextNew,
        outputText: outputTextNew,
        currentRegexpFlow: {
            id: state.currentRegexpFlow.id, // FIXME
            filterConfigs: filterConfigsNew,
            description: descriptionNew,
        },
        regexpFlows: state.regexpFlows,
        nextRegexpFlowIndex: state.nextRegexpFlowIndex, // FIXME
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

    return newState;
};

export default mainReducer;
