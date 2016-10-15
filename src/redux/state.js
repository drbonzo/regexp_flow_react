export const initialState = {
	description: '',
	textProcessors: {
		1: {
			type: 'FindAll',
			searchString: 'foobar 1',
			caseInsensitive: false,
			description: 'some description 1',
			enabled: true
		},
		2: {
			type: 'FindAll',
			searchString: 'foobar 2',
			caseInsensitive: true,
			description: 'some description 2',
			enabled: true
		},
		3: {
			type: 'FindAll',
			searchString: 'foobar 3',
			caseInsensitive: false,
			description: 'some description 3',
			enabled: true
		}
	}
};
