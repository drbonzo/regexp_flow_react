import FindAllFilter from './FilterProcessor/FindAllFilter'
import MatchLinesFilter from './FilterProcessor/MatchLinesFilter'
import MatchInLinesFilter from './FilterProcessor/MatchInLinesFilter'
import ReplaceFilter from './FilterProcessor/ReplaceFilter'
import UniqueFilter from './FilterProcessor/UniqueFilter'

class FilterRunner {

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
	};

	/**
	 * @param filterConfig
	 * @returns {Filter}
	 */
	getFilterForFilterConfig(filterConfig) {

		// FIXME optimize - build filters once, and then return existing objects -> move to contructor?
		var filters = {
			FindAll: new FindAllFilter(),
			MatchLines: new MatchLinesFilter(),
			MatchInLines: new MatchInLinesFilter(),
			Replace: new ReplaceFilter(),
			Unique: new UniqueFilter()
		};

		// FIXME handle invalid filterType
		return filters[filterConfig.filterType];
	}
}

export default FilterRunner;
