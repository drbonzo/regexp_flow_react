import MatchInLinesFilterConfig from './MatchInLinesFilterConfig';

describe('MatchInLinesFilterConfig', function () {

	/**
	 * @var {MatchInLinesFilterConfig}
	 */
    let filterConfig;

    describe('defaults', function () {

        beforeEach(function () {
            filterConfig = new MatchInLinesFilterConfig();
        });

        it('should be default', function () {
            expect(filterConfig.filterType).toEqual('MatchInLines');
            expect(filterConfig.searchString).toEqual('');
            expect(filterConfig.caseInsensitive).toEqual(false);
            expect(filterConfig.totalLinesCount).toEqual(0);
            expect(filterConfig.matchedLinesCount).toEqual(0);
        });
    });
});
