import description from './description'
import filterConfigs from './filterConfigs'
import inputText from './inputText'
import {combineReducers} from 'redux'

const mainReducer = combineReducers({
	filterConfigs: filterConfigs,
	description: description,
	inputText: inputText,
});

export default mainReducer;
