// @flow

import history from "../../config/history";

// ACTION TYPES
export const REDIRECT = 'app/boilerplate/redirect';

// FLOW TYPES FOR ACTIONS
export type RedirectAction = {
    type: 'app/boilerplate/redirect',
    url: string
}

export type AllBoilerplateActions = RedirectAction;

// ACTION CREATORS
export const redirectTo = (url: string): RedirectAction => {
    return {
        type: REDIRECT,
        url: url
    }
};

// REDUCERS
const boilerplateReducer = (state: any, action: AllBoilerplateActions): any => {

    if (action.type === REDIRECT) {
        history.push(action.url);
        return state;
    } else {
        return state;
    }
};


export default boilerplateReducer;
