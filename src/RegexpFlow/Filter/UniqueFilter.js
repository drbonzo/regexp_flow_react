import Filter from './Filter';

class UniqueFilter extends Filter {

    /**
     * @param {UniqueFilterConfig} filterConfig
     * @param {string} inputText
     * @returns {string}
     */
    processText(filterConfig, inputText) {

        filterConfig.totalLinesCount = 0;
        filterConfig.matchedLinesCount = 0;

        if (inputText.length === 0) {
            return inputText;
        }

        let lines = this.splitTextIntoLines(inputText);
        filterConfig.totalLinesCount = lines.length;

        let uniqueLinesCounters = {};

        for (let l in lines) {
            if (lines.hasOwnProperty(l)) {
                let line = lines[l];

                if (line.length === 0) {
                    continue;
                }

                let weSeeThisLineForTheFirstTime = !uniqueLinesCounters.hasOwnProperty(line);
                if (weSeeThisLineForTheFirstTime) {
                    uniqueLinesCounters[line] = 1;
                } else {
                    uniqueLinesCounters[line]++;
                }
            }
        }

        let uniqueLines = [];
        for (let l in uniqueLinesCounters) {
            if (uniqueLinesCounters.hasOwnProperty(l)) {
                if (filterConfig.addCounter) {
                    uniqueLines.push(`${uniqueLinesCounters[l]}\t${l}`);
                } else {
                    uniqueLines.push(l);
                }
            }
        }

        filterConfig.matchedLinesCount = uniqueLines.length;

        return uniqueLines.join('\n');
    }
}

export default UniqueFilter;
