import FilterConfig from './FilterConfig';

class MatchLinesFilterConfig extends FilterConfig {

    constructor() {

        super(MatchLinesFilterConfig.FILTER_TYPE);

        /**
         * @type {string}
         */
        this.searchString = '';

        /**
         * @type {boolean}
         */
        this.caseInsensitive = false;

        /**
         * If true - then we discard lines matching regexp
         * @type {boolean}
         */
        this.invertMatch = false;

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

MatchLinesFilterConfig.FILTER_TYPE = 'MatchLines';

export default MatchLinesFilterConfig;
