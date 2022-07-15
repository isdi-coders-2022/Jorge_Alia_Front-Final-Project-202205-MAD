import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { render, screen } from '../../utils/testutils';
import MySelectionPage from './mySelectionPage';

const reducer = {
    workouts: workoutReducer,
    users: userReducer,
};

describe('Given the component MySelectionPage', () => {
    describe('When calling it', () => {
        test('Then it should render if I am not logged', () => {
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
            render(
                <BrowserRouter>
                    <MySelectionPage></MySelectionPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const newResult = screen.getByText(/Únete/i);
            expect(newResult).toBeInTheDocument();
        });
        test('Then it should render if I am logged and workouts.length is 0', () => {
            const preloadedState = {
                workouts: [],
                users: {
                    token: 'test',
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
            render(
                <BrowserRouter>
                    <MySelectionPage></MySelectionPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const newResult = screen.getByText(/Ningún/i);
            expect(newResult).toBeInTheDocument();
        });
        test('Then it should render if I am logged and workouts.length is different to 0', () => {
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
                    <MySelectionPage></MySelectionPage>
                </BrowserRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );
            const result = screen.getByTitle(/main/i);
            expect(result).toBeInTheDocument();
        });
    });
});
