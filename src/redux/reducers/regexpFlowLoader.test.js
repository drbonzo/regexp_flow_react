import regexpFlowLoader from './regexpFlowLoader';
import {loadRegexpFlow} from '../actions';
import RegexpFlow from '../../RegexpFlow/RegexpFlow';
import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig';
import ReplaceFilterConfig from '../../RegexpFlow/FilterConfig/ReplaceFilterConfig';

describe('regexpFlowLoader reducer', function () {

    /**
     * @param {Number} id
     * @returns {RegexpFlow}
     */
    function buildRegexpFlow(id) {
        const rf = new RegexpFlow();
        rf.id = id;
        rf.description = 'Lorem ipsum ' + id;

        const fc_1 = new FindAllFilterConfig();
        fc_1.id = 1;
        fc_1.searchString = 'Lorem ' + id;
        fc_1.global = false;
        rf.filterConfigs[1] = fc_1;

        const fc_2 = new ReplaceFilterConfig();
        fc_2.id = 2;
        fc_2.searchString = 'Lorem ' + id;
        fc_2.replaceString = 'Ipsum';
        rf.filterConfigs[2] = fc_2;

        return rf;
    }

    describe('when state has RegexpFlow', function () {

        let rf1;
        let rf2;
        let rf3;
        let state;
        const existingRegexpFlowId = 2;

        beforeEach(function () {
            rf1 = buildRegexpFlow(1);
            rf2 = buildRegexpFlow(2);
            rf3 = buildRegexpFlow(3);
        });

        describe('currentRegexpFlow is empty', function () {
            beforeEach(function () {
                state = {
                    inputText: '',
                    outputText: '',
                    currentRegexpFlow: {
                        id: null,
                        description: '',
                        filterConfigs: {}
                    },
                    regexpFlows: [
                        rf1,
                        rf2,
                        rf3
                    ],
                    nextRegexpFlowIndex: 4
                };
            });

            it('should load existing RegexpFlow into currentRegexpFlow', function () {
                const newState = regexpFlowLoader(state, loadRegexpFlow(existingRegexpFlowId));
                const expectedState = {
                    inputText: '',
                    outputText: '',
                    currentRegexpFlow: {
                        id: 2,
                        description: 'Lorem ipsum 2',
                        filterConfigs: rf2.filterConfigs
                    },
                    regexpFlows: [
                        rf1,
                        rf2,
                        rf3
                    ],
                    nextRegexpFlowIndex: 4
                };
                expect(newState).toEqual(expectedState);
            });
        });

        describe('currentRegexpFlow is NOT empty', function () {
            beforeEach(function () {
                state = {
                    inputText: 'Aaaa',
                    outputText: 'AaaaZZZ',
                    currentRegexpFlow: {
                        id: 1,
                        description: 'Lorem ipsum 1',
                        filterConfigs: rf1.filterConfigs
                    },
                    regexpFlows: [
                        rf1,
                        rf2,
                        rf3
                    ],
                    nextRegexpFlowIndex: 4
                };
            });

            it('should load existing RegexpFlow into currentRegexpFlow, overwriting existing data', function () {
                const newState = regexpFlowLoader(state, loadRegexpFlow(existingRegexpFlowId));
                const expectedState = {
                    inputText: '',
                    outputText: '',
                    currentRegexpFlow: {
                        id: 2,
                        description: 'Lorem ipsum 2',
                        filterConfigs: rf2.filterConfigs
                    },
                    regexpFlows: [
                        rf1,
                        rf2,
                        rf3
                    ],
                    nextRegexpFlowIndex: 4
                };
                expect(newState).toEqual(expectedState);
            });

            it('should empty input and output text', function () {
                const newState = regexpFlowLoader(state, loadRegexpFlow(existingRegexpFlowId));
                expect(newState.inputText).toBe('');
                expect(newState.outputText).toBe('');
            });
        });
    });

    describe('when state does not have RegexpFlow', function () {

        let rf1;
        let rf2;
        let rf3;
        let state;
        const missingRegexpFlowId = 999;

        beforeEach(function () {
            rf1 = buildRegexpFlow(1);
            rf2 = buildRegexpFlow(2);
            rf3 = buildRegexpFlow(3);
        });

        describe('currentRegexpFlow is empty', function () {
            beforeEach(function () {
                state = {
                    inputText: '',
                    outputText: '',
                    currentRegexpFlow: {
                        id: null,
                        description: '',
                        filterConfigs: {}
                    },
                    regexpFlows: [
                        rf1,
                        rf2,
                        rf3
                    ],
                    nextRegexpFlowIndex: 4
                };
            });

            it('it should do nothing', function () {
                const newState = regexpFlowLoader(state, loadRegexpFlow(missingRegexpFlowId));
                expect(newState).toEqual(state);
            });
        });

        describe('currentRegexpFlow is NOT empty', function () {
            beforeEach(function () {
                state = {
                    inputText: 'Aaaa',
                    outputText: 'AaaaZZZ',
                    currentRegexpFlow: {
                        id: 1,
                        description: 'Lorem ipsum 1',
                        filterConfigs: rf1.filterConfigs
                    },
                    regexpFlows: [
                        rf1,
                        rf2,
                        rf3
                    ],
                    nextRegexpFlowIndex: 4
                };
            });

            it('should load existing RegexpFlow into currentRegexpFlow, overwriting existing data', function () {
                const newState = regexpFlowLoader(state, loadRegexpFlow(missingRegexpFlowId));
                expect(newState).toEqual(state);
            });

            it('should empty input and output texxt', function () {
                const newState = regexpFlowLoader(state, loadRegexpFlow(missingRegexpFlowId));
                expect(newState.inputText).toBe('Aaaa');
                expect(newState.outputText).toBe('AaaaZZZ');
            });
        });
    });
});
