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

	/**
	 * Initializes object from generic data object - copies specific fields between objects
	 * @param {Object} dataObject
	 */
	initializeFromObject(dataObject) {
		throw new Error("Please implement me!");
	};

	/**
	 * Returns object to be serialized during export operation
	 * @return {Object}
	 */
	getExportObject() { // FIXME rename to something like serializableObject
		throw new Error("Please implement me!");
	};

	/**
	 * @param {Object} dataObject
	 * @param {Array|string[]} propertyNames
	 */
	copyPropertiesFrom(dataObject, propertyNames) {
		var p, propertyName;
		for (p in propertyNames) {
			if (propertyNames.hasOwnProperty(p)) {
				propertyName = propertyNames[p];
				this[propertyName] = dataObject[propertyName];
			}
		}
	};

	/**
	 * Builds new object, by copying some properties of this object.
	 *
	 * @param {Array|string[]} propertyNames
	 * @return {Object}
	 */
	extractPropertiesToObject(propertyNames) {
		var retval,
			p,
			propertyName;

		retval = {};
		propertyNames.push('typeName'); // always added

		for (p in propertyNames) {
			if (propertyNames.hasOwnProperty(p)) {
				propertyName = propertyNames[p];
				retval[propertyName] = this[propertyName];
			}
		}

		return retval;
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
