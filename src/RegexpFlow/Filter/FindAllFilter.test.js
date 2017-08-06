import FindAllFilter from './FindAllFilter';
import FindAllFilterConfig from '../FilterConfig/FindAllFilterConfig';

describe('FindAllFilter', function () {

    /**
     * @var {FindAllFilter}
     */
    let findAllFilter;

    /**
     * @var {FindAllFilterConfig}
     */
    let filterConfig;

    describe('processText', function () {

        beforeEach(function () {
            findAllFilter = new FindAllFilter();
            filterConfig = new FindAllFilterConfig();
        });

        describe('empty values', function () {
            it('should return empty string if input is empty', function () {
                filterConfig.searchString = '\\d+';
                findAllFilter = new FindAllFilter();

                expect(findAllFilter.processText(filterConfig, '')).toEqual('');
                expect(filterConfig.matchesCount).toEqual(0);
            });

            it('should return input text when regexp is empty', function () {
                filterConfig.searchString = '';
                findAllFilter = new FindAllFilter();

                expect(findAllFilter.processText(filterConfig, 'Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
                expect(filterConfig.matchesCount).toEqual(0);
            });
        });

        describe('normal matching', function () {

            it('should return found matches, each in new line', function () {
                filterConfig.searchString = '\\d+';
                findAllFilter = new FindAllFilter();

                expect(findAllFilter.processText(filterConfig, 'Lor2em ips542um 534 dolor s2333id amet')).toEqual('2\n542\n534\n2333');
                expect(filterConfig.matchesCount).toEqual(4);
            });

            it('should return empty string when no matches are found', function () {
                filterConfig.searchString = '\\d+';
                findAllFilter = new FindAllFilter();

                expect(findAllFilter.processText(filterConfig, 'Lorem ipsum dolor sit amet')).toEqual('');
                expect(filterConfig.matchesCount).toEqual(0);
            });
        });

        describe('flags', function () {

            it('should return just first match when global flag is off', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.global = false;
                findAllFilter = new FindAllFilter();

                expect(findAllFilter.processText(filterConfig, 'Lor2em ips542um 534 dolor s2333id amet')).toEqual('2');
                expect(filterConfig.matchesCount).toEqual(1);
            });

            it('should return all matches when global flag is on', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.global = true;
                findAllFilter = new FindAllFilter();

                expect(findAllFilter.processText(filterConfig, 'Lor2em ips542um 534 dolor s2333id amet')).toEqual('2\n542\n534\n2333');
                expect(filterConfig.matchesCount).toEqual(4);
            });

            it('should return just case matched items when case insensivite flag is off', function () {
                filterConfig.searchString = 'lorem';
                filterConfig.caseInsensitive = false;
                findAllFilter = new FindAllFilter();

                expect(findAllFilter.processText(filterConfig, 'Lorem LOREM LoReM loreM lorem')).toEqual('lorem');
                expect(filterConfig.matchesCount).toEqual(1);
            });

            it('should return all matched items when case insensivite flag is on', function () {
                filterConfig.searchString = 'lorem';
                filterConfig.caseInsensitive = true;
                findAllFilter = new FindAllFilter();

                expect(findAllFilter.processText(filterConfig, 'Lorem LOREM LoReM loreM lorem')).toEqual('Lorem\nLOREM\nLoReM\nloreM\nlorem');
                expect(filterConfig.matchesCount).toEqual(5);
            });
        });

        //
        // 	FIXME: describe("errors", function () {
        // 		it("invalid regexp sets up validation errors and throws exception", function () {
        // 			try {
        // 				findAllFilter = new FindAllFilter('foo[');
        // 				findAllFilter.processText(findAllFilterConfig, 'Lorem ipsum dolor sit amet foo[');
        // 				expect(true).toEqual(false);
        // 			} catch (e) {
        // 				expect(findAllFilter.regexpIsValid).toEqual(false);
        // 				expect(findAllFilter.regexpValidationMessage.length).toBeGreaterThan(0);
        // 				expect(findAllFilterConfig.matchesCount).toEqual(0);
        // 			}
        // 		});
        //
    });

    describe('Line counting', function () {

        beforeEach(function () {
            findAllFilter = new FindAllFilter();
            filterConfig = new FindAllFilterConfig();
        });

        describe('multiple calls on the same filterConfig', function () {

            it('should count unique lines first, and with second call it should reset it to zero, as input is empty text', function () {

                filterConfig.searchString = '\\d+';

                expect(findAllFilter.processText(filterConfig, 'Lor2em ips542um 534 dolor s2333id amet')).toEqual('2\n542\n534\n2333');
                expect(filterConfig.matchesCount).toEqual(4);

                expect(findAllFilter.processText(filterConfig, '')).toEqual('');
                expect(filterConfig.matchesCount).toEqual(0);
            });

            it('should reset stats when input string is empty', function () {

                filterConfig.searchString = '\\d+';
                expect(findAllFilter.processText(filterConfig, 'Lor2em ips542um 534 dolor s2333id amet')).toEqual('2\n542\n534\n2333');
                expect(filterConfig.matchesCount).toEqual(4);

                filterConfig.searchString = '';
                expect(findAllFilter.processText(filterConfig, 'Lor2em ips542um 534 dolor s2333id amet')).toEqual('Lor2em ips542um 534 dolor s2333id amet');
                expect(filterConfig.matchesCount).toEqual(0);
            });
        });

    });

});
