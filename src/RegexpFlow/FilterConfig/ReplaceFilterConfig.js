import FilterConfig from './FilterConfig';

class ReplaceFilterConfig extends FilterConfig {

	constructor() {

		super('Replace');

		/**
		 * @type {string}
		 */
		this.searchString = '';

		/**
		 * @type {string}
		 */
		this.replaceString = '';

		/**
		 * We almost always want to replace everything
		 *
		 * @type {boolean}
		 */
		this.searchFlagGlobal = true;

		/**
		 * @type {boolean}
		 */
		this.searchFlagCaseInsensitive = false;

		/**
		 * @type {boolean}
		 */
		this.searchFlagMultiline = false;

		/**
		 * @type {number}
		 */
		this.replacementsCount = 0;
	}
}

export default ReplaceFilterConfig;
