import Filter from './Filter';

class MatchLinesFilter extends Filter {

    /**
     * @param {MatchLinesFilterConfig} filterConfig
     * @param {string} inputText
     *
     * @returns {string}
     */
    processText(filterConfig, inputText) {

        try {

            //  FIXME this.resetRegExpValidation();
            let lines = this.splitTextIntoLines(inputText);
            filterConfig.totalLinesCount = lines.length;
            filterConfig.matchedLinesCount = 0;

            if (!filterConfig.searchString) {
                filterConfig.matchedLinesCount = filterConfig.totalLinesCount;
                return inputText; // dont change anything when there is no regular expression
            }

            let matchedLines = [];

            let searchRegexp = this.buildRegExp(filterConfig.searchString, filterConfig.caseInsensitive, null, null);

            for (let l in lines) {
                if (lines.hasOwnProperty(l)) {
                    let line = lines[l];

                    if (filterConfig.invertMatch) {
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

            return matchedLines.join('\n');
        } catch (e) {
            // FIXME throw this.setupValidationFromError(e);
        }
    }
}

export default MatchLinesFilter;
