import * as action from './action.creators';
import { workoutReducer } from './workout.reducer';
import { AnyAction } from '@reduxjs/toolkit';
import { iWorkout } from '../../models/workout.model';

describe('Given workoutReducer', () => {
    const mockWorkout: iWorkout = {
        _id: '1',
        title: 'BRAZOS con goma',
        image: 'brazosabsbandas.png',
        video: 'https://www.youtube.com/embed/RQ7O-kCR1V0',
        description:
            'Entrenamiento de brazos y abdomen con intensidad baja enfocada en el trabajo de brazos, fuerza abdominal y para terminar sumamos al trabajo de brazos, una pequeña secuencia en cuadrupedia de glúteos.',
        category: 'Brazos y abs',
        complementaryMaterial: 'Goma',
        duration: 12,
        intensity: 'Baja',
        favorite: false,
        comments: [],
    };
    const mockWorkout2: iWorkout = {
        _id: '2',
        title: 'BRAZOS tonificados',
        image: 'brazosabsmancuernas.png',
        video: 'https://www.youtube.com/embed/xSyezRvVyAM',
        description:
            'Entrenamiento de brazos y abdomen con intensidad media enfocada en el trabajo de fuerza de brazos.',
        category: 'Brazos y abs',
        complementaryMaterial: 'Mancuernas',
        duration: 10,
        intensity: 'Media',
        favorite: false,
        comments: [],
    };
    describe('When calling it whit action load with an array of Workout s', () => {
        test('Then it should return a new state witch the Products in the action payload', () => {
            //Arrange
            const initialSate: Array<iWorkout> = [];
            const actionToTest = action.loadWorkoutsAction([mockWorkout]);
            //Act
            const newState = workoutReducer(initialSate, actionToTest);
            //Assert
            expect(newState).toHaveLength(1);
            expect(newState).toStrictEqual([mockWorkout]);
        });
    });
    describe('When calling it whit action add product whit the new product as payload', () => {
        test('Receive a new state with the old state and the new product', () => {
            //Arrange
            const initialState: Array<iWorkout> = [mockWorkout];
            const newWorkout = { ...mockWorkout, _id: '34' };
            const acctionToTest = action.addWorkoutAction(newWorkout);
            //Act
            const newState = workoutReducer(initialState, acctionToTest);
            //Assert
            expect(newState).toHaveLength(2);
            expect(newState).toStrictEqual([mockWorkout, newWorkout]);
        });
    });
    describe('When calling it with action update with the update Product as payload', () => {
        test('Then it should return a new state witch the products update', () => {
            //Arrange
            const initialState: Array<iWorkout> = [mockWorkout, mockWorkout2];
            const updatedWorkout = { ...mockWorkout, name: 'Alfonso' };
            const actionToTest = action.updateWorkoutAction(updatedWorkout);
            //Act
            const newState = workoutReducer(initialState, actionToTest);
            //Assert
            expect(newState).toHaveLength(2);
            expect(newState).toStrictEqual([updatedWorkout, mockWorkout2]);
        });
    });
    describe('When calling it with action delete for one product', () => {
        test('Then it should return a new state without this product', () => {
            //Arrange
            const initialState: Array<iWorkout> = [mockWorkout];
            const actionToTest = action.deleteWorkoutAction(mockWorkout);
            //Act
            const newState = workoutReducer(initialState, actionToTest);
            //Assert
            expect(newState).toHaveLength(0);
        });
    });
    describe('When calling it with none of the above', () => {
        test('The', () => {
            const initialState: Array<iWorkout> = [mockWorkout];
            const newState = workoutReducer(initialState, {} as AnyAction);

            expect(newState).toStrictEqual(initialState);
        });
    });
});
