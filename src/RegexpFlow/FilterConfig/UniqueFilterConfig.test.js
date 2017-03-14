import UniqueFilterConfig from './UniqueFilterConfig';

describe('UniqueFilterConfig', function () {

	/**
	 * @var {UniqueFilterConfig}
	 */
    var filterConfig;

    describe('defaults', function () {

        beforeEach(function () {
            filterConfig = new UniqueFilterConfig();
        });

        it('should be default', function () {
            expect(filterConfig.filterType).toEqual('Unique');
            expect(filterConfig.totalLinesCount).toEqual(0);
            expect(filterConfig.matchedLinesCount).toEqual(0);
        });
    });
});
