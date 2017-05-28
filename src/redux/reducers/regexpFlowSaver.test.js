import regexpFlowSaver from './regexpFlowSaver';
import {saveRegexpFlow} from '../actions';
import RegexpFlow from '../../RegexpFlow/RegexpFlow';
import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig';
import ReplaceFilterConfig from '../../RegexpFlow/FilterConfig/ReplaceFilterConfig';
import UniqueFilterConfig from '../../RegexpFlow/FilterConfig/UniqueFilterConfig';

describe('regexpFlowSaver reducer', function () {

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

    const nextRegexpFlowId = 4;
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
                description: 'Some random description',
                filterConfigs: buildThreeFilterConfigs()
            },
            regexpFlows: [
                rf1,
                rf2,
                rf3
            ],
            nextRegexpFlowIndex: nextRegexpFlowId
        };
    });

    describe('currentRegexpFlow has ID == null', function () {
        let newState;
        beforeEach(function () {
            state.currentRegexpFlow.id = null;
            newState = regexpFlowSaver(state, saveRegexpFlow(state.currentRegexpFlow.id));
        });

        it('old state should have currentRegexpFlow.id set to null', () => {
            expect(state.currentRegexpFlow.id).toBe(null);
        });

        it('old state should have only three regexpFlows', () => {
            expect(state.regexpFlows.length).toBe(3);
        });

        it('saving should save it under new ID == ' + nextRegexpFlowId, () => {
            expect(newState.currentRegexpFlow.id).toBe(nextRegexpFlowId);
        });

        it('saving should add RegexpFlow to regexpFlows', () => {
            expect(newState.regexpFlows.length).toBe(4);
        });

        it('saved object should be equal to current object', () => {
            const newIndex = newState.regexpFlows.length - 1;
            expect(newState.regexpFlows[newIndex].id).toEqual(newState.currentRegexpFlow.id);
            expect(newState.regexpFlows[newIndex].description).toEqual(newState.currentRegexpFlow.description);
            expect(newState.regexpFlows[newIndex].filterConfigs).toEqual(newState.currentRegexpFlow.filterConfigs);
        });

        it('saving should increment nextRegexpFlowIndex', () => {
            expect(newState.nextRegexpFlowIndex).toBe(nextRegexpFlowId + 1);
        });
    });

    describe('currentRegexpFlow has ID set', function () {

        const existingRegexpFlowId = 2;

        describe('regexpFlows contain regexpFlow for that ID', function () {

            let newState;

            beforeEach(function () {
                state.currentRegexpFlow.id = existingRegexpFlowId;
                newState = regexpFlowSaver(state, saveRegexpFlow(state.currentRegexpFlow.id));
            });

            it('old state should have currentRegexpFlow.id set to existing value', () => {
                expect(state.currentRegexpFlow.id).toBe(existingRegexpFlowId);
            });

            it('old state should have only three regexpFlows', () => {
                expect(state.regexpFlows.length).toBe(3);
            });

            //

            it('saving should save it under the same ID == ' + existingRegexpFlowId, () => {
                expect(newState.currentRegexpFlow.id).toBe(existingRegexpFlowId);
            });

            it('saving should update existing RegexpFlow', () => {
                expect(newState.regexpFlows.length).toBe(3);
            });

            it('saved object should be equal to current object', () => {
                const rfIndex = 1;
                expect(newState.regexpFlows[rfIndex].id).toEqual(newState.currentRegexpFlow.id);
                expect(newState.regexpFlows[rfIndex].description).toEqual(newState.currentRegexpFlow.description);
                expect(newState.regexpFlows[rfIndex].filterConfigs).toEqual(newState.currentRegexpFlow.filterConfigs);
                expect(Object.keys(newState.regexpFlows[rfIndex].filterConfigs).length).toBe(3);
            });

            it('saving should NOT increment nextRegexpFlowIndex', () => {
                expect(newState.nextRegexpFlowIndex).toBe(nextRegexpFlowId);
            });
        });

        const missingRegexpFlowId = 999;

        describe('regexpFlows do not contain regexpFlow for that ID', function () {

            let newState;
            beforeEach(function () {
                state.currentRegexpFlow.id = missingRegexpFlowId;
                newState = regexpFlowSaver(state, saveRegexpFlow(state.currentRegexpFlow.id));
            });

            it('old state should have currentRegexpFlow.id set to value, but value not present in regexpFlows array', () => {
                expect(state.currentRegexpFlow.id).toBe(missingRegexpFlowId);
            });

            it('old state should have only three regexpFlows', () => {
                expect(state.regexpFlows.length).toBe(3);
            });

            it('saving should save it under new ID == ' + nextRegexpFlowId, () => {
                expect(newState.currentRegexpFlow.id).toBe(nextRegexpFlowId);
            });

            it('saving should add RegexpFlow to regexpFlows', () => {
                expect(newState.regexpFlows.length).toBe(4);
            });

            it('saved object should be equal to current object', () => {
                const newIndex = newState.regexpFlows.length - 1;
                expect(newState.regexpFlows[newIndex].id).toEqual(newState.currentRegexpFlow.id);
                expect(newState.regexpFlows[newIndex].description).toEqual(newState.currentRegexpFlow.description);
                expect(newState.regexpFlows[newIndex].filterConfigs).toEqual(newState.currentRegexpFlow.filterConfigs);
            });

            it('saving should increment nextRegexpFlowIndex', () => {
                expect(newState.nextRegexpFlowIndex).toBe(nextRegexpFlowId + 1);
            });
        });
    });

});
