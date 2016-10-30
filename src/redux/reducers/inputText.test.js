import inputText from './inputText'
import {UPDATE_INPUT_TEXT} from '../actions'

describe("inputText reducer", function () {

	it('should return empty string when current state is undefined and action is other', function () {
		let state = undefined;
		let newState = inputText(state, {type: 'OTHER', text: 'aaaa'});
		expect(newState).toBe('');
	});

	it('should not change state when action is other', function () {
		let state = 'foobar';
		let newState = inputText(state, {type: 'OTHER', text: 'not foobar'});
		expect(newState).toBe('foobar');
	});

	it('should return text from action if action is UPDATE_INPUT_TEXT', function () {
		let state = 'foobar';
		let newState = inputText(state, {type: UPDATE_INPUT_TEXT, text: 'not foobar'});
		expect(newState).toBe('not foobar');
	});
});
