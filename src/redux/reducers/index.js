import description from './description'
import textProcessors from './textProcessors'
import inputText from './inputText'
import {combineReducers} from 'redux'

const mainReducer = combineReducers({
	textProcessors: textProcessors,
	description: description,
	inputText: inputText,
});

export default mainReducer;
