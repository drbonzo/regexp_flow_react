import description from './description';
import filterConfigs from './filterConfigs';
import inputText from './inputText';
import FilterRunner from '../../RegexpFlow/FilterRunner';

const mainReducer = function (state, action) {
    let filterConfigsNew = filterConfigs(state.filterConfigs, action);
    let descriptionNew = description(state.description, action);
    let inputTextNew = inputText(state.inputText, action);

    let runner = new FilterRunner();
    // FIXME update totals/counters in filter configs
    let outputTextNew = runner.processString(filterConfigsNew, inputTextNew);

    return Object.assign({}, state, {
        filterConfigs: filterConfigsNew,
        description: descriptionNew,
        inputText: inputTextNew,
        outputText: outputTextNew
    });
};

export default mainReducer;
