import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import mainReducer from './redux/reducers';
import {initialState} from './redux/state';
import {persistStore, autoRehydrate} from 'redux-persist';

// add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
const store = createStore(
    mainReducer,
    initialState,
    autoRehydrate()
);

// begin periodically persisting the store
persistStore(store, {
    whitelist: [
        'currentRegexpFlow',
        'regexpFlows',
        'nextRegexpFlowIndex'
    ],
    // storage: localStorage, - is default
    debounce: 1000
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
