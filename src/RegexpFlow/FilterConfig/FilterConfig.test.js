import FilterConfig from './FilterConfig'

describe('FilterConfig', function () {

	/**
	 * {FilterConfig}
	 */
	var filterConfig;

	describe("defaults", function () {

		beforeEach(function () {
		});

		it("filterType in constructor", function () {

			filterConfig = new FilterConfig('fooBar');

			expect(filterConfig.isEnabled).toEqual(true);
			expect(filterConfig.description).toEqual('');
		});
	});
});
