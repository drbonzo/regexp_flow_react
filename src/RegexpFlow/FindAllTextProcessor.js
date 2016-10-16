import TextProcessor from './TextProcessor';

class FindAllTextProcessor extends TextProcessor {

	constructor(searchString) {

		super();

		this.displayName = 'Find all matches';
		this.typeName = 'FindAllTextProcessor';

		/**
		 * @type {string}
		 */
		this.searchString = searchString;

		/**
		 * Always true
		 *
		 * @type {boolean}
		 */
		this.searchFlagGlobal = true;

		/**
		 * @type {boolean}
		 */
		this.searchFlagCaseInsensitive = false;

		/**
		 * Always true
		 * @type {boolean}
		 */
		this.searchFlagMultiline = true;

		/**
		 * @type {number}
		 */
		this.matchesCount = 0;
	}

	/**
	 * @param {string} inputText
	 * @returns {string}
	 */
	processText(inputText) {

		try {

			var searchRegexp,
				matches;

			this.resetRegExpValidation();
			this.matchesCount = 0;

			if (!this.searchString) {
				return inputText; // dont change anything when there is no regular expression
			}

			searchRegexp = this.buildRegExp(this.searchString, this.searchFlagCaseInsensitive, this.searchFlagGlobal, this.searchFlagMultiline);
			// as this regexp is always with /g flag - then it returns only whole matches (no groups)
			// 'lorem ipsum dolor sid amet' - so searching for (\w\w)(\w{3}) in this text will return array with five letter words, no matter whether we use groups or not
			matches = inputText.match(searchRegexp);
			if (matches) {
				this.matchesCount = matches.length;
				return matches.join("\n");
			}

			this.matchesCount = 0;
			return '';
		} catch (e) {
			throw this.setupValidationFromError(e);
		}
	}
}

export default FindAllTextProcessor;
