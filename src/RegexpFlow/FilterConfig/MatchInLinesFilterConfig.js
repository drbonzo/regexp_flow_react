import FilterConfig from './FilterConfig';

class MatchInLinesFilterConfig extends FilterConfig {

    constructor() {

        super(MatchInLinesFilterConfig.FILTER_TYPE);

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

MatchInLinesFilterConfig.FILTER_TYPE = 'MatchInLines';

export default MatchInLinesFilterConfig;
