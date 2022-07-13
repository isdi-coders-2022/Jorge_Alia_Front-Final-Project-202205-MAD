import { configureStore } from '@reduxjs/toolkit';
import { iUserWithToken } from '../models/user.model';
import { iWorkout } from '../models/workout.model';
import { userReducer } from '../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../redurcers/workout.reducer/workout.reducer';

export interface iState {
    workouts: Array<iWorkout>;
    users: iUserWithToken;
}

const preloadedState = {
    workouts: [],
    users: {
        token: '',
        user: {
            _id: '',
            name: '',
            email: '',
            passwd: '',
            workouts: [],
            done: [],
            rol: '',
        },
    },
};

export const store = configureStore({
    reducer: {
        workouts: workoutReducer,
        users: userReducer,
    },
    preloadedState,
});
