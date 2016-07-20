import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';

export const RESET_GITUSER = 'RESET_GITUSER_DATA';
export const SET_GITUSER = 'SET_GITUSER_DATA';

export const gitUserReducer: ActionReducer<Object> = (state: Object = {}, action: Action) => {
    switch (action.type) {
        case RESET_GITUSER:
            console.log("Resetting gitUser to empty object.");
            return {};
        case SET_GITUSER:
            console.log("Setting gitUser", action.payload);
            return _.cloneDeep(action.payload);
        default:
            return state;
    }
};