import ReplaceFilterConfig from './ReplaceFilterConfig'

describe('ReplaceFilterConfig', function () {

	/**
	 * @var {ReplaceFilterConfig}
	 */
	var filterConfig;

	describe("defaults", function () {

		beforeEach(function () {
			filterConfig = new ReplaceFilterConfig();
		});

		it("should be default", function () {
			expect(filterConfig.filterType).toEqual('Replace');
			expect(filterConfig.searchString).toEqual('');
			expect(filterConfig.replaceString).toEqual('');
			expect(filterConfig.searchFlagGlobal).toEqual(true);
			expect(filterConfig.searchFlagCaseInsensitive).toEqual(false);
			expect(filterConfig.searchFlagMultiline).toEqual(true);
			expect(filterConfig.replacementsCount).toEqual(0);
		});
	});
});
