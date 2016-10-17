import FindAllTextProcessor from './FindAllTextProcessor'

describe("FindAllTextProcessor", function () {

	/**
	 * {FindAllTextProcessor}
	 */
	var findAllTextProcessor;

	describe("defaults", function () {

		beforeEach(function () {
			findAllTextProcessor = new FindAllTextProcessor('fo{1,2}bar');
		});

		it("should have default values", function () {
			expect(findAllTextProcessor.displayName).toEqual('Find all matches');
			expect(findAllTextProcessor.typeName).toEqual('FindAllTextProcessor');
			expect(findAllTextProcessor.searchString).toEqual('fo{1,2}bar');
			expect(findAllTextProcessor.searchFlagGlobal).toEqual(true);
			expect(findAllTextProcessor.searchFlagCaseInsensitive).toEqual(false);
			expect(findAllTextProcessor.searchFlagMultiline).toEqual(true);
			expect(findAllTextProcessor.matchesCount).toEqual(0);
		});
	});

	describe("processText", function () {

		describe("empty values", function () {
			it("should return empty string if input is empty", function () {
				findAllTextProcessor = new FindAllTextProcessor('\\d+');
				expect(findAllTextProcessor.processText('')).toEqual('');
				expect(findAllTextProcessor.matchesCount).toEqual(0);
			});

			it("should return input text when regexp is empty", function () {
				findAllTextProcessor = new FindAllTextProcessor('');
				expect(findAllTextProcessor.processText('Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
				expect(findAllTextProcessor.matchesCount).toEqual(0);
			});

		});

		describe("normal matching", function () {

			it("should return found matches, each in new line", function () {
				findAllTextProcessor = new FindAllTextProcessor('\\d+');
				expect(findAllTextProcessor.processText('Lor2em ips542um 534 dolor s2333id amet')).toEqual('2\n542\n534\n2333');
				expect(findAllTextProcessor.matchesCount).toEqual(4);
			});

			it("should return empty string when no matches are found", function () {
				findAllTextProcessor = new FindAllTextProcessor('\\d+');
				expect(findAllTextProcessor.processText('Lorem ipsum dolor sit amet')).toEqual('');
				expect(findAllTextProcessor.matchesCount).toEqual(0);
			});
		});

		describe("flags", function () {

			it("should return just first match when global flag is off", function () {
				findAllTextProcessor = new FindAllTextProcessor('\\d+');
				findAllTextProcessor.searchFlagGlobal = false;
				expect(findAllTextProcessor.processText('Lor2em ips542um 534 dolor s2333id amet')).toEqual('2');
				expect(findAllTextProcessor.matchesCount).toEqual(1);
			});

			it("should return all matches when global flag is on", function () {
				findAllTextProcessor = new FindAllTextProcessor('\\d+');
				findAllTextProcessor.searchFlagGlobal = true;
				expect(findAllTextProcessor.processText('Lor2em ips542um 534 dolor s2333id amet')).toEqual('2\n542\n534\n2333');
				expect(findAllTextProcessor.matchesCount).toEqual(4);
			});

			it("should return just case matched items when case insensivite flag is off", function () {
				findAllTextProcessor = new FindAllTextProcessor('lorem');
				findAllTextProcessor.searchFlagCaseInsensitive = false;
				expect(findAllTextProcessor.processText('Lorem LOREM LoReM loreM lorem')).toEqual('lorem');
				expect(findAllTextProcessor.matchesCount).toEqual(1);
			});

			it("should return all matched items when case insensivite flag is on", function () {
				findAllTextProcessor = new FindAllTextProcessor('lorem');
				findAllTextProcessor.searchFlagCaseInsensitive = true;
				expect(findAllTextProcessor.processText('Lorem LOREM LoReM loreM lorem')).toEqual('Lorem\nLOREM\nLoReM\nloreM\nlorem');
				expect(findAllTextProcessor.matchesCount).toEqual(5);
			});
		});


		describe("errors", function () {
			it("invalid regexp sets up validation errors and throws exception", function () {
				try {
					findAllTextProcessor = new FindAllTextProcessor('foo[');
					findAllTextProcessor.processText('Lorem ipsum dolor sit amet foo[');
					expect(true).toEqual(false);
				} catch (e) {
					expect(findAllTextProcessor.regexpIsValid).toEqual(false);
					expect(findAllTextProcessor.regexpValidationMessage.length).toBeGreaterThan(0);
					expect(findAllTextProcessor.matchesCount).toEqual(0);
				}
			});

		});
	});
});