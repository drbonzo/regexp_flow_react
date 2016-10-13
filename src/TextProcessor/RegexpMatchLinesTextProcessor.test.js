import RegexpMatchLinesTextProcessor from './RegexpMatchLinesTextProcessor'

describe("RegexpMatchLinesTextProcessor", function () {

	/**
	 * {RegexpMatchLinesTextProcessor}
	 */
	var regexpMatchLinesTextProcessor;

	describe("defaults", function () {

		beforeEach(function () {
			regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('fo{1,2}bar');
		});

		it("should have default values", function () {
			expect(regexpMatchLinesTextProcessor.displayName).toEqual('Match lines');
			expect(regexpMatchLinesTextProcessor.typeName).toEqual('RegexpMatchLinesTextProcessor');
			expect(regexpMatchLinesTextProcessor.searchString).toEqual('fo{1,2}bar');
			expect(regexpMatchLinesTextProcessor.searchFlagCaseInsensitive).toEqual(false);
			expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(0);
			expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(0);
			expect(regexpMatchLinesTextProcessor.flagInvertMatch).toEqual(false);
		});
	});

	describe("processText", function () {

		describe("empty values", function () {
			it("should return empty string if input is empty", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('\\d+');
				expect(regexpMatchLinesTextProcessor.processText('')).toEqual('');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(1);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(0);
			});

			it("should return input text when regexp is empty", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('');
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(3);
			});
		});

		describe('matching and flags', function () {

			it("should return just lines that match regexp when flagInvertMatch is off", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('o');
				regexpMatchLinesTextProcessor.flagInvertMatch = false;
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\ndolor');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(2);
			});

			it("should return empty string when no line matches regexp and flagInvertMatch is off", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('xxx');
				regexpMatchLinesTextProcessor.flagInvertMatch = false;
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(0);
			});

			it("should return every line when every line matches regexp and flagInvertMatch is off", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('[a-z]');
				regexpMatchLinesTextProcessor.flagInvertMatch = false;
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(3);
			});

			it("should return just lines that do not match regexp when flagInvertMatch is on", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('o');
				regexpMatchLinesTextProcessor.flagInvertMatch = true;
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('ipsum');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(1);
			});

			it("should return empty string when all lines match regexp and flagInvertMatch is on", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('[a-z]');
				regexpMatchLinesTextProcessor.flagInvertMatch = true;
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(0);
			});

			it("should return every line when no line matches regexp and flagInvertMatch is on", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('xxx');
				regexpMatchLinesTextProcessor.flagInvertMatch = true;
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\nipsum\ndolor');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(3);
			});


			it("should return just lines that match regexp with same case when searchFlagCaseInsensitive is off", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('L');
				regexpMatchLinesTextProcessor.flagInvertMatch = false;
				regexpMatchLinesTextProcessor.searchFlagCaseInsensitive = false;
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(1);
			});

			it("should return just lines that match regexp with any case when searchFlagCaseInsensitive is off", function () {
				regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('L');
				regexpMatchLinesTextProcessor.flagInvertMatch = false;
				regexpMatchLinesTextProcessor.searchFlagCaseInsensitive = true;
				expect(regexpMatchLinesTextProcessor.processText('Lorem\nipsum\ndolor')).toEqual('Lorem\ndolor');
				expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(3);
				expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(2);
			});
		});

		describe("errors", function () {
			it("invalid regexp sets up validation errors and throws exception", function () {
				try {
					regexpMatchLinesTextProcessor = new RegexpMatchLinesTextProcessor('foo[');
					regexpMatchLinesTextProcessor.processText('Lorem ipsum\ndolor sit amet foo[');
					expect(true).toEqual(false);
				} catch (e) {
					expect(regexpMatchLinesTextProcessor.regexpIsValid).toEqual(false);
					expect(regexpMatchLinesTextProcessor.regexpValidationMessage.length).toBeGreaterThan(0);
					expect(regexpMatchLinesTextProcessor.totalLinesCount).toEqual(2);
					expect(regexpMatchLinesTextProcessor.linesMatchedCount).toEqual(0);
				}
			});
		});
	});

	describe("import/export object", function () {

		describe("initializeFromObject()", function () {

			var sourceObject;

			beforeEach(function () {
				sourceObject = {
					searchString: '[a-z]',
					searchFlagCaseInsensitive: true,
					flagInvertMatch: true,
					isEnabled: true,
					description: 'foobar'
				};
			});

			it("copyPropertiesFrom copies specified properties", function () {
				regexpMatchLinesTextProcessor.initializeFromObject(sourceObject);

				expect(regexpMatchLinesTextProcessor.searchString).toEqual('[a-z]');
				expect(regexpMatchLinesTextProcessor.searchFlagCaseInsensitive).toEqual(true);
				expect(regexpMatchLinesTextProcessor.flagInvertMatch).toEqual(true);
				expect(regexpMatchLinesTextProcessor.isEnabled).toEqual(true);
				expect(regexpMatchLinesTextProcessor.description).toEqual('foobar');
			});

		});

		describe("getExportObject()", function () {

			beforeEach(function () {
				regexpMatchLinesTextProcessor.searchString = 'foo';
				regexpMatchLinesTextProcessor.searchFlagCaseInsensitive = true;
				regexpMatchLinesTextProcessor.flagInvertMatch = true;
				regexpMatchLinesTextProcessor.isEnabled = true;
				regexpMatchLinesTextProcessor.description = 'foobar';
			});

			it("extractPropertiesToObject exports empty object if no properties are specified", function () {
				var exportedObject = regexpMatchLinesTextProcessor.getExportObject();
				expect(exportedObject).toEqual({
					searchString: 'foo',
					searchFlagCaseInsensitive: true,
					flagInvertMatch: true,
					isEnabled: true,
					typeName: 'RegexpMatchLinesTextProcessor',
					description: 'foobar'
				});
			});
		});
	});

});