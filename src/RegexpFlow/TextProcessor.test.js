import TextProcessor from './TextProcessor'

describe("TextProcessor", function () {

	/**
	 * {TextProcessor}
	 */
	var textProcessor;

	beforeEach(function () {
		textProcessor = new TextProcessor();
	});

	describe("defaults", function () {
		it("showDescription is empty string", function () {
			expect(textProcessor.showDescription).toEqual(false)
		});

		it("description is null", function () {
			expect(textProcessor.description).toEqual('')
		});
	});

	describe("buildingRegExp", function () {

		it("should build RegExp object with no flags when given all flags arguments to false", function () {
			var actual = textProcessor.buildRegExp('foobar', false, false, false);
			expect(actual).toEqual(/foobar/);
		});

		it("should build RegExp object with all flags when all flags are set to true", function () {
			var actual = textProcessor.buildRegExp('foobar', true, true, true);
			expect(actual).toEqual(/foobar/gim);
		});

	});

	describe("splitTextIntoLines", function () {

		it("should split text into lines by \\n character", function () {
			expect(textProcessor.splitTextIntoLines("foo\nbar")).toEqual(['foo', 'bar']);
		});

		it("should split text into lines by \\r\\n character", function () {
			expect(textProcessor.splitTextIntoLines("foo\r\nbar")).toEqual(['foo', 'bar']);
		});

		it("should treat \\n\\n as single separator", function () { // FIXME wtf? why split treats \n\n as single separator?
			expect(textProcessor.splitTextIntoLines("foo\n\nbar")).toEqual(['foo', '', 'bar']);
		});

		it("should treat \\n\\r as single separator", function () { // FIXME wtf? why split treats \n\n as single separator?
			expect(textProcessor.splitTextIntoLines("foo\n\rbar")).toEqual(['foo', '', 'bar']);
		});

		it("should split text into lines by \\n and \\r\\n character", function () {
			expect(textProcessor.splitTextIntoLines("Lorem\r\nipsum\ndolor sid amet")).toEqual(['Lorem', 'ipsum', 'dolor sid amet']);
		});
	});

	describe("abstract methods", function () {

		it("processText should throw exception as it is 'abstract' class", function () {
			expect(function () {
				textProcessor.processText('Lorem ipsum');
			}).toThrow();
		});

		it("initializeFromObject should throw exception as it is 'abstract' class", function () {
			expect(function () {
				textProcessor.initializeFromObject('{}');
			}).toThrow();
		});

		it("getExportObject should throw exception as it is 'abstract' class", function () {
			expect(function () {
				textProcessor.getExportObject('{}');
			}).toThrow();
		});
	});

	describe("regexp validation errors", function () {

		it("by default there are no validation errors", function () {
			expect(textProcessor.regexpIsValid).toEqual(true);
			expect(textProcessor.regexpValidationMessage).toEqual('');
		});

		it("we can set validation errors from exception", function () {
			var exception = {
				toString: function () {
					return 'I am the message';
				}
			};

			expect(textProcessor.setupValidationFromError(exception)).toEqual(exception);
			expect(textProcessor.regexpIsValid).toEqual(false);
			expect(textProcessor.regexpValidationMessage).toEqual('I am the message');
		});

		it("we can reset validation errors", function () {
			textProcessor.regexpIsValid = false;
			textProcessor.regexpValidationMessage = 'foobar';

			expect(textProcessor.regexpIsValid).toEqual(false);
			expect(textProcessor.regexpValidationMessage).toEqual('foobar');

			textProcessor.resetRegExpValidation();

			expect(textProcessor.regexpIsValid).toEqual(true);
			expect(textProcessor.regexpValidationMessage).toEqual('');
		});

	});

	describe("shouldShowDescription()", function () {

		it("by default returns false", function () {
			expect(textProcessor.shouldShowDescription()).toEqual(false);
		});

		//

		it("should return true when showDescription is true and has description", function () {
			textProcessor.showDescription = true;
			textProcessor.description = 'some description';
			expect(textProcessor.showDescription).toEqual(true);
			expect(textProcessor.description.length).toBeGreaterThan(0);
			expect(textProcessor.shouldShowDescription()).toEqual(true);
		});

		it("should return true when showDescription is true and does not havedescription", function () {
			textProcessor.showDescription = true;
			expect(textProcessor.showDescription).toEqual(true);
			expect(textProcessor.description).toEqual('')
			expect(textProcessor.shouldShowDescription()).toEqual(true);
		});
	});

});
