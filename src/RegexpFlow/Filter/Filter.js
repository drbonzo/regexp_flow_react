class Filter {

    /**
     * @param {FilterConfig} filterConfig
     * @param {string} inputText
     *
     * @return {string}
     */
    processText(filterConfig, inputText) {
        throw new Error('Please implement me!');
    }

    /**
     * Builds regular expression from string + flags
     *
     * @param {string} regularExpressionString
     * @param {Boolean|null} flagCaseInsensitive
     * @param {Boolean|null} flagGlobal if null - then it means FALSE
     * @param {Boolean|null} flagMultiline
     * @returns {RegExp}
     */
    buildRegExp(regularExpressionString, flagCaseInsensitive, flagGlobal, flagMultiline) {
        let flags = [];
        if (flagGlobal) {
            flags.push('g');
        }

        if (flagCaseInsensitive) {
            flags.push('i');
        }

        if (flagMultiline) {
            flags.push('m');
        }

        return new RegExp(regularExpressionString, flags.join(''));
    }

    /**
     * @param {string} inputText
     * @return {Array|string[]}
     */
    splitTextIntoLines(inputText) {
        // regexp without ?: will mess this split
        inputText = inputText.replace(/\r\n/, '\n'); // CRNL => NL
        inputText = inputText.replace(/\r/, '\n'); // CR => NL

        return inputText.split(/\n/);
    }

    resetRegExpValidation() {
        this.regexpIsValid = true;
        this.regexpValidationMessage = '';
    }

    /**
     *
     * @param error exception thrown
     * @returns {*} the same exception
     */
    setupValidationFromError(error) {
        this.regexpIsValid = false;
        this.regexpValidationMessage = error.toString();
        return error;
    }

    shouldShowDescription() {
        return this.showDescription;
    }
}

export default Filter;
