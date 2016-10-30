import description from './description'
import filterConfigs from './filterConfigs'
import inputText from './inputText'

const mainReducer = function (state, action) {
	let filterConfigsNew = filterConfigs(state.filterConfigs, action);
	let descriptionNew = description(state.description, action);
	let inputTextNew = inputText(state.inputText, action);

	return Object.assign({}, state, {
		filterConfigs: filterConfigsNew,
		description: descriptionNew,
		inputText: inputTextNew
	});
};

export default mainReducer;
