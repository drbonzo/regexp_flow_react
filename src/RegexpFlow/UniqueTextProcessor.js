import TextProcessor from './TextProcessor';

/**
 * @constructor
 */
class UniqueTextProcessor extends TextProcessor {
	constructor() {
		super();
		this.displayName = 'Unique';
		this.typeName = 'UniqueTextProcessor';

		/**
		 * @type {number}
		 */
		this.totalLinesCount = 0;

		/**
		 * @type {number}
		 */
		this.linesMatchedCount = 0;
	}

	/**
	 * @param {string} inputText
	 * @returns {string}
	 */
	processText(inputText) {

		var lines,
			line,
			l,
			uniqueLinesHash,
			uniqueLines,
			weSeeThisLineForTheFirstTimeAndLineIsNotEmpty;

		this.totalLinesCount = 0;
		this.linesMatchedCount = 0;

		if (inputText.length === 0) {
			return inputText;
		}

		lines = this.splitTextIntoLines(inputText);
		this.totalLinesCount = lines.length;

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

		this.linesMatchedCount = uniqueLines.length;

		return uniqueLines.join("\n");
	}
}

export default UniqueTextProcessor;
