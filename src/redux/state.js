export const initialState = {
	description: '',
	inputText: '',
	textProcessors: {
		1: {
			id: 1,
			type: 'FindAll',
			searchString: 'foobar 1',
			caseInsensitive: false,
			description: 'some description 1',
			enabled: true
		},
		2: {
			id: 2,
			type: 'FindAll',
			searchString: 'foobar 2',
			caseInsensitive: true,
			description: 'some description 2',
			enabled: true
		},
		3: {
			id: 3,
			type: 'FindAll',
			searchString: 'foobar 3',
			caseInsensitive: false,
			description: 'some description 3',
			enabled: true
		},
		4: {
			id: 4,
			type: 'FindAll',
			searchString: 'foobar 4',
			caseInsensitive: false,
			description: 'some description 4',
			enabled: true
		}
	}
};
