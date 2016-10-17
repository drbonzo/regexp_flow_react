import RegexpFlow from './RegexpFlow'

describe("RegexpFlow", function () {

	/**
	 * @var {RegexpFlow}
	 */
	var regexpFlow;

	beforeEach(function () {
		regexpFlow = new RegexpFlow();
	});

	it("by default has no textProcessors", function () {
		expect(Object.keys(regexpFlow.textProcessors).length).toEqual(0);
	});

	it("we can add and remove all textProcessors", function () {
		regexpFlow.textProcessors[1] = {};
		regexpFlow.textProcessors[2] = {};
		expect(Object.keys(regexpFlow.textProcessors).length).toEqual(2);
	});

	it("has empty description", function () {
		expect(regexpFlow.description).toEqual("");
	});
});
