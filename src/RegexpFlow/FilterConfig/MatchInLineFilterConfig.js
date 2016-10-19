import FilterConfig from './FilterConfig';

class MatchInLineFilterConfig extends FilterConfig {

	constructor() {
		
		super('MatchInLines');

		/**
		 * @type {string}
		 */
		this.searchString = '';

		/**
		 * @type {boolean}
		 */
		this.caseInsensitive = false;

		/**
		 * @type {number}
		 */
		this.totalLinesCount = 0;

		/**
		 * @type {number}
		 */
		this.matchedLinesCount = 0;

	}
}

export default MatchInLineFilterConfig;
