import Filter from './Filter';

class MatchLinesFilter extends Filter {

	/**
	 * @param {MatchLinesFilterConfig} filterConfig
	 * @param {string} inputText
	 *
	 * @returns {string}
	 */
	processText(filterConfig, inputText) {

		var line,
			lines,
			matchedLines,
			searchRegexp,
			l;
		try {

			//  FIXME this.resetRegExpValidation();
			lines = this.splitTextIntoLines(inputText);
			filterConfig.totalLinesCount = lines.length;
			filterConfig.matchedLinesCount = 0;

			if (!filterConfig.searchString) {
				filterConfig.matchedLinesCount = filterConfig.totalLinesCount;
				return inputText; // dont change anything when there is no regular expression
			}

			matchedLines = [];

			searchRegexp = this.buildRegExp(filterConfig.searchString, filterConfig.searchFlagCaseInsensitive, null, null);

			for (l in lines) {
				if (lines.hasOwnProperty(l)) {
					line = lines[l];

					if (filterConfig.flagInvertMatch) {
						if (!line.match(searchRegexp)) {
							matchedLines.push(line);
						}
					} else {
						if (line.match(searchRegexp)) {
							matchedLines.push(line);
						}
					}
				}
			}

			filterConfig.matchedLinesCount = matchedLines.length;

			return matchedLines.join("\n");
		} catch (e) {
			// FIXME throw this.setupValidationFromError(e);
		}
	}
}

export default MatchLinesFilter;
