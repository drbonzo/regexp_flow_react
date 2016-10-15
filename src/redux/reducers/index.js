import description from './description'
import textProcessors from './textProcessors'
import {combineReducers} from 'redux'

const mainReducer = combineReducers({
	textProcessors: textProcessors,
	description: description
});

export default mainReducer;
