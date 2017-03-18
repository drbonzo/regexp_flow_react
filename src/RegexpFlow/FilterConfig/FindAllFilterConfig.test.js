import FindAllFilterConfig from './FindAllFilterConfig';

describe('FindAllFilterConfig', function () {

    /**
     * @var {FindAllFilterConfig}
     */
    let filterConfig;

    describe('defaults', function () {

        beforeEach(function () {
            filterConfig = new FindAllFilterConfig();
        });

        it('should be default', function () {
            expect(filterConfig.filterType).toEqual('FindAll');
            expect(filterConfig.searchString).toEqual('');
            expect(filterConfig.global).toEqual(true);
            expect(filterConfig.caseInsensitive).toEqual(false);
            expect(filterConfig.multiline).toEqual(true);
            expect(filterConfig.matchesCount).toEqual(0);
        });
    });
});
