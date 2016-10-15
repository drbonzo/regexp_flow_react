export const initialState = {
	description: '',
	textProcessors: {
		1: {
			type: 'FindAll',
			searchString: 'foobar 1',
			caseInsensitive: false,
			description: 'some description 1'
		},
		2: {
			type: 'FindAll',
			searchString: 'foobar 2',
			caseInsensitive: true,
			description: 'some description 2'
		},
		3: {
			type: 'FindAll',
			searchString: 'foobar 3',
			caseInsensitive: false,
			description: 'some description 3'
		}
	}
};
