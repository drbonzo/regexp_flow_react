import Filter from './Filter';

class SortLinesFilter extends Filter {

    /**
     * @param {SortLinesFilterConfig} filterConfig
     * @param {string} inputText
     * @returns {string}
     */
    processText(filterConfig, inputText) {

        if (inputText === '') {
            filterConfig.totalLinesCount = 0;
            filterConfig.matchedLinesCount = 0;
            return inputText;
        }

        const textLines = this.splitTextIntoLines(inputText);

        const outputText = textLines.sort((a, b) => a > b).join('\n');
        filterConfig.totalLinesCount = textLines.length;
        filterConfig.matchedLinesCount = textLines.length;

        return outputText;
    }
}

export default SortLinesFilter;
