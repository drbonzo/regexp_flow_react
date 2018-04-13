// @flow

import type {ReduxInitAction} from './ReduxInitAction';
import type {AllRegexpFlowActions} from './RegexpFlowActions';

export type AllActions =
    ReduxInitAction
    | AllRegexpFlowActions;
