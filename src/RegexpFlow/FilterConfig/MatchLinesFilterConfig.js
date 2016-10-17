import FilterConfig from './FilterConfig';

class MatchLinesFilterConfig extends FilterConfig {

	constructor() {
		
		super('MatchLines');

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
}

export default MatchLinesFilterConfig;
