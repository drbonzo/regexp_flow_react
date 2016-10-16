import UniqueTextProcessor from './UniqueTextProcessor'

describe("UniqueTextProcessor", function () {

	/**
	 * {UniqueTextProcessor}
	 */
	var uniqueTextProcessor;

	describe("defaults", function () {

		beforeEach(function () {
			uniqueTextProcessor = new UniqueTextProcessor();
			expect(uniqueTextProcessor.totalLinesCount).toEqual(0);
			expect(uniqueTextProcessor.linesMatchedCount).toEqual(0);
		});


		it("should have default values", function () {
			expect(uniqueTextProcessor.displayName).toEqual('Unique');
			expect(uniqueTextProcessor.typeName).toEqual('UniqueTextProcessor');
			expect(uniqueTextProcessor.totalLinesCount).toEqual(0);
			expect(uniqueTextProcessor.linesMatchedCount).toEqual(0);
		});
	});

	describe("processText", function () {

		describe("empty values", function () {

			it("should return empty text when input text is empty", function () {
				expect(uniqueTextProcessor.processText('')).toEqual('');
				expect(uniqueTextProcessor.totalLinesCount).toEqual(0);
				expect(uniqueTextProcessor.linesMatchedCount).toEqual(0);
			});
		});

		describe("normal processing", function () {
			it("should return one line when input text has just one line", function () {
				uniqueTextProcessor = new UniqueTextProcessor();
				expect(uniqueTextProcessor.processText('Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
				expect(uniqueTextProcessor.totalLinesCount).toEqual(1);
				expect(uniqueTextProcessor.linesMatchedCount).toEqual(1);
			});

			it("should return just unique values, in order of their first apearance", function () {
				uniqueTextProcessor = new UniqueTextProcessor();
				expect(uniqueTextProcessor.processText('Lorem\nLorem\nIpsum\nDolor\nIpsum\nIpsum')).toEqual('Lorem\nIpsum\nDolor');
				expect(uniqueTextProcessor.totalLinesCount).toEqual(6);
				expect(uniqueTextProcessor.linesMatchedCount).toEqual(3);
			});

			it("should tread lines equal with case sensitivity", function () {
				uniqueTextProcessor = new UniqueTextProcessor();
				expect(uniqueTextProcessor.processText('Lorem\nlorem\nLorem\nLOREM\nLOREM')).toEqual('Lorem\nlorem\nLOREM');
				expect(uniqueTextProcessor.totalLinesCount).toEqual(5);
				expect(uniqueTextProcessor.linesMatchedCount).toEqual(3);
			});

			it("should skip empty lines", function () {
				uniqueTextProcessor = new UniqueTextProcessor();
				expect(uniqueTextProcessor.processText('Lorem\n\nlorem\n\nLorem\n\nLOREM')).toEqual('Lorem\nlorem\nLOREM');
				expect(uniqueTextProcessor.totalLinesCount).toEqual(7);
				expect(uniqueTextProcessor.linesMatchedCount).toEqual(3);
			});
		});
	});

	describe("import/export object", function () {

		describe("initializeFromObject()", function () {

			var sourceObject;

			beforeEach(function () {
				sourceObject = {
					isEnabled: true,
					description: 'foobar'
				};
			});

			it("copyPropertiesFrom copies specified properties", function () {
				uniqueTextProcessor.initializeFromObject(sourceObject);

				expect(uniqueTextProcessor.isEnabled).toEqual(true);
				expect(uniqueTextProcessor.description).toEqual('foobar');
			});

		});

		describe("getExportObject()", function () {

			beforeEach(function () {
				uniqueTextProcessor.isEnabled = true;
				uniqueTextProcessor.description = 'foobar';
			});

			it("extractPropertiesToObject exports empty object if no properties are specified", function () {
				var exportedObject = uniqueTextProcessor.getExportObject();
				expect(exportedObject).toEqual({
					typeName: 'UniqueTextProcessor',
					isEnabled: true,
					description: 'foobar'
				});
			});
		});
	});
});
