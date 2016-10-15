import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import './index.css';
import mainReducer from './redux/reducers'
import {initialState} from './redux/state'

let store = createStore(mainReducer, initialState);

store.subscribe(function () {
	console.log(store.getState())
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
