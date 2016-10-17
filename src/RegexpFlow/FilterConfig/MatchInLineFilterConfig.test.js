import MatchInLineFilterConfig from './MatchInLineFilterConfig'

describe('MatchInLineFilterConfig', function () {

	/**
	 * {MatchInLineFilterConfig}
	 */
	var filterConfig;

	describe("defaults", function () {

		beforeEach(function () {
			filterConfig = new MatchInLineFilterConfig();
		});

		it("should be default", function () {
			expect(filterConfig.filterType).toEqual('MatchInLine');
			expect(filterConfig.searchString).toEqual('');
			expect(filterConfig.searchFlagCaseInsensitive).toEqual(false);
			expect(filterConfig.totalLinesCount).toEqual(0);
			expect(filterConfig.linesMatchedCount).toEqual(0);
		});
	});
});
