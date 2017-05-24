import FilterConfig from './FilterConfig';

class UniqueFilterConfig extends FilterConfig {

    constructor() {

        super(UniqueFilterConfig.FILTER_TYPE);

        /**
         * @type {boolean}
         */
        this.addCounter = false;

        /**
         * @type {string}
         */
        this.counterSeparator = UniqueFilterConfig.COUNTER_SEPARATOR_TAB;

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

UniqueFilterConfig.FILTER_TYPE = 'Unique';

UniqueFilterConfig.COUNTER_SEPARATOR_TAB = 'TAB';
UniqueFilterConfig.COUNTER_SEPARATOR_SEMICOLON = 'SEMICOLON';
UniqueFilterConfig.COUNTER_SEPARATOR_COMMA = 'COMMA';
UniqueFilterConfig.COUNTER_SEPARATOR_SPACE = 'SPACE';

export default UniqueFilterConfig;
