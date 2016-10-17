import MatchInLineTextProcessor from './MatchInLineTextProcessor'

describe("MatchInLineTextProcessor", function () {

	/**
	 * {MatchInLineTextProcessor}
	 */
	var matchInLineTextProcessor;

	describe("defaults", function () {

		beforeEach(function () {
			matchInLineTextProcessor = new MatchInLineTextProcessor('fo{1,2}bar');
		});

		it("should have default values", function () {
			expect(matchInLineTextProcessor.displayName).toEqual('Match in line');
			expect(matchInLineTextProcessor.typeName).toEqual('MatchInLineTextProcessor');
			expect(matchInLineTextProcessor.searchString).toEqual('fo{1,2}bar');
			expect(matchInLineTextProcessor.searchFlagCaseInsensitive).toEqual(false);
			expect(matchInLineTextProcessor.totalLinesCount).toEqual(0);
			expect(matchInLineTextProcessor.linesMatchedCount).toEqual(0);
		});
	});

	describe("processText", function () {

		describe("empty values", function () {

			it("should return every single line if regexp is empty", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('');
				expect(matchInLineTextProcessor.processText('Lorem\nIpsum\nDolor')).toEqual('Lorem\nIpsum\nDolor');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(3);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(3);
			});

			it("should return empty text when input text and regexp are empty", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('');
				expect(matchInLineTextProcessor.processText('')).toEqual('');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(1);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(1);
			});

			it("should return empty text when regexp does not match empty input text", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('[a-z]+');
				expect(matchInLineTextProcessor.processText('')).toEqual('');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(1);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(0);
			});

			it("should return empty text when regexp does not match empty input text", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('[a-z]+');
				expect(matchInLineTextProcessor.processText('123\n123\n123')).toEqual('');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(3);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(0);
			});
		});

		describe("normal processing", function () {
			it("should matched text from each line, each match in separate line", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('\\d+');
				expect(matchInLineTextProcessor.processText('Lorem123ipsum\ndolor456sit\namet789lorem\nipsum dolor sit amet')).toEqual('123\n456\n789');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(4);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(3);
			});

			it("when not using grouping - whole match is being returned in each line", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('\\d+\\.\\d+');
				expect(matchInLineTextProcessor.processText('Foo: 12.95\nBar: 9.99\nLorem: 19.95')).toEqual('12.95\n9.99\n19.95');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(3);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(3);
			});

			it("when using grouping - match form group 1 is being returned in each line", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('(\\d+)\\.\\d+');
				expect(matchInLineTextProcessor.processText('Foo: 12.95\nBar: 9.99\nLorem: 19.95')).toEqual('12\n9\n19');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(3);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(3);
			});
		});

		describe('flags', function () {
			it("should return just lines that match regexp with same case when searchFlagCaseInsensitive is off", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('^[A-Z]+');
				matchInLineTextProcessor.searchFlagCaseInsensitive = false;
				expect(matchInLineTextProcessor.processText('LOREM\nipsum\nDOLOR\nsit\nAMET')).toEqual('LOREM\nDOLOR\nAMET');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(5);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(3);
			});

			it("should return just lines that match regexp with any case when searchFlagCaseInsensitive is off", function () {
				matchInLineTextProcessor = new MatchInLineTextProcessor('^[A-Z]+');
				matchInLineTextProcessor.searchFlagCaseInsensitive = true;
				expect(matchInLineTextProcessor.processText('LOREM\nipsum\nDOLOR\nsit\nAMET')).toEqual('LOREM\nipsum\nDOLOR\nsit\nAMET');
				expect(matchInLineTextProcessor.totalLinesCount).toEqual(5);
				expect(matchInLineTextProcessor.linesMatchedCount).toEqual(5);
			});
		});

		describe('errors', function () {
			it("invalid regexp sets up validation errors and throws exception", function () {
				try {
					matchInLineTextProcessor = new MatchInLineTextProcessor('foo[');
					matchInLineTextProcessor.processText('Lorem ipsum\ndolor sit amet foo[');
					expect(true).toEqual(false);
				} catch (e) {
					expect(matchInLineTextProcessor.regexpIsValid).toEqual(false);
					expect(matchInLineTextProcessor.regexpValidationMessage.length).toBeGreaterThan(0);
					expect(matchInLineTextProcessor.totalLinesCount).toEqual(2);
					expect(matchInLineTextProcessor.linesMatchedCount).toEqual(0);
				}
			});
		});
	});

});
