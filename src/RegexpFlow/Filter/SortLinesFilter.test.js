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
            });
        });

        describe('normal sorting', function () {
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
            });
        });

        describe('inverted sorting', function () {

            beforeEach(function () {
                filterConfig.invertOrder = true;
            });
            
            it('should sort lines like a text', function () {
                const inputText = [
                    'aaaa',
                    'zzzz',
                    'mmmm',
                ].join('\n');

                const expectedText = [
                    'zzzz',
                    'mmmm',
                    'aaaa',
                ].join('\n');
                expect(sortLinesFilter.processText(filterConfig, inputText)).toEqual(expectedText);
            });

            it('should sort numbers like a text', function () {
                const inputText = [
                    '12345',
                    '3',
                    '2',
                    '1',
                ].join('\n');

                const expectedText = [
                    '3',
                    '2',
                    '12345',
                    '1',
                ].join('\n');
                expect(sortLinesFilter.processText(filterConfig, inputText)).toEqual(expectedText);
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
                    'ccc',
                    'bbb',
                    'aaab',
                    ' cccX',
                    ' bbbX',
                    ' aaaX',
                ].join('\n');
                expect(sortLinesFilter.processText(filterConfig, inputText)).toEqual(expectedText);
            });
        });

    });
});
