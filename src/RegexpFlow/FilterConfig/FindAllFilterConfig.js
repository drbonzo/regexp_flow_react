import FilterConfig from './FilterConfig';

class FindAllFilterConfig extends FilterConfig {

    constructor() {

        super(FindAllFilterConfig.FILTER_TYPE);

        /**
         * @type {string}
         */
        this.searchString = '';

        /**
         * Always true
         *
         * @type {boolean}
         */
        this.global = true;

        /**
         * @type {boolean}
         */
        this.caseInsensitive = false;

        /**
         * Always true
         * @type {boolean}
         */
        this.multiline = true;

        /**
         * @type {number}
         */
        this.matchesCount = 0;
    }
}

FindAllFilterConfig.FILTER_TYPE = 'FindAll';

export default FindAllFilterConfig;
