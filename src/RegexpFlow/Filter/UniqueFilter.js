import Filter from './Filter';
import UniqueFilterConfig from '../FilterConfig/UniqueFilterConfig';

class UniqueFilter extends Filter {

    /**
     * @param {UniqueFilterConfig} filterConfig
     * @param {string} inputText
     * @returns {string}
     */
    processText(filterConfig, inputText) {

        filterConfig.totalLinesCount = 0;
        filterConfig.uniqueLinesCount = 0;

        if (inputText.length === 0) {
            return inputText;
        }

        let lines = this.splitTextIntoLines(inputText);

        // remove last line, if empty, and only last one, even if string ends with multiple empty lines
        if (lines[lines.length - 1] === '') {
            lines.pop();
        }

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
        let counterSeparatorCharacter = this.buildCounterSeparatorCharacter(filterConfig.counterSeparator);
        for (let l in uniqueLinesCounters) {
            if (uniqueLinesCounters.hasOwnProperty(l)) {
                if (filterConfig.addCounter) {
                    uniqueLines.push(`${uniqueLinesCounters[l]}${counterSeparatorCharacter}${l}`);
                } else {
                    uniqueLines.push(l);
                }
            }
        }

        filterConfig.uniqueLinesCount = uniqueLines.length;

        return uniqueLines.join('\n');
    }

    buildCounterSeparatorCharacter(counterSeparator) {

        let characterMap = {};
        characterMap[UniqueFilterConfig.COUNTER_SEPARATOR_TAB] = '\t';
        characterMap[UniqueFilterConfig.COUNTER_SEPARATOR_SEMICOLON] = ';';
        characterMap[UniqueFilterConfig.COUNTER_SEPARATOR_COMMA] = ',';
        characterMap[UniqueFilterConfig.COUNTER_SEPARATOR_SPACE] = ' ';
        return characterMap[counterSeparator] || '\t';
    }
}

export default UniqueFilter;
