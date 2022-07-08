import { createAction } from '@reduxjs/toolkit';
import { iWorkout } from '../../models/workout.model';

import { actionTypes } from './workout.action.types';

export const loadWorkoutsAction = createAction<Array<iWorkout>>(
    actionTypes['workout@load']
);

export const addWorkoutAction = createAction<iWorkout>(
    actionTypes['workout@add']
);

export const updateWorkoutAction = createAction<iWorkout>(
    actionTypes['workout@update']
);

export const deleteWorkoutAction = createAction<iWorkout>(
    actionTypes['workout@delete']
);
