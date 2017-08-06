import FilterConfig from './FilterConfig';

class SortLinesFilterConfig extends FilterConfig {

    constructor() {

        super(SortLinesFilterConfig.FILTER_TYPE);

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

SortLinesFilterConfig.FILTER_TYPE = 'SortLines';

export default SortLinesFilterConfig;
