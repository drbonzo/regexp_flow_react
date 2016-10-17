import FindAllFilterConfig from './FindAllFilterConfig'

describe('FindAllFilterConfig', function () {

	/**
	 * {FindAllFilterConfig}
	 */
	var filterConfig;

	describe("defaults", function () {

		beforeEach(function () {
			filterConfig = new FindAllFilterConfig();
		});

		it("should be default", function () {
			expect(filterConfig.filterType).toEqual('FindAll');
			expect(filterConfig.searchString).toEqual('');
			expect(filterConfig.searchFlagGlobal).toEqual(true);
			expect(filterConfig.searchFlagCaseInsensitive).toEqual(false);
			expect(filterConfig.searchFlagMultiline).toEqual(true);
			expect(filterConfig.matchesCount).toEqual(0);
		});
	});
});
