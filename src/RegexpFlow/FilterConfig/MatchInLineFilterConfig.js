import FilterConfig from './FilterConfig';

class MatchInLineFilterConfig extends FilterConfig {

	constructor() {
		
		super('MatchInLine');

		/**
		 * @type {string}
		 */
		this.searchString = '';

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
}

export default MatchInLineFilterConfig;
