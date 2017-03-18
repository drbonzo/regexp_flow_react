import Filter from './Filter';

class FindAllFilter extends Filter {

	/**
	 * @param {FindAllFilterConfig} filterConfig
	 * @param {string} inputText
	 *
	 * @returns {string}
	 */
    processText(filterConfig, inputText) {

        try {

            let searchRegexp;
            let matches;

			// FIXME this.resetRegExpValidation();
            filterConfig.matchesCount = 0;

            if (!filterConfig.searchString) {
                return inputText; // dont change anything when there is no regular expression
            }

            searchRegexp = this.buildRegExp(filterConfig.searchString, filterConfig.caseInsensitive, filterConfig.global, filterConfig.multiline);
			// as this regexp is always with /g flag - then it returns only whole matches (no groups)
			// 'lorem ipsum dolor sid amet' - so searching for (\w\w)(\w{3}) in this text will return array with five letter words, no matter whether we use groups or not
            matches = inputText.match(searchRegexp);

            if (matches) {
                filterConfig.matchesCount = matches.length;
                return matches.join('\n');
            }

            filterConfig.matchesCount = 0;
            return '';

        } catch (e) {

			// FIXME throw this.setupValidationFromError(e);

        }
    }
}

export default FindAllFilter;
