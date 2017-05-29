import regexpFlowClearer from './regexpFlowClearer';
import {clearRegexpFlow} from '../actions';
import RegexpFlow from '../../RegexpFlow/RegexpFlow';
import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig';
import ReplaceFilterConfig from '../../RegexpFlow/FilterConfig/ReplaceFilterConfig';
import UniqueFilterConfig from '../../RegexpFlow/FilterConfig/UniqueFilterConfig';

describe('regexpFlowClearer reducer', function () {

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

    /**
     * @returns {Object}
     */
    function buildThreeFilterConfigs() {

        const filterConfigs = {};

        const fc_1 = new FindAllFilterConfig();
        fc_1.id = 1;
        fc_1.searchString = 'Some search string 1';
        fc_1.global = true;
        filterConfigs[1] = fc_1;

        const fc_2 = new ReplaceFilterConfig();
        fc_2.id = 2;
        fc_2.searchString = 'Some search string 2';
        fc_2.replaceString = 'Ipsum';
        filterConfigs[2] = fc_2;

        const fc_3 = new UniqueFilterConfig();
        fc_3.id = 3;
        fc_3.enabled = false;
        filterConfigs[3] = fc_3;

        return filterConfigs;
    }

    describe('currentRegexpFlow is empty', function () {

        let rf1;
        let rf2;
        let rf3;
        let state;

        beforeEach(function () {
            rf1 = buildRegexpFlow(1);
            rf2 = buildRegexpFlow(2);
            rf3 = buildRegexpFlow(3);
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

        it('should keep currentRegexpFlow empty', function () {
            const newState = regexpFlowClearer(state, clearRegexpFlow());
            const expectedState = {
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
            expect(newState).toEqual(expectedState);
        });
    });

    describe('currentRegexpFlow is NOT empty', function () {

        let rf1;
        let rf2;
        let rf3;
        let state;

        beforeEach(function () {
            rf1 = buildRegexpFlow(1);
            rf2 = buildRegexpFlow(2);
            rf3 = buildRegexpFlow(3);
            state = {
                inputText: 'Aaaaaaaa',
                outputText: 'Bbbbbbbbb',
                currentRegexpFlow: {
                    id: 3,
                    description: 'Some description',
                    filterConfigs: buildThreeFilterConfigs()
                },
                regexpFlows: [
                    rf1,
                    rf2,
                    rf3
                ],
                nextRegexpFlowIndex: 4
            };
        });

        it('should clear currentRegexpFlow', function () {
            const newState = regexpFlowClearer(state, clearRegexpFlow());
            const expectedState = {
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
            expect(newState).toEqual(expectedState);
        });
    });
});
