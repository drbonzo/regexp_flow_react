import FilterConfig from './FilterConfig';

class FindAllFilterConfig extends FilterConfig {

	constructor() {

		super('FindAll');

		/**
		 * @type {string}
		 */
		this.searchString = '';

		/**
		 * Always true
		 *
		 * @type {boolean}
		 */
		this.searchFlagGlobal = true;

		/**
		 * @type {boolean}
		 */
		this.caseInsensitive = false;

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
}

export default FindAllFilterConfig;
