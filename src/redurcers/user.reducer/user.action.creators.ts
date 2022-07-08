import { createAction } from '@reduxjs/toolkit';
import { iUser } from '../../models/user.model';

import { actionTypes } from './user.action.types';

export const loadUsersAction = createAction<Array<iUser>>(
    actionTypes['user@load']
);

export const addUserAction = createAction<iUser>(actionTypes['user@add']);

export const updateUserAction = createAction<iUser>(actionTypes['user@update']);

export const deleteUserAction = createAction<iUser>(actionTypes['user@delete']);
