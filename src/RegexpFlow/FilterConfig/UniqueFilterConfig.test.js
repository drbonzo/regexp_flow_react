import UniqueFilterConfig from './UniqueFilterConfig';

describe('UniqueFilterConfig', function () {

    /**
     * @var {UniqueFilterConfig}
     */
    let filterConfig;

    describe('defaults', function () {

        beforeEach(function () {
            filterConfig = new UniqueFilterConfig();
        });

        it('should be default', function () {
            expect(filterConfig.filterType).toEqual('Unique');
            expect(filterConfig.totalLinesCount).toEqual(0);
            expect(filterConfig.uniqueLinesCount).toEqual(0);
            expect(filterConfig.addCounter).toBe(false);
            expect(filterConfig.counterSeparator).toBe(UniqueFilterConfig.COUNTER_SEPARATOR_TAB);
        });
    });
});
