import MatchLinesFilter from './MatchLinesFilter';
import MatchLinesFilterConfig from '../FilterConfig/MatchLinesFilterConfig';

describe('MatchLinesFilter', function () {

	/**
	 * @var {MatchLinesFilter}
	 */
    let matchLinesFilter;

	/**
	 * @var {MatchLinesFilterConfig}
	 */
    let filterConfig;

    describe('processText', function () {

        beforeEach(function () {
            matchLinesFilter = new MatchLinesFilter();
            filterConfig = new MatchLinesFilterConfig();
        });

        describe('empty values', function () {
            it('should return empty string if input is empty', function () {
                filterConfig.searchString = '\\d+';
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, '')).toEqual('');
                expect(filterConfig.totalLinesCount).toEqual(1);
                expect(filterConfig.matchedLinesCount).toEqual(0);
            });

            it('should return input text when regexp is empty', function () {
                filterConfig.searchString = '';
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });
        });

        describe('matching and flags', function () {

            it('should return just lines that match regexp when invertMatch is off', function () {
                filterConfig.searchString = 'o';
                filterConfig.invertMatch = false;
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('Lorem\ndolor');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(2);
            });

            it('should return empty string when no line matches regexp and invertMatch is off', function () {
                filterConfig.searchString = 'xxx';
                filterConfig.invertMatch = false;
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(0);
            });

            it('should return every line when every line matches regexp and invertMatch is off', function () {
                filterConfig.searchString = '[a-z]';
                filterConfig.invertMatch = false;
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });

            it('should return just lines that do not match regexp when invertMatch is on', function () {
                filterConfig.searchString = 'o';
                filterConfig.invertMatch = true;
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('ipsum');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(1);
            });

            it('should return empty string when all lines match regexp and invertMatch is on', function () {
                filterConfig.searchString = '[a-z]';
                filterConfig.invertMatch = true;
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(0);
            });

            it('should return every line when no line matches regexp and invertMatch is on', function () {
                filterConfig.searchString = 'xxx';
                filterConfig.invertMatch = true;
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });


            it('should return just lines that match regexp with same case when caseInsensitive is off', function () {
                filterConfig.searchString = 'L';
                filterConfig.invertMatch = false;
                filterConfig.caseInsensitive = false;
                matchLinesFilter = new MatchLinesFilter();

                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('Lorem');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(1);
            });

            it('should return just lines that match regexp with any case when caseInsensitive is on', function () {
                filterConfig.searchString = 'L';
                filterConfig.invertMatch = false;
                filterConfig.caseInsensitive = true;

                matchLinesFilter = new MatchLinesFilter();
                expect(matchLinesFilter.processText(filterConfig, 'Lorem\nipsum\ndolor')).toEqual('Lorem\ndolor');
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(2);
            });
        });

		// FIXME describe("errors", function () {
		// 	it("invalid regexp sets up validation errors and throws exception", function () {
		// 		try {
		// 			matchLinesFilter = new MatchLinesFilter('foo[');
		// 			matchLinesFilter.processText(filterConfig, 'Lorem ipsum\ndolor sit amet foo[');
		// 			expect(true).toEqual(false);
		// 		} catch (e) {
		// 			expect(matchLinesFilter.regexpIsValid).toEqual(false);
		// 			expect(matchLinesFilter.regexpValidationMessage.length).toBeGreaterThan(0);
		// 			expect(filterConfig.totalLinesCount).toEqual(2);
		// 			expect(filterConfig.matchedLinesCount).toEqual(0);
		// 		}
		// 	});
		// });
    });
});
