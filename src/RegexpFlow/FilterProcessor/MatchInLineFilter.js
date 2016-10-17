import Filter from './Filter';

class MatchInLineFilter extends Filter {

	/**
	 * Splits text into lines.
	 * Processes each line
	 * - if line matches regular expression - then the match is being returned
	 *      - if groups were used in regular expression
	 * - if line does not match regular expression - then that line is being ommited (not included in result)
	 *
	 * @param {MatchInLineFilterConfig} filterConfig
	 * @param {string} inputText
	 * @returns {string}
	 */
	processText(filterConfig, inputText) {

		try {
			var line,
				matchesInLines,
				searchRegexp,
				match,
				matchedText,
				lines,
				l;

			// FIXME this.resetRegExpValidation();
			lines = this.splitTextIntoLines(inputText);
			filterConfig.totalLinesCount = lines.length;
			filterConfig.linesMatchedCount = 0;

			if (!filterConfig.searchString) {
				filterConfig.linesMatchedCount = filterConfig.totalLinesCount;
				return inputText; // dont change anything when there is no regular expression
			}

			matchesInLines = [];

			searchRegexp = this.buildRegExp(filterConfig.searchString, filterConfig.searchFlagCaseInsensitive, null, null);

			// wydziel do metody? zeby lista paramow byla krotsza
			for (l in lines) {
				if (lines.hasOwnProperty(l)) {
					line = lines[l];
					match = line.match(searchRegexp);

					if (match) {
						matchedText = match[1] || match[0]; // when no groups were used - then $0 is used, else first group is used
						matchesInLines.push(matchedText);
					}
				}
			}

			filterConfig.linesMatchedCount = matchesInLines.length;

			return matchesInLines.join("\n");
		} catch (e) {
			// FIXME throw this.setupValidationFromError(e);
		}
	}
}

export default MatchInLineFilter;
