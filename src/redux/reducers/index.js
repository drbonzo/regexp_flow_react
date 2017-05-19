import description from './description';
import filterConfigs from './filterConfigs';
import inputText from './inputText';
import FilterRunner from '../../RegexpFlow/FilterRunner';

const mainReducer = function (state, action) {
    let filterConfigsNew = filterConfigs(state.currentRegexpFlow.filterConfigs, action);
    let descriptionNew = description(state.currentRegexpFlow.description, action);
    let inputTextNew = inputText(state.currentRegexpFlow.inputText, action);

    let runner = new FilterRunner();
    // FIXME update totals/counters in filter configs
    let outputTextNew = runner.processString(filterConfigsNew, inputTextNew);

    return Object.assign({}, state, {
        currentRegexpFlow: {
            filterConfigs: filterConfigsNew,
            description: descriptionNew,
            inputText: inputTextNew,
            outputText: outputTextNew
        },
        regexpFlows: state.regexpFlows
    });
};

export default mainReducer;
