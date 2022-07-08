import { configureStore } from '@reduxjs/toolkit';
import { iUser } from '../models/user.model';
import { iWorkout } from '../models/workout.model';
import { userReducer } from '../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../redurcers/workout.reducer/workout.reducer';

export interface iState {
    workouts: Array<iWorkout>;
    users: Array<iUser>;
}

const preloadedState = {
    workouts: [],
    users: [],
};

export const store = configureStore({
    reducer: {
        workouts: workoutReducer,
        users: userReducer,
    },
    preloadedState,
});
