import FindAllFilter from './Filter/FindAllFilter';
import MatchLinesFilter from './Filter/MatchLinesFilter';
import MatchInLinesFilter from './Filter/MatchInLinesFilter';
import ReplaceFilter from './Filter/ReplaceFilter';
import UniqueFilter from './Filter/UniqueFilter';

class FilterRunner {

    constructor() {
        this.filters = {
            FindAll: new FindAllFilter(),
            MatchLines: new MatchLinesFilter(),
            MatchInLines: new MatchInLinesFilter(),
            Replace: new ReplaceFilter(),
            Unique: new UniqueFilter()
        };
    }

	/**
	 * @param {FilterConfig[]} filterConfigs
	 * @param {String} inputText
	 * @returns {String}
	 */
    processString(filterConfigs, inputText) {

        var outputText;

        outputText = inputText;

        for (var fc in filterConfigs) {

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
