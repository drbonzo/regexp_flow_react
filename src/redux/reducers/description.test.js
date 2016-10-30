import description from './description'
import {REGEXP_FLOW_UPDATE_DESCRIPTION} from '../actions'

describe("description reducer", function () {

	it('should return empty string when current state is undefined and action is other', function () {
		let state = undefined;
		let newState = description(state, {type: 'OTHER', description: 'aaaa'});
		expect(newState).toBe('');
	});

	it('should not change state when action is other', function () {
		let state = 'foobar';
		let newState = description(state, {type: 'OTHER', description: 'not foobar'});
		expect(newState).toBe('foobar');
	});

	it('should return description from action if action is REGEXP_FLOW_UPDATE_DESCRIPTION', function () {
		let state = 'foobar';
		let newState = description(state, {type: REGEXP_FLOW_UPDATE_DESCRIPTION, description: 'not foobar'});
		expect(newState).toBe('not foobar');
	});
});
