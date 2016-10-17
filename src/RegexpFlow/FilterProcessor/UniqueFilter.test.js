import UniqueFilter from './UniqueFilter'
import UniqueFilterConfig from '../FilterConfig/UniqueFilterConfig'

describe("UniqueFilter", function () {

	/**
	 * @var {UniqueFilter}
	 */
	var uniqueFilter;

	/**
	 * @var {UniqueFilterConfig}
	 */
	var filterConfig;

	describe("processText", function () {

		beforeEach(function () {
			uniqueFilter = new UniqueFilter();
			filterConfig = new UniqueFilterConfig();
		});

		describe("empty values", function () {

			it("should return empty text when input text is empty", function () {
				expect(uniqueFilter.processText(filterConfig, '')).toEqual('');
				expect(filterConfig.totalLinesCount).toEqual(0);
				expect(filterConfig.linesMatchedCount).toEqual(0);
			});
		});

		describe("normal processing", function () {
			it("should return one line when input text has just one line", function () {
				uniqueFilter = new UniqueFilter();
				expect(uniqueFilter.processText(filterConfig, 'Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
				expect(filterConfig.totalLinesCount).toEqual(1);
				expect(filterConfig.linesMatchedCount).toEqual(1);
			});

			it("should return just unique values, in order of their first apearance", function () {
				uniqueFilter = new UniqueFilter();
				expect(uniqueFilter.processText(filterConfig, 'Lorem\nLorem\nIpsum\nDolor\nIpsum\nIpsum')).toEqual('Lorem\nIpsum\nDolor');
				expect(filterConfig.totalLinesCount).toEqual(6);
				expect(filterConfig.linesMatchedCount).toEqual(3);
			});

			it("should tread lines equal with case sensitivity", function () {
				uniqueFilter = new UniqueFilter();
				expect(uniqueFilter.processText(filterConfig, 'Lorem\nlorem\nLorem\nLOREM\nLOREM')).toEqual('Lorem\nlorem\nLOREM');
				expect(filterConfig.totalLinesCount).toEqual(5);
				expect(filterConfig.linesMatchedCount).toEqual(3);
			});

			it("should skip empty lines", function () {
				uniqueFilter = new UniqueFilter();
				expect(uniqueFilter.processText(filterConfig, 'Lorem\n\nlorem\n\nLorem\n\nLOREM')).toEqual('Lorem\nlorem\nLOREM');
				expect(filterConfig.totalLinesCount).toEqual(7);
				expect(filterConfig.linesMatchedCount).toEqual(3);
			});
		});
	});
});
