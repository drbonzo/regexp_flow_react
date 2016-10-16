import description from './description'
import textProcessors from './textProcessors'
import inputText from './inputText'
import outputText from './outputText'
import {combineReducers} from 'redux'

const mainReducer = combineReducers({
	textProcessors: textProcessors,
	description: description,
	inputText: inputText,
	outputText: outputText
});

export default mainReducer;
