import FilterConfig from './FilterConfig';

class UniqueFilterConfig extends FilterConfig {

	constructor() {

		super('Unique');

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

export default UniqueFilterConfig;
