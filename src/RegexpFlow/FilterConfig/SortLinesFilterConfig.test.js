import SortLinesFilterConfig from './SortLinesFilterConfig';

describe('SortLinesFilterConfig', function () {

    /**
     * @var {SortLinesFilterConfig}
     */
    let filterConfig;

    describe('defaults', function () {

        beforeEach(function () {
            filterConfig = new SortLinesFilterConfig();
        });

        it('should be default', function () {
            expect(filterConfig.filterType).toEqual('SortLines');
            expect(filterConfig.invertOrder).toBe(false);
        });
    });
});
