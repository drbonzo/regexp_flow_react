import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppContainer from './AppContainer';
import {initialState} from './redux/state';

it('renders without crashing', () => {

    let store = createStore(function (state) {
        return state;
    }, initialState);

    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>
        , div);
});
