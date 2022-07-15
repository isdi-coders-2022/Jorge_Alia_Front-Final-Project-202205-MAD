import { BrowserRouter, Router } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { fireEvent, render, screen } from '../../utils/testutils';
import { Menu } from './menu';

const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};

describe('Given the component Menu', () => {
    describe('When it is called', () => {
        test('Then it should render the menu', () => {
            const preloadedState = {
                workouts: [],
                users: {
                    token: 'test',
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
                },
            };
            render(
                <BrowserRouter>
                    <Menu></Menu>
                </BrowserRouter>,

                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/contacto/);
            expect(element).toBeInTheDocument();
        });
        test('Then it should render the menu with login', () => {
            const preloadedState = {
                workouts: [],
                users: {
                    token: '',
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
                },
            };
            render(
                <BrowserRouter>
                    <Menu></Menu>
                </BrowserRouter>,

                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/contacto/);
            expect(element).toBeInTheDocument();
        });
    });
});
