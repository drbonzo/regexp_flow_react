// @flow

// Redux
import {
    applyMiddleware,
    createStore,
    compose
} from 'redux';
import logger from 'redux-logger';

// Redux-Persist
//
// Performs auto rehydrate with action: 'persist/REHYDRATE'
// No need to configure this
import {
    persistStore,
    persistCombineReducers,
    createMigrate
} from 'redux-persist';

import storage from 'redux-persist/es/storage/index'; // default: localStorage if web, AsyncStorage if react-native

// State
import {initialState} from '../Store/initialState';
import migrations from './redux-persist-migrations';


// =============
type CombinedReducersType = {
	[string]: (any, any) => any
}

type ReduxStoreConfig = {
	persistor: any,
	store: any
}

const reduxStoreConfigBuilder = (combinedReducer: CombinedReducersType): ReduxStoreConfig => {

    const persistConfig = {
        key: 'root', // key name in a storage
        storage,
        blacklist: [], // which keys of `app` state do not persist,
        whitelist: [
            'currentRegexpFlow',
            'regexpFlows',
            'nextRegexpFlowIndex'
        ], // which kes of `app` state to DO persist
        version: 1,
        migrate: createMigrate(migrations, {debug: true}),
    };

    // This requires reducers to be combined...
    // This modifies initialState and ApplicationState structure
    const reducer = persistCombineReducers(persistConfig, combinedReducer);

    // Store
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(logger),
        )
    );

    // Persistor
    const persistor = persistStore(store);
    return {persistor, store};
};

export default reduxStoreConfigBuilder;
