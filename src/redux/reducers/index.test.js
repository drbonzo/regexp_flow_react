import mainReducer from './index';

import {
    updateInputText,
    regxpFlowUpdateDescription,
    regexpFlowAddFilter
} from '../actions';

import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig';

describe('mainReducer', function () {

    let state;

    beforeEach(function () {
        state = {
            currentRegexpFlow: {
                filterConfigs: {},
                description: '',
                inputText: '',
                outputText: ''
            },
            regexpFlows: []
        };
    });

    it('should handle inputText', function () {
        let expectedState = Object.assign({}, state);
        expectedState.inputText = 'new inputText';

        let newState = mainReducer(state, updateInputText('new inputText'));
        expect(newState.currentRegexpFlow.inputText).toEqual('new inputText');
    });

    it('should handle description', function () {
        let expectedState = Object.assign({}, state);
        expectedState.currentRegexpFlow.description = 'new description';

        let newState = mainReducer(state, regxpFlowUpdateDescription('new description'));
        expect(newState).toEqual(expectedState);
    });

    it('should handle filterConfigs', function () {
        let expectedState = Object.assign({}, state);
        expectedState.currentRegexpFlow.filterConfigs[1] = new FindAllFilterConfig();
        expectedState.currentRegexpFlow.filterConfigs[1].id = 1;
        expectedState.currentRegexpFlow.filterConfigs[1].searchString = '\\b.+?\\b';

        let newState = mainReducer(state, regexpFlowAddFilter('FindAll'));
        expect(newState).toEqual(expectedState);
    });
});
