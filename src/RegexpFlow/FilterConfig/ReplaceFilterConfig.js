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
        this.global = true;

		/**
		 * @type {boolean}
		 */
        this.caseInsensitive = false;

		/**
		 * @type {boolean}
		 */
        this.multiline = true;

		/**
		 * @type {number}
		 */
        this.replacementsCount = 0;
    }
}

export default ReplaceFilterConfig;
