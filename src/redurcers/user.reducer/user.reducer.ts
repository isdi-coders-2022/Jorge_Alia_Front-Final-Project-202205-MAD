import { createReducer } from '@reduxjs/toolkit';
import { iUser } from '../../models/user.model';

import * as action from './user.action.creators';

const initialState: iUser = {
    _id: '',
    name: '',
    email: '',
    passwd: '',
    workouts: [],
    done: [],
    rol: '',
};

export const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(action.loadUsersAction, (state, action) => action.payload)
        .addCase(action.updateUserAction, (state, action) => {
            return {
                ...state,
                user: action.payload,
            };
        })
        .addDefaultCase((state) => state);
});
