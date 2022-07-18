import { createAction } from '@reduxjs/toolkit';
import { iUser, iUserWithToken } from '../../models/user.model';

import { actionTypes } from './user.action.types';

export const loadUsersAction = createAction<iUser>(actionTypes['user@load']);

export const updateUserAction = createAction<iUser>(actionTypes['user@update']);
