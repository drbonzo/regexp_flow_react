import { clearRegexpFlow, deleteRegexpFlow, descriptionReducer, filterConfigsReducer, inputText, loadRegexpFlow, REGEXP_FLOW_UPDATE_DESCRIPTION, regexpFlowClearer, regexpFlowDeleter, regexpFlowLoader, regexpFlowSaver, saveRegexpFlow, UPDATE_INPUT_TEXT } from './RegexpFlowActions';
import MatchLinesFilterConfig from '../../RegexpFlow/FilterConfig/MatchLinesFilterConfig';
import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig';
import ReplaceFilterConfig from '../../RegexpFlow/FilterConfig/ReplaceFilterConfig';
import RegexpFlow from '../../RegexpFlow/RegexpFlow';
import UniqueFilterConfig from '../../RegexpFlow/FilterConfig/UniqueFilterConfig';

/**
 * @param {Number} id
 * @returns {RegexpFlow}
 */
function buildRegexpFlow(id) {
    const rf = new RegexpFlow();
    rf.id = String(id);
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

describe('description reducer', function() {
    it('should return empty string when current state is undefined and action is other', function() {
        let state = undefined;
        let newState = descriptionReducer(state, { type: 'OTHER', description: 'aaaa' });
        expect(newState).toBe('');
    });

    it('should not change state when action is other', function() {
        let state = 'foobar';
        let newState = descriptionReducer(state, { type: 'OTHER', description: 'not foobar' });
        expect(newState).toBe('foobar');
    });

    it('should return description from action if action is REGEXP_FLOW_UPDATE_DESCRIPTION', function() {
        let state = 'foobar';
        let newState = descriptionReducer(state, { type: REGEXP_FLOW_UPDATE_DESCRIPTION, description: 'not foobar' });
        expect(newState).toBe('not foobar');
    });
});

describe('filterConfigs reducer', function() {
    describe('collection modification', function() {
        it('should add filter config', function() {
            let state_0 = {};
            let newState = filterConfigsReducer(state_0, { type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'FindAll', nextId: 1 });
            expect('1' in newState).toBe(true);
            expect(newState[1].constructor.name).toBe('FindAllFilterConfig');
        });

        it('should delete existing filter', function() {
            let state_0 = {};
            state_0[1] = new FindAllFilterConfig();
            let newState = filterConfigsReducer(state_0, { type: 'REGEXP_FLOW_DELETE_FILTER', id: 1 });
            expect('1' in newState).toBe(false);
        });
        //
        // it('should not delete not existing filter', function () {
        // 	let state = {};
        // 	state[1] = new FindAllFilterConfig();
        // 	let newState = filterConfigsReducer(state, {type: 'REGEXP_FLOW_DELETE_FILTER', id: 5});
        // 	expect(5 in newState).toBe(false);
        // });
    });

    describe('manipulation on single FilterConfig', function() {
        describe('toggling settings', function() {
            it('should toggle enabled flag', function() {
                let state_0 = {};
                state_0[1] = new FindAllFilterConfig();
                state_0[1].enabled = true;

                expect(state_0[1].enabled).toBe(true);

                let state_1 = filterConfigsReducer(state_0, { type: 'FILTER_TOGGLE_ENABLED', id: 1 });
                expect(state_1[1].enabled).toBe(false);

                let state_2 = filterConfigsReducer(state_1, { type: 'FILTER_TOGGLE_ENABLED', id: 1 });
                expect(state_2[1].enabled).toBe(true);
            });

            it('should toggle global flag', function() {
                let state_0 = {};
                state_0[1] = new ReplaceFilterConfig();
                state_0[1].global = true;

                expect(state_0[1].global).toBe(true);

                let state_1 = filterConfigsReducer(state_0, { type: 'FILTER_TOGGLE_GLOBAL', id: 1 });
                expect(state_1[1].global).toBe(false);

                let state_2 = filterConfigsReducer(state_1, { type: 'FILTER_TOGGLE_GLOBAL', id: 1 });
                expect(state_2[1].global).toBe(true);
            });

            it('should toggle multiline flag', function() {
                let state_0 = {};
                state_0[1] = new ReplaceFilterConfig();
                state_0[1].multiline = true;

                expect(state_0[1].multiline).toBe(true);

                let state_1 = filterConfigsReducer(state_0, { type: 'FILTER_TOGGLE_MULTILINE', id: 1 });
                expect(state_1[1].multiline).toBe(false);

                let state_2 = filterConfigsReducer(state_1, { type: 'FILTER_TOGGLE_MULTILINE', id: 1 });
                expect(state_2[1].multiline).toBe(true);
            });

            it('should toggle FILTER_TOGGLE_CASE_INSENSITIVE flag', function() {
                let state_0 = {};
                state_0[1] = new MatchLinesFilterConfig();
                state_0[1].caseInsensitive = true;

                expect(state_0[1].caseInsensitive).toBe(true);

                let state_1 = filterConfigsReducer(state_0, { type: 'FILTER_TOGGLE_CASE_INSENSITIVE', id: 1 });
                expect(state_1[1].caseInsensitive).toBe(false);

                let state_2 = filterConfigsReducer(state_1, { type: 'FILTER_TOGGLE_CASE_INSENSITIVE', id: 1 });
                expect(state_2[1].caseInsensitive).toBe(true);
            });
        });

        describe('updating settings', function() {
            it('should update searchString', function() {
                let state_0 = {};
                state_0[1] = new ReplaceFilterConfig();
                state_0[1].searchString = 'abc';

                expect(state_0[1].searchString).toBe('abc');

                let state_1 = filterConfigsReducer(state_0, { type: 'FILTER_UPDATE_SEARCH_STRING', id: 1, searchString: 'xyz' });
                expect(state_1[1].searchString).toBe('xyz');
            });

            it('should update description', function() {
                let state_0 = {};
                state_0[1] = new ReplaceFilterConfig();
                state_0[1].description = 'foo';

                expect(state_0[1].description).toBe('foo');

                let state_1 = filterConfigsReducer(state_0, { type: 'FILTER_UPDATE_DESCRIPTION', id: 1, description: 'bar' });
                expect(state_1[1].description).toBe('bar');
            });

            it('should update replaceString', function() {
                let state_0 = {};
                state_0[1] = new ReplaceFilterConfig();
                state_0[1].replaceString = 'abc';

                expect(state_0[1].replaceString).toBe('abc');

                let state_1 = filterConfigsReducer(state_0, { type: 'FILTER_UPDATE_REPLACE_STRING', id: 1, replaceString: 'xyz' });
                expect(state_1[1].replaceString).toBe('xyz');
            });
        });
    });
});
describe('inputText reducer', function() {
    it('should return empty string when current state is undefined and action is other', function() {
        let state = undefined;
        let newState = inputText(state, { type: 'OTHER', text: 'aaaa' });
        expect(newState).toBe('');
    });

    it('should not change state when action is other', function() {
        let state = 'foobar';
        let newState = inputText(state, { type: 'OTHER', text: 'not foobar' });
        expect(newState).toBe('foobar');
    });

    it('should return text from action if action is UPDATE_INPUT_TEXT', function() {
        let state = 'foobar';
        let newState = inputText(state, { type: UPDATE_INPUT_TEXT, text: 'not foobar' });
        expect(newState).toBe('not foobar');
    });
});

describe('regexpFlowClearer reducer', function() {
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

    describe('currentRegexpFlow is empty', function() {
        let rf1;
        let rf2;
        let rf3;
        let state;

        beforeEach(function() {
            rf1 = buildRegexpFlow(1);
            rf2 = buildRegexpFlow(2);
            rf3 = buildRegexpFlow(3);
            state = {
                inputText: '',
                outputText: '',
                currentRegexpFlow: {
                    id: null,
                    description: '',
                    filterConfigs: {},
                },
                regexpFlows: [rf1, rf2, rf3],
                nextRegexpFlowIndex: 4,
            };
        });

        it('should keep currentRegexpFlow empty', function() {
            const newState = regexpFlowClearer(state, clearRegexpFlow());
            const expectedState = {
                inputText: '',
                outputText: '',
                currentRegexpFlow: {
                    id: null,
                    description: '',
                    filterConfigs: {},
                },
                regexpFlows: [rf1, rf2, rf3],
                nextRegexpFlowIndex: 4,
            };
            expect(newState).toEqual(expectedState);
        });
    });

    describe('currentRegexpFlow is NOT empty', function() {
        let rf1;
        let rf2;
        let rf3;
        let state;

        beforeEach(function() {
            rf1 = buildRegexpFlow(1);
            rf2 = buildRegexpFlow(2);
            rf3 = buildRegexpFlow(3);
            state = {
                inputText: 'Aaaaaaaa',
                outputText: 'Bbbbbbbbb',
                currentRegexpFlow: {
                    id: 3,
                    description: 'Some description',
                    filterConfigs: buildThreeFilterConfigs(),
                },
                regexpFlows: [rf1, rf2, rf3],
                nextRegexpFlowIndex: 4,
            };
        });

        it('should clear currentRegexpFlow', function() {
            const newState = regexpFlowClearer(state, clearRegexpFlow());
            const expectedState = {
                inputText: '',
                outputText: '',
                currentRegexpFlow: {
                    id: null,
                    description: '',
                    filterConfigs: {},
                },
                regexpFlows: [rf1, rf2, rf3],
                nextRegexpFlowIndex: 4,
            };
            expect(newState).toEqual(expectedState);
        });
    });
});

describe('regexpFlowDeleter reducer', function() {
    const existingRegexpFlowId_2 = '2';
    const existingRegexpFlowId_3 = '3';
    const missingRegexpFlowId = '999';

    let rf1;
    let rf2;
    let rf3;
    let state;

    beforeEach(function() {
        rf1 = buildRegexpFlow(1);
        rf2 = buildRegexpFlow(2);
        rf3 = buildRegexpFlow(3);
        state = {
            inputText: 'Lorem ipsum some text',
            outputText: 'Lorem ipsum some text',
            currentRegexpFlow: {
                id: null,
                description: '',
                filterConfigs: {},
            },
            regexpFlows: [rf1, rf2, rf3],
            nextRegexpFlowIndex: 4,
        };
    });

    describe('when state has RegexpFlow', function() {
        describe('and currentRegexpFlow has the same RegexpFlow loaded', function() {
            beforeEach(function() {
                state.currentRegexpFlow.id = existingRegexpFlowId_2;
                state.currentRegexpFlow.description = rf2.description;
                state.currentRegexpFlow.filterConfigs = rf2.filterConfigs;
            });

            //

            it('should delete existing RegexpFlow', function() {
                const newState = regexpFlowDeleter(state, deleteRegexpFlow(existingRegexpFlowId_2));
                const expectedState = {
                    inputText: 'Lorem ipsum some text',
                    outputText: 'Lorem ipsum some text',
                    currentRegexpFlow: {
                        id: existingRegexpFlowId_2,
                        description: rf2.description,
                        filterConfigs: rf2.filterConfigs,
                    },
                    regexpFlows: [rf1, rf3],
                    nextRegexpFlowIndex: 4,
                };
                expect(newState).toEqual(expectedState);
            });
        });

        describe('and currentRegexpFlow does NOT have the same RegexpFlow loaded', function() {
            it('should delete existing RegexpFlow', function() {
                const newState = regexpFlowDeleter(state, deleteRegexpFlow(existingRegexpFlowId_3));
                const expectedState = {
                    inputText: 'Lorem ipsum some text',
                    outputText: 'Lorem ipsum some text',
                    currentRegexpFlow: {
                        id: null,
                        description: '',
                        filterConfigs: {},
                    },
                    regexpFlows: [rf1, rf2],
                    nextRegexpFlowIndex: 4,
                };
                expect(newState).toEqual(expectedState);
            });
        });
    });

    describe('when state does not have RegexpFlow', function() {
        it('it should do nothing', function() {
            const newState = regexpFlowDeleter(state, deleteRegexpFlow(missingRegexpFlowId));
            expect(newState).toEqual(state);
        });
    });
});

describe('regexpFlowLoader reducer', function() {
    const existingRegexpFlowId = 2;
    const missingRegexpFlowId = 999;

    describe('currentRegexpFlow is empty', function() {
        let rf1;
        let rf2;
        let rf3;
        let state;

        beforeEach(function() {
            rf1 = buildRegexpFlow(1);
            rf2 = buildRegexpFlow(2);
            rf3 = buildRegexpFlow(3);
            state = {
                inputText: '',
                outputText: '',
                currentRegexpFlow: {
                    id: null,
                    description: '',
                    filterConfigs: {},
                },
                regexpFlows: [rf1, rf2, rf3],
                nextRegexpFlowIndex: 4,
            };
        });

        describe('when state has RegexpFlow', function() {
            it('should load existing RegexpFlow into currentRegexpFlow', function() {
                const newState = regexpFlowLoader(state, loadRegexpFlow(existingRegexpFlowId));
                const expectedState = {
                    inputText: '',
                    outputText: '',
                    currentRegexpFlow: {
                        id: '2',
                        description: 'Lorem ipsum 2',
                        filterConfigs: rf2.filterConfigs,
                    },
                    regexpFlows: [rf1, rf2, rf3],
                    nextRegexpFlowIndex: 4,
                };
                expect(newState).toEqual(expectedState);
            });

            it('should leave input and output text empty', function() {
                const newState = regexpFlowLoader(state, loadRegexpFlow(existingRegexpFlowId));
                expect(newState.inputText).toBe('');
                expect(newState.outputText).toBe('');
            });
        });

        describe('when state does not have RegexpFlow', function() {
            it('it should do nothing', function() {
                const newState = regexpFlowLoader(state, loadRegexpFlow(missingRegexpFlowId));
                expect(newState).toEqual(state);
            });
        });
    });

    describe('currentRegexpFlow is NOT empty', function() {
        let rf1;
        let rf2;
        let rf3;
        let state;
        const existingRegexpFlowId = 2;

        beforeEach(function() {
            rf1 = buildRegexpFlow(1);
            rf2 = buildRegexpFlow(2);
            rf3 = buildRegexpFlow(3);
            state = {
                inputText: 'Aaaa',
                outputText: 'AaaaZZZ',
                currentRegexpFlow: {
                    id: '1',
                    description: 'Lorem ipsum 1',
                    filterConfigs: rf1.filterConfigs,
                },
                regexpFlows: [rf1, rf2, rf3],
                nextRegexpFlowIndex: 4,
            };
        });

        describe('when state has RegexpFlow', function() {
            it('should load existing RegexpFlow into currentRegexpFlow, overwriting existing data', function() {
                const newState = regexpFlowLoader(state, loadRegexpFlow(existingRegexpFlowId));
                const expectedState = {
                    inputText: '',
                    outputText: '',
                    currentRegexpFlow: {
                        id: '2',
                        description: 'Lorem ipsum 2',
                        filterConfigs: rf2.filterConfigs,
                    },
                    regexpFlows: [rf1, rf2, rf3],
                    nextRegexpFlowIndex: 4,
                };
                expect(newState).toEqual(expectedState);
            });

            it('should empty input and output text', function() {
                const newState = regexpFlowLoader(state, loadRegexpFlow(existingRegexpFlowId));
                expect(newState.inputText).toBe('');
                expect(newState.outputText).toBe('');
            });
        });

        describe('when requested ID is a string', function() {
            it('should load existing RegexpFlow normally', function() {
                const newState = regexpFlowLoader(state, loadRegexpFlow(String(existingRegexpFlowId)));
                expect(newState.currentRegexpFlow.id).toBe('2');
            });
        });

        describe('when state does not have RegexpFlow', function() {
            it('should do nothing', function() {
                const newState = regexpFlowLoader(state, loadRegexpFlow(missingRegexpFlowId));
                expect(newState).toEqual(state);
            });

            it('should not change input nor output text', function() {
                const newState = regexpFlowLoader(state, loadRegexpFlow(missingRegexpFlowId));
                expect(newState.inputText).toBe('Aaaa');
                expect(newState.outputText).toBe('AaaaZZZ');
            });
        });
    });
});

describe('regexpFlowSaver reducer', function() {
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

    beforeEach(function() {
        rf1 = buildRegexpFlow(1);
        rf2 = buildRegexpFlow(2);
        rf3 = buildRegexpFlow(3);
        state = {
            inputText: '',
            outputText: '',
            currentRegexpFlow: {
                id: null,
                description: 'Some random description',
                filterConfigs: buildThreeFilterConfigs(),
            },
            regexpFlows: [rf1, rf2, rf3],
            nextRegexpFlowIndex: nextRegexpFlowId,
        };
    });

    describe('currentRegexpFlow has ID == null', function() {
        let newState;
        beforeEach(function() {
            state.currentRegexpFlow.id = null;
            newState = regexpFlowSaver(state, saveRegexpFlow());
        });

        it('old state should have currentRegexpFlow.id set to null', () => {
            expect(state.currentRegexpFlow.id).toBe(null);
        });

        it('old state should have only three regexpFlows', () => {
            expect(state.regexpFlows).toHaveLength(3);
        });

        it('saving should save it under new ID == ' + nextRegexpFlowId, () => {
            expect(newState.currentRegexpFlow.id).toBe(String(nextRegexpFlowId));
        });

        it('saving should add RegexpFlow to regexpFlows', () => {
            expect(newState.regexpFlows).toHaveLength(4);
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

    describe('currentRegexpFlow has ID set', function() {
        const existingRegexpFlowId = '2';

        describe('regexpFlows contain regexpFlow for that ID', function() {
            let newState;

            beforeEach(function() {
                state.currentRegexpFlow.id = existingRegexpFlowId;
                newState = regexpFlowSaver(state, saveRegexpFlow());
            });

            it('old state should have currentRegexpFlow.id set to existing value', () => {
                expect(state.currentRegexpFlow.id).toBe(existingRegexpFlowId);
            });

            it('old state should have only three regexpFlows', () => {
                expect(state.regexpFlows).toHaveLength(3);
            });

            //

            it('saving should save it under the same ID == ' + existingRegexpFlowId, () => {
                expect(newState.currentRegexpFlow.id).toBe(existingRegexpFlowId);
            });

            it('saving should update existing RegexpFlow', () => {
                expect(newState.regexpFlows).toHaveLength(3);
            });

            it('saved object should be equal to current object', () => {
                const rfIndex = 1;
                expect(newState.regexpFlows[rfIndex].id).toEqual(newState.currentRegexpFlow.id);
                expect(newState.regexpFlows[rfIndex].description).toEqual(newState.currentRegexpFlow.description);
                expect(newState.regexpFlows[rfIndex].filterConfigs).toEqual(newState.currentRegexpFlow.filterConfigs);
                expect(Object.keys(newState.regexpFlows[rfIndex].filterConfigs)).toHaveLength(3);
            });

            it('saving should NOT increment nextRegexpFlowIndex', () => {
                expect(newState.nextRegexpFlowIndex).toBe(nextRegexpFlowId);
            });
        });

        const missingRegexpFlowId = 999;

        describe('regexpFlows do not contain regexpFlow for that ID', function() {
            let newState;
            beforeEach(function() {
                state.currentRegexpFlow.id = missingRegexpFlowId;
                newState = regexpFlowSaver(state, saveRegexpFlow());
            });

            it('old state should have currentRegexpFlow.id set to value, but value not present in regexpFlows array', () => {
                expect(state.currentRegexpFlow.id).toBe(missingRegexpFlowId);
            });

            it('old state should have only three regexpFlows', () => {
                expect(state.regexpFlows).toHaveLength(3);
            });

            it('saving should save it under new ID == ' + nextRegexpFlowId, () => {
                expect(newState.currentRegexpFlow.id).toBe(String(nextRegexpFlowId));
            });

            it('saving should add RegexpFlow to regexpFlows', () => {
                expect(newState.regexpFlows).toHaveLength(4);
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
