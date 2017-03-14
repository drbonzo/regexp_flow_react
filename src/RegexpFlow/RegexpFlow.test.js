import RegexpFlow from './RegexpFlow';

describe('RegexpFlow', function () {

	/**
	 * @var {RegexpFlow}
	 */
    var regexpFlow;

    beforeEach(function () {
        regexpFlow = new RegexpFlow();
    });

    it('by default has no filterConfigs', function () {
        expect(Object.keys(regexpFlow.filterConfigs).length).toEqual(0);
    });

    it('we can add and remove all filterConfigs', function () {
        regexpFlow.filterConfigs[1] = {};
        regexpFlow.filterConfigs[2] = {};
        expect(Object.keys(regexpFlow.filterConfigs).length).toEqual(2);
    });

    it('has empty description', function () {
        expect(regexpFlow.description).toEqual('');
    });
});
