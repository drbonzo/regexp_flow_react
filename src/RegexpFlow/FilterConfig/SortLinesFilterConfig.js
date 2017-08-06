import FilterConfig from './FilterConfig';

class SortLinesFilterConfig extends FilterConfig {

    constructor() {

        super(SortLinesFilterConfig.FILTER_TYPE);

        /**
         * @type {boolean}
         */
        this.invertOrder = false;
    }

}

SortLinesFilterConfig.FILTER_TYPE = 'SortLines';

export default SortLinesFilterConfig;
