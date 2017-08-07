import MatchInLinesFilter from './MatchInLinesFilter';
import MatchInLinesFilterConfig from '../FilterConfig/MatchInLinesFilterConfig';


describe('MatchInLinesFilter', function () {

    /**
     * @var {MatchInLinesFilter}
     */
    let matchInLinesFilter;

    /**
     * @var {MatchInLinesFilterConfig}
     */
    let filterConfig;

    describe('processText', function () {

        beforeEach(function () {
            matchInLinesFilter = new MatchInLinesFilter();
            filterConfig = new MatchInLinesFilterConfig();
        });

        describe('empty values', function () {

            it('should return every single line if regexp is empty', function () {
                filterConfig.searchString = '';
                matchInLinesFilter = new MatchInLinesFilter();

                expect(matchInLinesFilter.processText(filterConfig, 'Lorem\nIpsum\nDolor')).toEqual('Lorem\nIpsum\nDolor');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });

            it('should return empty text when input text and regexp are empty', function () {
                filterConfig.searchString = '';
                matchInLinesFilter = new MatchInLinesFilter();

                expect(matchInLinesFilter.processText(filterConfig, '')).toEqual('');
                expect(filterConfig.totalLinesCount).toEqual(0);
                expect(filterConfig.matchedLinesCount).toEqual(0);
            });

            it('should return empty text when regexp does not match empty input text', function () {
                filterConfig.searchString = '[a-z]+';
                matchInLinesFilter = new MatchInLinesFilter();

                expect(matchInLinesFilter.processText(filterConfig, '')).toEqual('');
                expect(filterConfig.totalLinesCount).toEqual(0);
                expect(filterConfig.matchedLinesCount).toEqual(0);
            });

            it('should return empty text when regexp does not match empty input text', function () {
                filterConfig.searchString = '[a-z]+';
                matchInLinesFilter = new MatchInLinesFilter();

                expect(matchInLinesFilter.processText(filterConfig, '123\n123\n123')).toEqual('');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(0);
            });
        });

        describe('normal processing', function () {
            it('should matched text from each line, each match in separate line', function () {
                filterConfig.searchString = '\\d+';
                matchInLinesFilter = new MatchInLinesFilter();

                expect(matchInLinesFilter.processText(filterConfig, 'Lorem123ipsum\ndolor456sit\namet789lorem\nipsum dolor sit amet')).toEqual('123\n456\n789');
                expect(filterConfig.totalLinesCount).toEqual(4);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });

            it('when not using grouping - whole match is being returned in each line', function () {
                filterConfig.searchString = '\\d+\\.\\d+';
                matchInLinesFilter = new MatchInLinesFilter();
                expect(matchInLinesFilter.processText(filterConfig, 'Foo: 12.95\nBar: 9.99\nLorem: 19.95')).toEqual('12.95\n9.99\n19.95');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });

            it('when using grouping - match form group 1 is being returned in each line', function () {
                filterConfig.searchString = '(\\d+)\\.\\d+';
                matchInLinesFilter = new MatchInLinesFilter();

                expect(matchInLinesFilter.processText(filterConfig, 'Foo: 12.95\nBar: 9.99\nLorem: 19.95')).toEqual('12\n9\n19');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });
        });

        describe('flags', function () {
            it('should return just lines that match regexp with same case when caseInsensitive is off', function () {
                filterConfig.searchString = '^[A-Z]+';
                filterConfig.caseInsensitive = false;
                matchInLinesFilter = new MatchInLinesFilter();

                expect(matchInLinesFilter.processText(filterConfig, 'LOREM\nipsum\nDOLOR\nsit\nAMET')).toEqual('LOREM\nDOLOR\nAMET');
                expect(filterConfig.totalLinesCount).toEqual(5);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });

            it('should return just lines that match regexp with any case when caseInsensitive is off', function () {
                filterConfig.searchString = '^[A-Z]+';
                filterConfig.caseInsensitive = true;
                matchInLinesFilter = new MatchInLinesFilter();

                expect(matchInLinesFilter.processText(filterConfig, 'LOREM\nipsum\nDOLOR\nsit\nAMET')).toEqual('LOREM\nipsum\nDOLOR\nsit\nAMET');
                expect(filterConfig.totalLinesCount).toEqual(5);
                expect(filterConfig.matchedLinesCount).toEqual(5);
            });
        });

// 	FIXME	describe('errors', function () {
// 			it("invalid regexp sets up validation errors and throws exception", function () {
// 				try {
// 					filterConfig.searchString = 'foo[';
// 					matchInLinesFilter = new MatchInLinesFilter();
// 					matchInLinesFilter.processText(filterConfig,'Lorem ipsum\ndolor sit amet foo[');
// 					expect(true).toEqual(false);
// 				} catch (e) {
// 					expect(matchInLinesFilter.regexpIsValid).toEqual(false);
// 					expect(matchInLinesFilter.regexpValidationMessage.length).toBeGreaterThan(0);
// 					expect(filterConfig.totalLinesCount).toEqual(2);
// 					expect(filterConfig.matchedLinesCount).toEqual(0);
// 				}
// 			});
// 		});
    });
});
