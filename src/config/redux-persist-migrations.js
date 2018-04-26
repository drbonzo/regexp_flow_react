// @flow

// https://github.com/rt2zz/redux-persist/blob/master/docs/migrations.md
// Default version: -1
//
// If no data is stored using redux-persist, then NO migrations are run
// Migrations are run only for old data:
// only if you had something persisted before in older version number
//
// To force migration:
// Bump version in `persistConfig.version`
// Add a migration to that version in `migrations` (here)
//
// Migrations that are > persisted version, and <= `persistConfig.version` are being run
// So if you have persisted version: 3, and `persistConfig.version` is 5, then migrations: 4 and 5 will be run

import type {ApplicationState} from '../Store/ApplicationState';

type ReduxPersistMigration = (state: ApplicationState) => ApplicationState;
type ReduxPersistMigrationCollection = { [string]: ReduxPersistMigration };

const migrations: ReduxPersistMigrationCollection = {
    '1': (state: ApplicationState): ApplicationState => {
        return {
            ...state,
        };
    }
};

export default migrations;
