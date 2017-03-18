import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';

it('renders without crashing', () => {

    let store = createStore(function (state) {
        return state;
    }, {description: '', filterConfigs: {}, inputText: '', outputText: ''});

    const div = document.createElement('div');
    ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
		, div);
});
