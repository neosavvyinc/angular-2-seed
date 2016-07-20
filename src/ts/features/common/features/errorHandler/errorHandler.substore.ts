import { ActionReducer, Action } from '@ngrx/store';

export const RESET_ERRORS = 'RESET_ERRORS';
export const CREATE_ERROR = 'CREATE_ERROR';

export const errorStackReducer: ActionReducer<Object[]> = (state: Error[] = [], action: Action) => {
    switch (action.type) {
        case RESET_ERRORS:
            console.log("Resetting the error stack.");
            return [];
        case CREATE_ERROR:
            console.log("Creating an error", action.payload);
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};