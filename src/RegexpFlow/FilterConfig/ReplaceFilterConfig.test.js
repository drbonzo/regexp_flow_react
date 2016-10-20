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
			expect(filterConfig.global).toEqual(true);
			expect(filterConfig.caseInsensitive).toEqual(false);
			expect(filterConfig.multiline).toEqual(true);
			expect(filterConfig.replacementsCount).toEqual(0);
		});
	});
});
