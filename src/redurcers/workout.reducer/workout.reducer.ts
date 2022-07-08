import { createReducer } from '@reduxjs/toolkit';
import { iWorkout } from '../../models/workout.model';

import * as action from './action.creators';

const initialState: Array<iWorkout> = [];

export const workoutReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(action.loadWorkoutsAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(action.addWorkoutAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(action.updateWorkoutAction, (state, action) =>
            state.map((item) =>
                item._id === action.payload._id ? action.payload : item
            )
        )
        .addCase(action.deleteWorkoutAction, (state, action) =>
            state.filter((item) => item._id !== action.payload._id)
        )
        .addDefaultCase((state) => state);
});
