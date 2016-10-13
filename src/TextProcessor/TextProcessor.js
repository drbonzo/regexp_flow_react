function TextProcessor() {
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
TextProcessor.prototype.buildRegExp = function (regularExpressionString, flagCaseInsensitive, flagGlobal, flagMultiline) {

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
};

/**
 * @param {string} inputText
 * @return {Array|string[]}
 */
TextProcessor.prototype.splitTextIntoLines = function (inputText) {
	// regexp without ?: will mess this split
	inputText = inputText.replace(/\r\n/, "\n"); // CRNL => NL
	inputText = inputText.replace(/\r/, "\n"); // CR => NL

	return inputText.split(/\n/);
};

/**
 * @param {string} inputText
 * @return {string}
 */
TextProcessor.prototype.processText = function (inputText) {
	throw new Error("Please implement me!");
};

/**
 * Initializes object from generic data object - copies specific fields between objects
 * @param {Object} dataObject
 */
TextProcessor.prototype.initializeFromObject = function (dataObject) {
	throw new Error("Please implement me!");
};

/**
 * Returns object to be serialized during export operation
 * @return {Object}
 */
TextProcessor.prototype.getExportObject = function () { // FIXME rename to something like serializableObject
	throw new Error("Please implement me!");
};

/**
 * @param {Object} dataObject
 * @param {Array|string[]} propertyNames
 */
TextProcessor.prototype.copyPropertiesFrom = function (dataObject, propertyNames) {
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
TextProcessor.prototype.extractPropertiesToObject = function (propertyNames) {
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

TextProcessor.prototype.resetRegExpValidation = function () {
	this.regexpIsValid = true;
	this.regexpValidationMessage = '';
};

/**
 *
 * @param error exception thrown
 * @returns {*} the same exception
 */
TextProcessor.prototype.setupValidationFromError = function (error) {
	this.regexpIsValid = false;
	this.regexpValidationMessage = error.toString();
	return error;
};

TextProcessor.prototype.shouldShowDescription = function () {
	return this.showDescription;
};

export default TextProcessor;
