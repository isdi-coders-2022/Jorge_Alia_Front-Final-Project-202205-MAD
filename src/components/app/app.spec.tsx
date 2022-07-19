import React from 'react';
import { Provider } from 'react-redux';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { store } from '../../store/store';
import { render } from '../../utils/testutils';
import App from './App';

const reducer = {
    workouts: workoutReducer,
    user: userReducer,
};
const preloadedState = {
    workouts: [],
    user: {
        _id: '',
        name: '',
        email: '',
        passwd: '',
        workouts: [
            {
                id: '',
            },
        ],
        done: [],
        rol: '',
    },
};

describe('Given the component app', () => {
    describe('When called it', () => {
        test('it should render', () => {
            render(
                <React.StrictMode>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </React.StrictMode>,

                {
                    preloadedState,
                    reducer,
                }
            );
            expect(true).toBeTruthy();
        });
    });
});
