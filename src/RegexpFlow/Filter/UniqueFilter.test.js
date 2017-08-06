import UniqueFilter from './UniqueFilter';
import UniqueFilterConfig from '../FilterConfig/UniqueFilterConfig';

describe('UniqueFilter', function () {

    /**
     * @var {UniqueFilter}
     */
    let uniqueFilter;

    /**
     * @var {UniqueFilterConfig}
     */
    let filterConfig;

    describe('processText', function () {

        beforeEach(function () {
            uniqueFilter = new UniqueFilter();
            filterConfig = new UniqueFilterConfig();

            expect(filterConfig.addCounter).toBe(false);
        });

        describe('empty values', function () {

            it('should return empty text when input text is empty', function () {
                expect(uniqueFilter.processText(filterConfig, '')).toEqual('');
                expect(filterConfig.totalLinesCount).toEqual(0);
                expect(filterConfig.uniqueLinesCount).toEqual(0);
            });
        });

        describe('normal processing', function () {
            it('should return one line when input text has just one line', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
                expect(filterConfig.totalLinesCount).toEqual(1);
                expect(filterConfig.uniqueLinesCount).toEqual(1);
            });

            it('should return just unique values, in order of their first apearance', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Lorem\nLorem\nIpsum\nDolor\nIpsum\nIpsum')).toEqual('Lorem\nIpsum\nDolor');
                expect(filterConfig.totalLinesCount).toEqual(6);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should tread lines equal with case sensitivity', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Lorem\nlorem\nLorem\nLOREM\nLOREM')).toEqual('Lorem\nlorem\nLOREM');
                expect(filterConfig.totalLinesCount).toEqual(5);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should skip empty lines', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Lorem\n\nlorem\n\nLorem\n\nLOREM')).toEqual('Lorem\nlorem\nLOREM');
                expect(filterConfig.totalLinesCount).toEqual(7);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });
        });
    });

    describe('processText with adding counters', function () {

        beforeEach(function () {
            uniqueFilter = new UniqueFilter();
            filterConfig = new UniqueFilterConfig();
            filterConfig.addCounter = true;
        });

        describe('normal processing', function () {
            it('should return one line when input text has just one line', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Lorem ipsum dolor sit amet')).toEqual('1\tLorem ipsum dolor sit amet');
                expect(filterConfig.totalLinesCount).toEqual(1);
                expect(filterConfig.uniqueLinesCount).toEqual(1);
            });

            it('should return just unique values, in order of their first apearance', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Lorem\nLorem\nIpsum\nDolor\nIpsum\nIpsum')).toEqual('2\tLorem\n3\tIpsum\n1\tDolor');
                expect(filterConfig.totalLinesCount).toEqual(6);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should tread lines equal with case sensitivity', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Lorem\nlorem\nLorem\nLOREM\nLOREM')).toEqual('2\tLorem\n1\tlorem\n2\tLOREM');
                expect(filterConfig.totalLinesCount).toEqual(5);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should skip empty lines', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Lorem\n\nlorem\n\nLorem\n\nLOREM')).toEqual('2\tLorem\n1\tlorem\n1\tLOREM');
                expect(filterConfig.totalLinesCount).toEqual(7);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });
        });
    });

    describe('processText with adding counters with different separator', function () {

        beforeEach(function () {
            uniqueFilter = new UniqueFilter();
            filterConfig = new UniqueFilterConfig();
            filterConfig.addCounter = true;
        });

        describe('normal processing', function () {
            it('should use default counter separator', function () {
                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Aaaa\nAaaa\nBbbb\nCccc\nAaaa\nCccc\nBbbb')).toEqual('3\tAaaa\n2\tBbbb\n2\tCccc');
                expect(filterConfig.totalLinesCount).toEqual(7);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should use TAB counter separator', function () {
                filterConfig.counterSeparator = UniqueFilterConfig.COUNTER_SEPARATOR_TAB;

                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Aaaa\nAaaa\nBbbb\nCccc\nAaaa\nCccc\nBbbb')).toEqual('3\tAaaa\n2\tBbbb\n2\tCccc');
                expect(filterConfig.totalLinesCount).toEqual(7);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should use SEMICOLON counter separator', function () {
                filterConfig.counterSeparator = UniqueFilterConfig.COUNTER_SEPARATOR_SEMICOLON;

                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Aaaa\nAaaa\nBbbb\nCccc\nAaaa\nCccc\nBbbb')).toEqual('3;Aaaa\n2;Bbbb\n2;Cccc');
                expect(filterConfig.totalLinesCount).toEqual(7);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should use COMMA counter separator', function () {
                filterConfig.counterSeparator = UniqueFilterConfig.COUNTER_SEPARATOR_COMMA;

                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Aaaa\nAaaa\nBbbb\nCccc\nAaaa\nCccc\nBbbb')).toEqual('3,Aaaa\n2,Bbbb\n2,Cccc');
                expect(filterConfig.totalLinesCount).toEqual(7);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should use SPACE counter separator', function () {
                filterConfig.counterSeparator = UniqueFilterConfig.COUNTER_SEPARATOR_SPACE;

                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Aaaa\nAaaa\nBbbb\nCccc\nAaaa\nCccc\nBbbb')).toEqual('3 Aaaa\n2 Bbbb\n2 Cccc');
                expect(filterConfig.totalLinesCount).toEqual(7);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

            it('should use TAB counter separator, when setting is invalid', function () {
                filterConfig.counterSeparator = 'INVALID VALUE';

                uniqueFilter = new UniqueFilter();
                expect(uniqueFilter.processText(filterConfig, 'Aaaa\nAaaa\nBbbb\nCccc\nAaaa\nCccc\nBbbb')).toEqual('3\tAaaa\n2\tBbbb\n2\tCccc');
                expect(filterConfig.totalLinesCount).toEqual(7);
                expect(filterConfig.uniqueLinesCount).toEqual(3);
            });

        });
    });
});
