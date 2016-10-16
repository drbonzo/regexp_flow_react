import TextProcessor from './../RegexpFlow/TextProcessor';

/**
 * @param {string} searchString
 * @constructor
 */
class MatchLinesTextProcessor extends TextProcessor {

	constructor(searchString) {
		super();

		this.displayName = 'Match lines';
		this.typeName = 'MatchLinesTextProcessor';

		/**
		 * @type {string}
		 */
		this.searchString = searchString;

		/**
		 * @type {boolean}
		 */
		this.searchFlagCaseInsensitive = false;

		/**
		 * @type {number}
		 */
		this.totalLinesCount = 0;

		/**
		 * @type {number}
		 */
		this.linesMatchedCount = 0;

		/**
		 * If true - then we discard lines matching regexp
		 * @type {boolean}
		 */
		this.flagInvertMatch = false;
	}

	/**
	 * @param {string} inputText
	 * @returns {string}
	 */
	processText(inputText) {

		var line,
			lines,
			matchedLines,
			searchRegexp,
			l;
		try {

			this.resetRegExpValidation();
			lines = this.splitTextIntoLines(inputText);
			this.totalLinesCount = lines.length;
			this.linesMatchedCount = 0;

			if (!this.searchString) {
				this.linesMatchedCount = this.totalLinesCount;
				return inputText; // dont change anything when there is no regular expression
			}

			matchedLines = [];

			searchRegexp = this.buildRegExp(this.searchString, this.searchFlagCaseInsensitive, null, null);

			for (l in lines) {
				if (lines.hasOwnProperty(l)) {
					line = lines[l];

					if (this.flagInvertMatch) {
						if (!line.match(searchRegexp)) {
							matchedLines.push(line);
						}
					} else {
						if (line.match(searchRegexp)) {
							matchedLines.push(line);
						}
					}
				}
			}

			this.linesMatchedCount = matchedLines.length;

			return matchedLines.join("\n");
		} catch (e) {
			throw this.setupValidationFromError(e);
		}
	}

	initializeFromObject(dataObject) {
		this.copyPropertiesFrom(dataObject, this.getSerializablePropertyNames());
	}

	getExportObject() {
		return this.extractPropertiesToObject(this.getSerializablePropertyNames());
	}

	/**
	 * @returns {Array|string[]}
	 */
	getSerializablePropertyNames() {
		return ['searchString', 'searchFlagCaseInsensitive', 'flagInvertMatch', 'isEnabled', 'description'];
	}
}

export default MatchLinesTextProcessor;
