import Filter from './Filter';

class ReplaceFilter extends Filter {

	/**
	 * @param {ReplaceFilterConfig} filterConfig
	 * @param {string} inputText
	 *
	 * @returns {string}
	 */
	processText(filterConfig, inputText) {

		var searchRegexp,
			matches,
			replacement;
		try {

			// FIXME this.resetRegExpValidation();
			filterConfig.replacementsCount = 0;

			if (!filterConfig.searchString) {
				return inputText; // dont change anything when there is no regular expression
			}

			searchRegexp = this.buildRegExp(filterConfig.searchString, filterConfig.searchFlagCaseInsensitive, filterConfig.searchFlagGlobal, filterConfig.searchFlagMultiline);
			matches = inputText.match(searchRegexp);
			filterConfig.replacementsCount = (matches ? matches.length : 0); // matches is null when no match is found

			replacement = filterConfig.replaceString;

			// replace \n with newline character (same with \t - tab character)
			// but dont replace \\n (nor \\t)
			replacement = replacement.replace(/(\\)?(\\[nt])/g, function (group1, group2) {
				// if (\\)? group has been found then we have two values: group1 and group2 - then dont change anything, as we got \\n
				// if this group has NOT been found - then group2 is undefined - we can replace \n with newline character

				if (group2) {
					// return unchanged string, as it found \\n
					return group1 + group2;
				}

				// replace just \n with newline character
				if (group1 === '\\n') {
					return "\n";
				}

				// if not \\n then it must be \\t
				return "\t";
			});

			return inputText.replace(searchRegexp, replacement);
		} catch (e) {
			// FIXME throw this.setupValidationFromError(e);
		}
	};
}

export default ReplaceFilter;
