import FindAllFilter from './Filter/FindAllFilter';
import MatchLinesFilter from './Filter/MatchLinesFilter';
import MatchInLinesFilter from './Filter/MatchInLinesFilter';
import ReplaceFilter from './Filter/ReplaceFilter';
import UniqueFilter from './Filter/UniqueFilter';
import SortLinesFilter from './Filter/SortLinesFilter';

class FilterRunner {

    constructor() {
        this.filters = {
            FindAll: new FindAllFilter(),
            MatchLines: new MatchLinesFilter(),
            MatchInLines: new MatchInLinesFilter(),
            Replace: new ReplaceFilter(),
            Unique: new UniqueFilter(),
            SortLines: new SortLinesFilter(),
        };
    }

    /**
     * @param {FilterConfig[]} filterConfigs
     * @param {String} inputText
     * @returns {String}
     */
    processString(filterConfigs, inputText) {

        let outputText = inputText;

        for (let fc in filterConfigs) {

            if (filterConfigs.hasOwnProperty(fc)) {

                let filterConfig = filterConfigs[fc];

                if (filterConfig.enabled) {
                    /**
                     * @type {Filter} filter
                     */
                    let filter = this.getFilterForFilterConfig(filterConfig);
                    outputText = filter.processText(filterConfig, inputText);
                    inputText = outputText;
                }
            }
        }

        return outputText;
    }

    /**
     * @param filterConfig
     * @returns {Filter}
     */
    getFilterForFilterConfig(filterConfig) {
        return this.filters[filterConfig.filterType];
    }
}

export default FilterRunner;
