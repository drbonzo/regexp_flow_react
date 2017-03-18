import FilterConfig from './FilterConfig';

describe('FilterConfig', function () {

	/**
	 * @var {FilterConfig}
	 */
    let filterConfig;

    describe('defaults', function () {

        beforeEach(function () {
        });

        it('filterType in constructor', function () {

            filterConfig = new FilterConfig('fooBar');

            expect(filterConfig.enabled).toEqual(true);
            expect(filterConfig.description).toEqual('');
        });
    });
});
