import Filter from './Filter';

class UniqueFilter extends Filter {

	/**
	 * @param {UniqueFilterConfig} filterConfig
	 * @param {string} inputText
	 * @returns {string}
	 */
    processText(filterConfig, inputText) {

        var lines,
            line,
            l,
            uniqueLinesHash,
            uniqueLines,
            weSeeThisLineForTheFirstTimeAndLineIsNotEmpty;

        filterConfig.totalLinesCount = 0;
        filterConfig.matchedLinesCount = 0;

        if (inputText.length === 0) {
            return inputText;
        }

        lines = this.splitTextIntoLines(inputText);
        filterConfig.totalLinesCount = lines.length;

        uniqueLinesHash = {};

        for (l in lines) {
            if (lines.hasOwnProperty(l)) {
                line = lines[l];

                weSeeThisLineForTheFirstTimeAndLineIsNotEmpty = (!uniqueLinesHash.hasOwnProperty(line) && line.length > 0);
                if (weSeeThisLineForTheFirstTimeAndLineIsNotEmpty) {
                    uniqueLinesHash[line] = line;
                }
            }
        }

        uniqueLines = [];
        for (l in uniqueLinesHash) {
            if (uniqueLinesHash.hasOwnProperty(l)) {
                uniqueLines.push(uniqueLinesHash[l]);
            }
        }

        filterConfig.matchedLinesCount = uniqueLines.length;

        return uniqueLines.join('\n');
    }
}

export default UniqueFilter;
