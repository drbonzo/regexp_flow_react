import filterConfigs from './filterConfigs'

import FindAllFilterConfig from '../../RegexpFlow/FilterConfig/FindAllFilterConfig'
import ReplaceFilterConfig from '../../RegexpFlow/FilterConfig/ReplaceFilterConfig'
import MatchLinesFilterConfig from '../../RegexpFlow/FilterConfig/MatchLinesFilterConfig'

describe("filterConfigs reducer", function () {

	describe('collection modification', function () {
		it('should add filter config', function () {
			let state_0 = {};
			let newState = filterConfigs(state_0, {type: 'REGEXP_FLOW_ADD_FILTER', filterType: 'FindAll'});
			expect('1' in newState).toBe(true);
			expect(newState[1].constructor.name).toBe('FindAllFilterConfig');
		});

		it('should delete existing filter', function () {
			let state_0 = {};
			state_0[1] = new FindAllFilterConfig(); // FIXME DRY
			let newState = filterConfigs(state_0, {type: 'REGEXP_FLOW_DELETE_FILTER', id: 1});
			expect('1' in newState).toBe(false);
		});
		//
		// it('should not delete not existing filter', function () {
		// 	let state = {};
		// 	state[1] = new FindAllFilterConfig(); // FIXME DRY
		// 	let newState = filterConfigs(state, {type: 'REGEXP_FLOW_DELETE_FILTER', id: 5});
		// 	expect(5 in newState).toBe(false);
		// });
	});

	describe('manipulation on single FilterConfig', function () {
		describe('toggling settings', function () {

			it('should toggle enabled flag', function () {
				let state_0 = {};
				state_0[1] = new FindAllFilterConfig(); // FIXME DRY
				state_0[1].enabled = true;

				expect(state_0[1].enabled).toBe(true);

				let state_1 = filterConfigs(state_0, {type: 'FILTER_TOGGLE_ENABLED', id: 1});
				expect(state_1[1].enabled).toBe(false);

				let state_2 = filterConfigs(state_1, {type: 'FILTER_TOGGLE_ENABLED', id: 1});
				expect(state_2[1].enabled).toBe(true);
			});

			it('should toggle global flag', function () {
				let state_0 = {};
				state_0[1] = new ReplaceFilterConfig(); // FIXME DRY
				state_0[1].global = true;

				expect(state_0[1].global).toBe(true);

				let state_1 = filterConfigs(state_0, {type: 'FILTER_TOGGLE_GLOBAL', id: 1});
				expect(state_1[1].global).toBe(false);

				let state_2 = filterConfigs(state_1, {type: 'FILTER_TOGGLE_GLOBAL', id: 1});
				expect(state_2[1].global).toBe(true);
			});

			it('should toggle multiline flag', function () {
				let state_0 = {};
				state_0[1] = new ReplaceFilterConfig(); // FIXME DRY
				state_0[1].multiline = true;

				expect(state_0[1].multiline).toBe(true);

				let state_1 = filterConfigs(state_0, {type: 'FILTER_TOGGLE_MULTILINE', id: 1});
				expect(state_1[1].multiline).toBe(false);

				let state_2 = filterConfigs(state_1, {type: 'FILTER_TOGGLE_MULTILINE', id: 1});
				expect(state_2[1].multiline).toBe(true);
			});

			it('should toggle multiline flag', function () {
				let state_0 = {};
				state_0[1] = new ReplaceFilterConfig(); // FIXME DRY
				state_0[1].multiline = true;

				expect(state_0[1].multiline).toBe(true);

				let state_1 = filterConfigs(state_0, {type: 'FILTER_TOGGLE_MULTILINE', id: 1});
				expect(state_1[1].multiline).toBe(false);

				let state_2 = filterConfigs(state_1, {type: 'FILTER_TOGGLE_MULTILINE', id: 1});
				expect(state_2[1].multiline).toBe(true);
			});

			it('should toggle FILTER_TOGGLE_CASE_INSENSITIVE flag', function () {
				let state_0 = {};
				state_0[1] = new MatchLinesFilterConfig(); // FIXME DRY
				state_0[1].caseInsensitive = true;

				expect(state_0[1].caseInsensitive).toBe(true);

				let state_1 = filterConfigs(state_0, {type: 'FILTER_TOGGLE_CASE_INSENSITIVE', id: 1});
				expect(state_1[1].caseInsensitive).toBe(false);

				let state_2 = filterConfigs(state_1, {type: 'FILTER_TOGGLE_CASE_INSENSITIVE', id: 1});
				expect(state_2[1].caseInsensitive).toBe(true);
			});
		});

		describe('updating settings', function () {
			it('should update searchString', function () {
				let state_0 = {};
				state_0[1] = new ReplaceFilterConfig(); // FIXME DRY
				state_0[1].searchString = 'abc';

				expect(state_0[1].searchString).toBe('abc');

				let state_1 = filterConfigs(state_0, {type: 'FILTER_UPDATE_SEARCH_STRING', id: 1, searchString: 'xyz'});
				expect(state_1[1].searchString).toBe('xyz');
			});

			it('should update searchString', function () {
				let state_0 = {};
				state_0[1] = new ReplaceFilterConfig(); // FIXME DRY
				state_0[1].description = 'foo';

				expect(state_0[1].description).toBe('foo');

				let state_1 = filterConfigs(state_0, {type: 'FILTER_UPDATE_DESCRIPTION', id: 1, description: 'bar'});
				expect(state_1[1].description).toBe('bar');
			});

			it('should update replaceString', function () {
				let state_0 = {};
				state_0[1] = new ReplaceFilterConfig(); // FIXME DRY
				state_0[1].replaceString = 'abc';

				expect(state_0[1].replaceString).toBe('abc');

				let state_1 = filterConfigs(state_0, {type: 'FILTER_UPDATE_REPLACE_STRING', id: 1, replaceString: 'xyz'});
				expect(state_1[1].replaceString).toBe('xyz');
			});

		});

	});
});
