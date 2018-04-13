import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import AppContainer from './AppContainer';
import './index.css';

import reduxStoreConfigBuilder from './config/redux-store';
import mainReducer from './Store/mainReducer';

// redux-persist needs reducers to be combined
// so we put our state under `app` key
const combinedReducer = {
    app: mainReducer
};

const {persistor, store} = reduxStoreConfigBuilder(combinedReducer);

const Loading = () => {
    return (
        <div>
            <h1>LOADING...</h1>
        </div>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loading/>}>
            <AppContainer/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
