import MatchLinesFilterConfig from './MatchLinesFilterConfig'

describe('MatchLinesFilterConfig', function () {

	/**
	 * @var {MatchLinesFilterConfig}
	 */
	var filterConfig;

	describe("defaults", function () {

		beforeEach(function () {
			filterConfig = new MatchLinesFilterConfig();
		});

		it("should be default", function () {
			expect(filterConfig.filterType).toEqual('MatchLines');
			expect(filterConfig.searchString).toEqual('');
			expect(filterConfig.searchFlagCaseInsensitive).toEqual(false);
			expect(filterConfig.flagInvertMatch).toEqual(false);
			expect(filterConfig.totalLinesCount).toEqual(0);
			expect(filterConfig.matchedLinesCount).toEqual(0);
		});
	});
});