import MatchLinesTextProcessor from './MatchLinesTextProcessor'

describe("MatchLinesTextProcessor", function () {

	/**
	 * {MatchLinesTextProcessor}
	 */
	var matchLinesTextProcessor;

	describe("defaults", function () {

		beforeEach(function () {
			matchLinesTextProcessor = new MatchLinesTextProcessor('fo{1,2}bar');
		});

		it("should have default values", function () {
			expect(matchLinesTextProcessor.displayName).toEqual('Match lines');
			expect(matchLinesTextProcessor.typeName).toEqual('MatchLinesTextProcessor');
			expect(matchLinesTextProcessor.searchString).toEqual('fo{1,2}bar');
			expect(matchLinesTextProcessor.searchFlagCaseInsensitive).toEqual(false);
			expect(matchLinesTextProcessor.totalLinesCount).toEqual(0);
			expect(matchLinesTextProcessor.linesMatchedCount).toEqual(0);
			expect(matchLinesTextProcessor.flagInvertMatch).toEqual(false);
		});
	});

	describe("processText", function () {

		describe("empty values", function () {
			it("should return empty string if input is empty", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('\\d+');
				expect(matchLinesTextProcessor.processText('')).toEqual('');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(1);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(0);
			});

			it("should return input text when regexp is empty", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('');
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(3);
			});
		});

		describe('matching and flags', function () {

			it("should return just lines that match regexp when flagInvertMatch is off", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('o');
				matchLinesTextProcessor.flagInvertMatch = false;
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\ndolor');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(2);
			});

			it("should return empty string when no line matches regexp and flagInvertMatch is off", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('xxx');
				matchLinesTextProcessor.flagInvertMatch = false;
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(0);
			});

			it("should return every line when every line matches regexp and flagInvertMatch is off", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('[a-z]');
				matchLinesTextProcessor.flagInvertMatch = false;
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(3);
			});

			it("should return just lines that do not match regexp when flagInvertMatch is on", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('o');
				matchLinesTextProcessor.flagInvertMatch = true;
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('ipsum');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(1);
			});

			it("should return empty string when all lines match regexp and flagInvertMatch is on", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('[a-z]');
				matchLinesTextProcessor.flagInvertMatch = true;
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(0);
			});

			it("should return every line when no line matches regexp and flagInvertMatch is on", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('xxx');
				matchLinesTextProcessor.flagInvertMatch = true;
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(3);
			});


			it("should return just lines that match regexp with same case when searchFlagCaseInsensitive is off", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('L');
				matchLinesTextProcessor.flagInvertMatch = false;
				matchLinesTextProcessor.searchFlagCaseInsensitive = false;
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(1);
			});

			it("should return just lines that match regexp with any case when searchFlagCaseInsensitive is off", function () {
				matchLinesTextProcessor = new MatchLinesTextProcessor('L');
				matchLinesTextProcessor.flagInvertMatch = false;
				matchLinesTextProcessor.searchFlagCaseInsensitive = true;
				expect(matchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\ndolor');
				expect(matchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(matchLinesTextProcessor.linesMatchedCount).toEqual(2);
			});
		});

		describe("errors", function () {
			it("invalid regexp sets up validation errors and throws exception", function () {
				try {
					matchLinesTextProcessor = new MatchLinesTextProcessor('foo[');
					matchLinesTextProcessor.processText('Lorem ipsum\ndolor sit amet foo[');
					expect(true).toEqual(false);
				} catch (e) {
					expect(matchLinesTextProcessor.regexpIsValid).toEqual(false);
					expect(matchLinesTextProcessor.regexpValidationMessage.length).toBeGreaterThan(0);
					expect(matchLinesTextProcessor.totalLinesCount).toEqual(2);
					expect(matchLinesTextProcessor.linesMatchedCount).toEqual(0);
				}
			});
		});
	});
});
