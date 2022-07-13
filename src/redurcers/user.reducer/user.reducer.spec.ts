import * as action from './user.action.creators';
import { userReducer } from './user.reducer';
import { AnyAction } from '@reduxjs/toolkit';
import { iUserWithToken } from '../../models/user.model';

describe('Given userReducer', () => {
    const mockUser: iUserWithToken = {
        token: 'jmds8sds8jds8',
        user: {
            _id: '2',
            name: 'Jorge',
            email: 'jorge@gmail.com',
            passwd: '12345',
            workouts: [],
            done: [],
            rol: 'user',
        },
    };
    describe('When calling it whit action load with an array of User s', () => {
        test('Then it should return a new state witch the User in the action payload', () => {
            const initialSate: iUserWithToken = {
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
            };
            const actionToTest = action.loadUsersAction(mockUser);
            const newState = userReducer(initialSate, actionToTest);
            expect(newState).toStrictEqual(mockUser);
        });
    });

    // describe('When calling it with action update with the update User as payload', () => {
    //     test('Then it should return a new state witch the user update', () => {
    //         const initialState: iUserWithToken = mockUser;
    //         const updatedUser = { ...mockUser, name: 'Alfonso' };
    //         const actionToTest = action.updateUserAction(updatedUser);
    //         const newState = userReducer(initialState, actionToTest);
    //         expect(newState).toStrictEqual(updatedUser);
    //     });
    // });

    describe('When calling it with none of the above', () => {
        test('Then it should return the same state', () => {
            const initialState: iUserWithToken = mockUser;
            const newState = userReducer(initialState, {} as AnyAction);
            expect(newState).toStrictEqual(initialState);
        });
    });
});
