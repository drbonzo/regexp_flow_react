import Filter from './Filter';

class MatchInLinesFilter extends Filter {

    /**
     * Splits text into lines.
     * Processes each line
     * - if line matches regular expression - then the match is being returned
     *      - if groups were used in regular expression
     * - if line does not match regular expression - then that line is being ommited (not included in result)
     *
     * @param {MatchInLinesFilterConfig} filterConfig
     * @param {string} inputText
     * @returns {string}
     */
    processText(filterConfig, inputText) {

        try {
            // FIXME this.resetRegExpValidation();
            let lines = this.splitTextIntoLines(inputText);
            filterConfig.totalLinesCount = lines.length;
            filterConfig.matchedLinesCount = 0;

            if (!filterConfig.searchString) {
                filterConfig.matchedLinesCount = filterConfig.totalLinesCount;
                return inputText; // dont change anything when there is no regular expression
            }

            let matchesInLines = [];

            let searchRegexp = this.buildRegExp(filterConfig.searchString, filterConfig.caseInsensitive, null, null);

            // wydziel do metody? zeby lista paramow byla krotsza
            for (let l in lines) {
                if (lines.hasOwnProperty(l)) {
                    let line = lines[l];
                    let match = line.match(searchRegexp);

                    if (match) {
                        let matchedText = match[1] || match[0]; // when no groups were used - then $0 is used, else first group is used
                        matchesInLines.push(matchedText);
                    }
                }
            }

            filterConfig.matchedLinesCount = matchesInLines.length;

            return matchesInLines.join('\n');
        } catch (e) {
            // FIXME throw this.setupValidationFromError(e);
        }
    }
}

export default MatchInLinesFilter;
