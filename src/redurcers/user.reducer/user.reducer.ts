import { createReducer } from '@reduxjs/toolkit';
import { iUser } from '../../models/user.model';

import * as action from './user.action.creators';

const initialState: Array<iUser> = [];

export const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(action.loadUsersAction, (state, action) => [...action.payload])
        .addCase(action.addUserAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(action.updateUserAction, (state, action) =>
            state.map((item) =>
                item._id === action.payload._id ? action.payload : item
            )
        )
        .addCase(action.deleteUserAction, (state, action) =>
            state.filter((item) => item._id !== action.payload._id)
        )
        .addDefaultCase((state) => state);
});
