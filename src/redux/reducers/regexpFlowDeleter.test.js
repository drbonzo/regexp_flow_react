import regexpFlowDeleter from './regexpFlowDeleter';
import {deleteRegexpFlow} from '../actions';
import RegexpFlow from '../../RegexpFlow/RegexpFlow';
import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig';
import ReplaceFilterConfig from '../../RegexpFlow/FilterConfig/ReplaceFilterConfig';

describe('regexpFlowDeleter reducer', function () {

    const existingRegexpFlowId_2 = 2;
    const existingRegexpFlowId_3 = 3;
    const missingRegexpFlowId = 999;

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

    let rf1;
    let rf2;
    let rf3;
    let state;

    beforeEach(function () {
        rf1 = buildRegexpFlow(1);
        rf2 = buildRegexpFlow(2);
        rf3 = buildRegexpFlow(3);
        state = {
            inputText: 'Lorem ipsum some text',
            outputText: 'Lorem ipsum some text',
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

    describe('when state has RegexpFlow', function () {
        describe('and currentRegexpFlow has the same RegexpFlow loaded', function () {
            beforeEach(function () {
                state.currentRegexpFlow.id = existingRegexpFlowId_2;
                state.currentRegexpFlow.description = rf2.description;
                state.currentRegexpFlow.filterConfigs = rf2.filterConfigs;
            });

            //

            it('should delete existing RegexpFlow', function () {
                const newState = regexpFlowDeleter(state, deleteRegexpFlow(existingRegexpFlowId_2));
                const expectedState = {
                    inputText: 'Lorem ipsum some text',
                    outputText: 'Lorem ipsum some text',
                    currentRegexpFlow: {
                        id: existingRegexpFlowId_2,
                        description: rf2.description,
                        filterConfigs: rf2.filterConfigs
                    },
                    regexpFlows: [
                        rf1,
                        rf3
                    ],
                    nextRegexpFlowIndex: 4
                };
                expect(newState).toEqual(expectedState);
            });
        });

        describe('and currentRegexpFlow does NOT have the same RegexpFlow loaded', function () {
            it('should delete existing RegexpFlow', function () {
                const newState = regexpFlowDeleter(state, deleteRegexpFlow(existingRegexpFlowId_3));
                const expectedState = {
                    inputText: 'Lorem ipsum some text',
                    outputText: 'Lorem ipsum some text',
                    currentRegexpFlow: {
                        id: null,
                        description: '',
                        filterConfigs: {}
                    },
                    regexpFlows: [
                        rf1,
                        rf2
                    ],
                    nextRegexpFlowIndex: 4
                };
                expect(newState).toEqual(expectedState);
            });
        });
    });

    describe('when state does not have RegexpFlow', function () {
        it('it should do nothing', function () {
            const newState = regexpFlowDeleter(state, deleteRegexpFlow(missingRegexpFlowId));
            expect(newState).toEqual(state);
        });
    });
});
