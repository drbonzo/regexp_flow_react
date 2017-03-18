import ReplaceFilter from './ReplaceFilter';
import ReplaceFilterConfig from '../FilterConfig/ReplaceFilterConfig';

describe('ReplaceFilter', function () {

	/**
	 * @var {ReplaceFilter}
	 */
    let replaceFilter;

	/**
	 * @var {ReplaceFilterConfig}
	 */
    let filterConfig;

    describe('processText', function () {

        beforeEach(function () {
            replaceFilter = new ReplaceFilter();
            filterConfig = new ReplaceFilterConfig();
        });


        describe('empty values', function () {
            it('should return empty string if input is empty', function () {
                filterConfig.searchString = '\\d';
                filterConfig.replaceString = '[DIGIT]';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, '')).toEqual('');
                expect(filterConfig.replacementsCount).toEqual(0);
            });

            it('should return input text when regexp is empty', function () {
                filterConfig.searchString = '';
                filterConfig.replaceString = '';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
                expect(filterConfig.replacementsCount).toEqual(0);
            });

            it('should return input string when nothing matches regexp', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.replaceString = '--- $1 ---';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor sit amet');
                expect(filterConfig.replacementsCount).toEqual(0);
            });
        });

        describe('regular processing', function () {
            it('should replace matched text', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.replaceString = '[DIGITS]';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lorem 123 ipsum 456 dolor')).toEqual('Lorem [DIGITS] ipsum [DIGITS] dolor');
                expect(filterConfig.replacementsCount).toEqual(2);
            });
        });

        describe('special characters', function () {
            it('newline character replacement works (user cannot type this)', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.replaceString = '\n';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lorem 123 ipsum 456 dolor')).toEqual('Lorem \n ipsum \n dolor');
                expect(filterConfig.replacementsCount).toEqual(2);
            });

			// user enters string (two characters): \n
			// which would be entered in code as: '\\n'
            it('backslash+n also is replaced with newline', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.replaceString = '\\n';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lorem 123 ipsum 456 dolor')).toEqual('Lorem \n ipsum \n dolor');
                expect(filterConfig.replacementsCount).toEqual(2);
            });

            it('tab character replacement works (user cannot type this)', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.replaceString = '\t';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lorem 123 ipsum 456 dolor')).toEqual('Lorem \t ipsum \t dolor');
                expect(filterConfig.replacementsCount).toEqual(2);
            });

            it('backslash+n also is replaced with newline', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.replaceString = '\\t';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lorem 123 ipsum 456 dolor')).toEqual('Lorem \t ipsum \t dolor');
                expect(filterConfig.replacementsCount).toEqual(2);
            });

            it('[FIX] multiple \\n or \\t can be in replacement string', function () {
                filterConfig.searchString = '(\\d)(\\d)(\\d)(\\d)';
                filterConfig.replaceString = '$1\\n$2\\n$3\\n$4';
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, '1234')).toEqual('1\n2\n3\n4');
                expect(filterConfig.replacementsCount).toEqual(1);
            });
        });

        describe('flags', function () {
            it('should replace just first match when global flag is off', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.replaceString = '[DIGIT]';
                filterConfig.global = false;
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lor2em ips542um 534 dolor s2333id amet')).toEqual('Lor[DIGIT]em ips542um 534 dolor s2333id amet');
                expect(filterConfig.replacementsCount).toEqual(1);
            });

            it('should replace all matches when global flag is on', function () {
                filterConfig.searchString = '\\d+';
                filterConfig.replaceString = '[DIGIT]';
                filterConfig.global = true;
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, 'Lor2em ips542um 534 dolor s2333id amet')).toEqual('Lor[DIGIT]em ips[DIGIT]um [DIGIT] dolor s[DIGIT]id amet');
                expect(filterConfig.replacementsCount).toEqual(4);
            });

            it('should replace just matches with same case when case insensitivity flag is off', function () {
                filterConfig.searchString = '[a-z]';
                filterConfig.replaceString = '[LETTER]';
                filterConfig.global = true;
                filterConfig.caseInsensitive = false;
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, '12 ab 34 CD 56 eF 78 Gh 90')).toEqual('12 [LETTER][LETTER] 34 CD 56 [LETTER]F 78 G[LETTER] 90');
                expect(filterConfig.replacementsCount).toEqual(4);
            });

            it('should replace all matches when case insensitivity flag is on', function () {
                filterConfig.searchString = '[a-z]';
                filterConfig.replaceString = '[LETTER]';
                filterConfig.global = true;
                filterConfig.caseInsensitive = true;
                replaceFilter = new ReplaceFilter();

                expect(replaceFilter.processText(filterConfig, '12 ab 34 CD 56 eF 78 Gh 90')).toEqual('12 [LETTER][LETTER] 34 [LETTER][LETTER] 56 [LETTER][LETTER] 78 [LETTER][LETTER] 90');
                expect(filterConfig.replacementsCount).toEqual(8);
            });

            it('should replace in first line when multiline flag is off', function () {
                filterConfig.searchString = '^([a-zA-Z])';
                filterConfig.replaceString = '[$1]';
                filterConfig.global = true;
                filterConfig.multiline = false;
                replaceFilter = new ReplaceFilter();

                let inputText;
                let expectedText;
                inputText = 'Lorem ipsum dolor sit amet\n' +
					'consectetur adipiscing elit\n' +
					'Nunc in felis tincidunt\n' +
					'pretium mi et, bibendum nisi\n';
                expectedText = '[L]orem ipsum dolor sit amet\n' +
					'consectetur adipiscing elit\n' +
					'Nunc in felis tincidunt\n' +
					'pretium mi et, bibendum nisi\n';
                expect(replaceFilter.processText(filterConfig, inputText)).toEqual(expectedText);

                expect(filterConfig.replacementsCount).toEqual(1);
            });

            it('should replace in each line when multiline flag is on', function () {
                filterConfig.searchString = '^([a-zA-Z])';
                filterConfig.replaceString = '[$1]';
                filterConfig.global = true;
                filterConfig.multiline = true;
                replaceFilter = new ReplaceFilter();

                let inputText;
                let expectedText;
                inputText = 'Lorem ipsum dolor sit amet\n' +
					'consectetur adipiscing elit\n' +
					'Nunc in felis tincidunt\n' +
					'pretium mi et, bibendum nisi\n';
                expectedText = '[L]orem ipsum dolor sit amet\n' +
					'[c]onsectetur adipiscing elit\n' +
					'[N]unc in felis tincidunt\n' +
					'[p]retium mi et, bibendum nisi\n';
                expect(replaceFilter.processText(filterConfig, inputText)).toEqual(expectedText);

                expect(filterConfig.replacementsCount).toEqual(4);
            });
        });

		// FIXME describe("errors", function () {
		//
		// 	it("invalid regexp sets up validation errors and throws exception", function () {
		// 		try {
		// 			filterConfig.searchString = '\\d+';
		// 			filterConfig.replaceString = '[DIGITS]';
		// 			replaceFilter = new ReplaceFilter();
		//
		// 			replaceFilter = new ReplaceFilter('foo[ReplaceFilterSpec.js', '--- $1 ---');
		// 			replaceFilter.processText(filterConfig, 'Lorem ipsum dolor sit amet foo[');
		// 			expect(true).toEqual(false);
		// 		} catch (e) {
		// 			expect(replaceFilter.regexpIsValid).toEqual(false);
		// 			expect(replaceFilter.regexpValidationMessage.length).toBeGreaterThan(1);
		// 			expect(filterConfig.replacementsCount).toEqual(0);
		// 		}
		// 	});
		// });
		//
    });
});
