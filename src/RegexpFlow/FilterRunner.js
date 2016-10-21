class FilterRunner {

	/**
	 * @param {RegexpFlow} regexpFlow
	 * @param {String} inputText
	 * @returns {String}
	 */
	processString(regexpFlow, inputText) {

		var outputText;
		var textProcessor;
		var tp;

		outputText = inputText;

		for (tp in regexpFlow.filterConfigs) {
			if (regexpFlow.filterConfigs.hasOwnProperty(tp)) {

				/**
				 * @type {Filter} textProcessor
				 */
				textProcessor = regexpFlow.filterConfigs[tp];

				if (textProcessor.enabled) {
					outputText = textProcessor.processText(inputText);
					inputText = outputText;
				}
			}
		}

		return outputText;
	};
}

export default FilterRunner;
