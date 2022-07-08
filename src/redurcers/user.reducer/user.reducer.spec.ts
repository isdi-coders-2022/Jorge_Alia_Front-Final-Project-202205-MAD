import * as action from './user.action.creators';
import { userReducer } from './user.reducer';
import { AnyAction } from '@reduxjs/toolkit';
import { iUser } from '../../models/user.model';

describe('Given userReducer', () => {
    const mockUser: iUser = {
        _id: '2',
        name: 'Jorge',
        email: 'jorge@gmail.com',
        passwd: '12345',
        workouts: [],
        done: [],
        rol: 'user',
    };
    const mockUser2: iUser = {
        _id: '3',
        name: 'Sergio',
        email: 'sergio@gmail.com',
        passwd: '12345',
        workouts: [],
        done: [],
        rol: 'user',
    };
    describe('When calling it whit action load with an array of User s', () => {
        test('Then it should return a new state witch the User in the action payload', () => {
            const initialSate: Array<iUser> = [];
            const actionToTest = action.loadUsersAction([mockUser]);
            const newState = userReducer(initialSate, actionToTest);
            expect(newState).toHaveLength(1);
            expect(newState).toStrictEqual([mockUser]);
        });
    });
    describe('When calling it whit action add user whit the new user as payload', () => {
        test('Receive a new state with the old state and the new user', () => {
            const initialState: Array<iUser> = [mockUser];
            const newUser = { ...mockUser, _id: '34' };
            const acctionToTest = action.addUserAction(newUser);
            const newState = userReducer(initialState, acctionToTest);
            expect(newState).toHaveLength(2);
            expect(newState).toStrictEqual([mockUser, newUser]);
        });
    });
    describe('When calling it with action update with the update User as payload', () => {
        test('Then it should return a new state witch the user update', () => {
            const initialState: Array<iUser> = [mockUser, mockUser2];
            const updatedUser = { ...mockUser, name: 'Alfonso' };
            const actionToTest = action.updateUserAction(updatedUser);
            const newState = userReducer(initialState, actionToTest);
            expect(newState).toHaveLength(2);
            expect(newState).toStrictEqual([updatedUser, mockUser2]);
        });
    });
    describe('When calling it with action delete for one user', () => {
        test('Then it should return a new state without this user', () => {
            const initialState: Array<iUser> = [mockUser];
            const actionToTest = action.deleteUserAction(mockUser);
            const newState = userReducer(initialState, actionToTest);
            expect(newState).toHaveLength(0);
        });
    });

    describe('When calling it with none of the above', () => {
        test('Then it should return the same state', () => {
            const initialState: Array<iUser> = [mockUser];
            const newState = userReducer(initialState, {} as AnyAction);
            expect(newState).toStrictEqual(initialState);
        });
    });
});
