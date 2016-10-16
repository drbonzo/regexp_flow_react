class TextProcessor {

	constructor() {
		this.typeName = '';
		this.displayName = '';
		this.isEnabled = true;

		this.regexpIsValid = true;
		this.regexpValidationMessage = '';

		this.showDescription = false;
		this.description = '';
	}

	/**
	 * Builds regular expression from string + flags
	 *
	 * @param {string} regularExpressionString
	 * @param {bool|null} flagCaseInsensitive
	 * @param {bool|null} flagGlobal if null - then it means FALSE
	 * @param {bool|null} flagMultiline
	 * @returns {RegExp}
	 */
	buildRegExp(regularExpressionString, flagCaseInsensitive, flagGlobal, flagMultiline) {
		var flags = [];
		if (flagGlobal) {
			flags.push('g');
		}

		if (flagCaseInsensitive) {
			flags.push('i');
		}

		if (flagMultiline) {
			flags.push('m');
		}

		return new RegExp(regularExpressionString, flags.join(''));
	}

	/**
	 * @param {string} inputText
	 * @return {Array|string[]}
	 */
	splitTextIntoLines(inputText) {
		// regexp without ?: will mess this split
		inputText = inputText.replace(/\r\n/, "\n"); // CRNL => NL
		inputText = inputText.replace(/\r/, "\n"); // CR => NL

		return inputText.split(/\n/);
	}


	/**
	 * @param {string} inputText
	 * @return {string}
	 */
	processText(inputText) {
		throw new Error("Please implement me!");
	};

	resetRegExpValidation() {
		this.regexpIsValid = true;
		this.regexpValidationMessage = '';
	};

	/**
	 *
	 * @param error exception thrown
	 * @returns {*} the same exception
	 */
	setupValidationFromError(error) {
		this.regexpIsValid = false;
		this.regexpValidationMessage = error.toString();
		return error;
	};

	shouldShowDescription() {
		return this.showDescription;
	};
}

export default TextProcessor;
