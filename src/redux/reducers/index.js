import description from './description';
import filterConfigs from './filterConfigs';
import inputText from './inputText';
import FilterRunner from '../../RegexpFlow/FilterRunner';
import regexpFlowSaver from './regexpFlowSaver';
import regexpFlowLoader from './regexpFlowLoader';

const mainReducer = function (state, action) {
    if (action.type === 'persist/REHYDRATE') {
        return Object.assign({}, state);
    }
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

    return newState;
};

export default mainReducer;
