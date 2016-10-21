class FilterRunner {

	/**
	 * @param {RegexpFlow} regexpFlow
	 * @param {String} inputText
	 * @returns {String}
	 */
	processString(regexpFlow, inputText) {

		var outputText;
		var filter;
		var tp;

		outputText = inputText;

		for (tp in regexpFlow.filterConfigs) {
			if (regexpFlow.filterConfigs.hasOwnProperty(tp)) {

				/**
				 * @type {Filter} filter
				 */
				filter = regexpFlow.filterConfigs[tp];

				if (filter.enabled) {
					outputText = filter.processText(inputText);
					inputText = outputText;
				}
			}
		}

		return outputText;
	};
}

export default FilterRunner;
