import TextProcessor from './../RegexpFlow/TextProcessor';

/**
 * @param {string} searchString
 * @constructor
 */
class MatchInLineTextProcessor extends TextProcessor {

	constructor(searchString) {
		super();


		this.displayName = 'Match in line';
		this.typeName = 'MatchInLineTextProcessor';

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

	}

	/**
	 * Splits text into lines.
	 * Processes each line
	 * - if line matches regular expression - then the match is being returned
	 *      - if groups were used in regular expression
	 * - if line does not match regular expression - then that line is being ommited (not included in result)
	 * @param {string} inputText
	 * @returns {string}
	 */
	processText(inputText) {

		try {
			var line,
				matchesInLines,
				searchRegexp,
				match,
				matchedText,
				lines,
				l;

			this.resetRegExpValidation();
			lines = this.splitTextIntoLines(inputText);
			this.totalLinesCount = lines.length;
			this.linesMatchedCount = 0;

			if (!this.searchString) {
				this.linesMatchedCount = this.totalLinesCount;
				return inputText; // dont change anything when there is no regular expression
			}

			matchesInLines = [];

			searchRegexp = this.buildRegExp(this.searchString, this.searchFlagCaseInsensitive, null, null);

			// wydziel do metody? zeby lista paramow byla krotsza
			for (l in lines) {
				if (lines.hasOwnProperty(l)) {
					line = lines[l];
					match = line.match(searchRegexp);

					if (match) {
						matchedText = match[1] || match[0]; // when no groups were used - then $0 is used, else first group is used
						matchesInLines.push(matchedText);
					}
				}
			}

			this.linesMatchedCount = matchesInLines.length;

			return matchesInLines.join("\n");
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
		return ['searchString', 'searchFlagCaseInsensitive', 'isEnabled', 'description'];
	}
}


export default MatchInLineTextProcessor;