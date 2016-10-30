import filterConfigs from './filterConfigs'
import {REGEXP_FLOW_ADD_FILTER} from '../actions'

describe("filterConfigs reducer", function () {

	it('should add filter config', function () {
		let state = {};
		let newState = filterConfigs(state, {type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'FindAll'});
		expect('1' in newState).toBe(true);
		expect(newState[1].constructor.name).toBe('FindAllFilterConfig');
	});

	// FIXME more tests
});
