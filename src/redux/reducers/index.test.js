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
            filterConfigs: {},
            description: '',
            inputText: '',
            outputText: ''
        };
    });

    it('should handle inputText', function () {
        let expectedState = Object.assign({}, state);
        expectedState.inputText = 'new inputText';

        let newState = mainReducer(state, updateInputText('new inputText'));
        expect(newState.inputText).toEqual('new inputText');
    });

    it('should handle description', function () {
        let expectedState = Object.assign({}, state);
        expectedState.description = 'new description';

        let newState = mainReducer(state, regxpFlowUpdateDescription('new description'));
        expect(newState).toEqual(expectedState);
    });

    it('should handle filterConfigs', function () {
        let expectedState = Object.assign({}, state);
        expectedState.filterConfigs[1] = new FindAllFilterConfig();
        expectedState.filterConfigs[1].id = 1;
        expectedState.filterConfigs[1].searchString = '\\b.+?\\b';

        let newState = mainReducer(state, regexpFlowAddFilter('FindAll'));
        expect(newState).toEqual(expectedState);
    });
});
