class TextProcessorRunner {

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

		for (tp in regexpFlow.textProcessors) {
			if (regexpFlow.textProcessors.hasOwnProperty(tp)) {

				/**
				 * @type {TextProcessor} textProcessor
				 */
				textProcessor = regexpFlow.textProcessors[tp];

				if (textProcessor.isEnabled) {
					outputText = textProcessor.processText(inputText);
					inputText = outputText;
				}
			}
		}

		return outputText;
	};
}

export default TextProcessorRunner;
