import SortLinesFilter from './SortLinesFilter';
import SortLinesFilterConfig from '../FilterConfig/SortLinesFilterConfig';

describe('SortLinesFilter', function () {

    /**
     * @var {SortLinesFilter}
     */
    let sortLinesFilter;

    /**
     * @var {SortLinesFilterConfig}
     */
    let filterConfig;

    describe('processText', function () {

        beforeEach(function () {
            sortLinesFilter = new SortLinesFilter();
            filterConfig = new SortLinesFilterConfig();
        });

        describe('empty values', function () {
            it('should return empty text when input text is empty', function () {
                expect(sortLinesFilter.processText(filterConfig, '')).toEqual('');
                expect(filterConfig.totalLinesCount).toEqual(0);
                expect(filterConfig.matchedLinesCount).toEqual(0);
            });
        });

        describe('sorting', function () {
            it('should sort lines like a text', function () {
                const inputText = [
                    'zzzz',
                    'aaaa',
                    'mmmm',
                ].join('\n');

                const expectedText = [
                    'aaaa',
                    'mmmm',
                    'zzzz'
                ].join('\n');
                expect(sortLinesFilter.processText(filterConfig, inputText)).toEqual(expectedText);
                expect(filterConfig.totalLinesCount).toEqual(3);
                expect(filterConfig.matchedLinesCount).toEqual(3);
            });

            it('should sort numbers like a text', function () {
                const inputText = [
                    '1',
                    '2',
                    '3',
                    '12345'
                ].join('\n');

                const expectedText = [
                    '1',
                    '12345',
                    '2',
                    '3'
                ].join('\n');
                expect(sortLinesFilter.processText(filterConfig, inputText)).toEqual(expectedText);
                expect(filterConfig.totalLinesCount).toEqual(4);
                expect(filterConfig.matchedLinesCount).toEqual(4);
            });

            it('should preserve whitespace', function () {
                const inputText = [
                    'ccc',
                    'bbb',
                    ' aaaX',
                    'aaab',
                    ' cccX',
                    ' bbbX',
                ].join('\n');

                const expectedText = [
                    ' aaaX',
                    ' bbbX',
                    ' cccX',
                    'aaab',
                    'bbb',
                    'ccc',
                ].join('\n');
                expect(sortLinesFilter.processText(filterConfig, inputText)).toEqual(expectedText);
                expect(filterConfig.totalLinesCount).toEqual(6);
                expect(filterConfig.matchedLinesCount).toEqual(6);
            });
        });
    });
});
