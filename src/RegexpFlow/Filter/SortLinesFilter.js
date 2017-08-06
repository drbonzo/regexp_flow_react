import Filter from './Filter';

class SortLinesFilter extends Filter {

    /**
     * @param {SortLinesFilterConfig} filterConfig
     * @param {string} inputText
     * @returns {string}
     */
    processText(filterConfig, inputText) {

        if (inputText === '') {
            return inputText;
        }

        const textLines = this.splitTextIntoLines(inputText);

        const compareFunction = (filterConfig.invertOrder ? this._sortInDescendingOrder : this._sortInAscendingOrder);
        const outputText = textLines.sort(compareFunction).join('\n');

        return outputText;
    }

    /**
     * @param {string} a
     * @param {string} b
     * @returns {number}
     * @private
     */
    _sortInAscendingOrder(a, b) {
        return a.localeCompare(b);
    }

    /**
     * @param {string} a
     * @param {string} b
     * @returns {number}
     * @private
     */
    _sortInDescendingOrder(a, b) {
        return b.localeCompare(a);
    }
}

export default SortLinesFilter;
