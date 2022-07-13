import { createAction } from '@reduxjs/toolkit';
import { iUser, iUserWithToken } from '../../models/user.model';

import { actionTypes } from './user.action.types';

export const loadUsersAction = createAction<iUserWithToken>(
    actionTypes['user@load']
);

export const updateUserAction = createAction<iUserWithToken>(
    actionTypes['user@update']
);
