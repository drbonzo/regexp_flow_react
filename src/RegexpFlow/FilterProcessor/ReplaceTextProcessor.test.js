import ReplaceTextProcessor from './ReplaceTextProcessor'

describe("ReplaceTextProcessor", function () {

	/**
	 * {ReplaceTextProcessor}
	 */
	var replaceTextProcessor;

	describe("defaults", function () {
		beforeEach(function () {
			replaceTextProcessor = new ReplaceTextProcessor('\\d+', '--- $1 ---');
		});

		it("should have default values", function () {
			expect(replaceTextProcessor.displayName).toEqual('Replace in text');
			expect(replaceTextProcessor.typeName).toEqual('ReplaceTextProcessor');
			expect(replaceTextProcessor.searchString).toEqual('\\d+');
			expect(replaceTextProcessor.replaceString).toEqual('--- $1 ---');
			expect(replaceTextProcessor.searchFlagGlobal).toEqual(true);
			expect(replaceTextProcessor.searchFlagCaseInsensitive).toEqual(false);
			expect(replaceTextProcessor.searchFlagMultiline).toEqual(false);
			expect(replaceTextProcessor.replacementsCount).toEqual(0);
		});
	});

	describe("processText", function () {

		describe("empty values", function () {
			it("should return empty string if input is empty", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d', '[DIGIT]');
				expect(replaceTextProcessor.processText('')).toEqual('');
				expect(replaceTextProcessor.replacementsCount).toEqual(0);
			});

			it("should return input text when regexp is empty", function () {
				replaceTextProcessor = new ReplaceTextProcessor('', '');
				expect(replaceTextProcessor.processText('Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
				expect(replaceTextProcessor.replacementsCount).toEqual(0);
			});

			it("should return input string when nothing matches regexp", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d+', '--- $1 ---');
				expect(replaceTextProcessor.processText('Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
				expect(replaceTextProcessor.replacementsCount).toEqual(0);
			});
		});

		describe("regular processing", function () {
			it("should replace matched text", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d+', '[DIGITS]');
				expect(replaceTextProcessor.processText('Lorem 123 ipsum 456 dolor')).toEqual('Lorem [DIGITS] ipsum [DIGITS] dolor');
				expect(replaceTextProcessor.replacementsCount).toEqual(2);
			});
		});

		describe("special characters", function () {
			it("newline character replacement works (user cannot type this)", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d+', '\n');
				expect(replaceTextProcessor.processText('Lorem 123 ipsum 456 dolor')).toEqual('Lorem \n ipsum \n dolor');
				expect(replaceTextProcessor.replacementsCount).toEqual(2);
			});

			// user enters string (two characters): \n
			// which would be entered in code as: '\\n'
			it("backslash+n also is replaced with newline", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d+', "\\n");
				expect(replaceTextProcessor.processText('Lorem 123 ipsum 456 dolor')).toEqual('Lorem \n ipsum \n dolor');
				expect(replaceTextProcessor.replacementsCount).toEqual(2);
			});

			it("tab character replacement works (user cannot type this)", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d+', '\t');
				expect(replaceTextProcessor.processText('Lorem 123 ipsum 456 dolor')).toEqual('Lorem \t ipsum \t dolor');
				expect(replaceTextProcessor.replacementsCount).toEqual(2);
			});

			it("backslash+n also is replaced with newline", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d+', "\\t");
				expect(replaceTextProcessor.processText('Lorem 123 ipsum 456 dolor')).toEqual('Lorem \t ipsum \t dolor');
				expect(replaceTextProcessor.replacementsCount).toEqual(2);
			});

			it("[FIX] multiple \\n or \\t can be in replacement string", function () {
				replaceTextProcessor = new ReplaceTextProcessor('(\\d)(\\d)(\\d)(\\d)', "$1\\n$2\\n$3\\n$4");
				expect(replaceTextProcessor.processText('1234')).toEqual('1\n2\n3\n4');
				expect(replaceTextProcessor.replacementsCount).toEqual(1);
			});
		});

		describe("flags", function () {
			it("should replace just first match when global flag is off", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d+', '[DIGIT]');
				replaceTextProcessor.searchFlagGlobal = false;
				expect(replaceTextProcessor.processText('Lor2em ips542um 534 dolor s2333id amet')).toEqual('Lor[DIGIT]em ips542um 534 dolor s2333id amet');
				expect(replaceTextProcessor.replacementsCount).toEqual(1);
			});

			it("should replace all matches when global flag is on", function () {
				replaceTextProcessor = new ReplaceTextProcessor('\\d+', '[DIGIT]');
				replaceTextProcessor.searchFlagGlobal = true;
				expect(replaceTextProcessor.processText('Lor2em ips542um 534 dolor s2333id amet')).toEqual('Lor[DIGIT]em ips[DIGIT]um [DIGIT] dolor s[DIGIT]id amet');
				expect(replaceTextProcessor.replacementsCount).toEqual(4);
			});

			it("should replace just matches with same case when case insensitivity flag is off", function () {
				replaceTextProcessor = new ReplaceTextProcessor('[a-z]', '[LETTER]');
				replaceTextProcessor.searchFlagGlobal = true;
				replaceTextProcessor.searchFlagCaseInsensitive = false;
				expect(replaceTextProcessor.processText('12 ab 34 CD 56 eF 78 Gh 90')).toEqual('12 [LETTER][LETTER] 34 CD 56 [LETTER]F 78 G[LETTER] 90');
				expect(replaceTextProcessor.replacementsCount).toEqual(4);
			});

			it("should replace all matches when case insensitivity flag is on", function () {
				replaceTextProcessor = new ReplaceTextProcessor('[a-z]', '[LETTER]');
				replaceTextProcessor.searchFlagGlobal = true;
				replaceTextProcessor.searchFlagCaseInsensitive = true;
				expect(replaceTextProcessor.processText('12 ab 34 CD 56 eF 78 Gh 90')).toEqual('12 [LETTER][LETTER] 34 [LETTER][LETTER] 56 [LETTER][LETTER] 78 [LETTER][LETTER] 90');
				expect(replaceTextProcessor.replacementsCount).toEqual(8);
			});

			it("should replace in first line when multiline flag is off", function () {
				replaceTextProcessor = new ReplaceTextProcessor('^([a-zA-Z])', '[$1]');
				replaceTextProcessor.searchFlagGlobal = true;
				replaceTextProcessor.searchFlagMultiline = false;

				var inputText, expectedText;
				inputText = 'Lorem ipsum dolor sit amet\n' +
					'consectetur adipiscing elit\n' +
					'Nunc in felis tincidunt\n' +
					'pretium mi et, bibendum nisi\n';
				expectedText = '[L]orem ipsum dolor sit amet\n' +
					'consectetur adipiscing elit\n' +
					'Nunc in felis tincidunt\n' +
					'pretium mi et, bibendum nisi\n';
				expect(replaceTextProcessor.processText(inputText)).toEqual(expectedText);

				expect(replaceTextProcessor.replacementsCount).toEqual(1);
			});

			it("should replace in each line when multiline flag is on", function () {
				replaceTextProcessor = new ReplaceTextProcessor('^([a-zA-Z])', '[$1]');
				replaceTextProcessor.searchFlagGlobal = true;
				replaceTextProcessor.searchFlagMultiline = true;

				var inputText, expectedText;
				inputText = 'Lorem ipsum dolor sit amet\n' +
					'consectetur adipiscing elit\n' +
					'Nunc in felis tincidunt\n' +
					'pretium mi et, bibendum nisi\n';
				expectedText = '[L]orem ipsum dolor sit amet\n' +
					'[c]onsectetur adipiscing elit\n' +
					'[N]unc in felis tincidunt\n' +
					'[p]retium mi et, bibendum nisi\n';
				expect(replaceTextProcessor.processText(inputText)).toEqual(expectedText);

				expect(replaceTextProcessor.replacementsCount).toEqual(4);
			});
		});


		describe("errors", function () {

			it("invalid regexp sets up validation errors and throws exception", function () {
				try {
					replaceTextProcessor = new ReplaceTextProcessor('foo[ReplaceTextProcessorSpec.js', '--- $1 ---');
					replaceTextProcessor.processText('Lorem ipsum dolor sit amet foo[');
					expect(true).toEqual(false);
				} catch (e) {
					expect(replaceTextProcessor.regexpIsValid).toEqual(false);
					expect(replaceTextProcessor.regexpValidationMessage.length).toBeGreaterThan(1);
					expect(replaceTextProcessor.replacementsCount).toEqual(0);
				}
			});
		});

	});
});
