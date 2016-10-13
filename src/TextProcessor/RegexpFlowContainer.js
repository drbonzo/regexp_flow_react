function RegexpFlowContainer() {
	/**
	 * @type {Array|TextProcessor[]}
	 */
	this.textProcessors = [];
	// FIXME metody do modyfikacji tego?

	/**
	 * @type {string}
	 */
	this.description = '';
}

RegexpFlowContainer.prototype.removeAllTextProcessors = function () {
	this.textProcessors.length = 0;
};

export default RegexpFlowContainer;
