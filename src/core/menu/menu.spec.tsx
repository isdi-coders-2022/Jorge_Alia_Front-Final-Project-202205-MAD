import { BrowserRouter } from 'react-router-dom';
import { userReducer } from '../../redurcers/user.reducer/user.reducer';
import { workoutReducer } from '../../redurcers/workout.reducer/workout.reducer';
import { render, screen } from '../../utils/testutils';
import { Menu } from './menu';

const reducer = {
    workouts: workoutReducer,
    user: userReducer,
};

describe('Given the component Menu', () => {
    describe('When it is called', () => {
        test('Then it should render the menu', () => {
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
            render(
                <BrowserRouter>
                    <Menu></Menu>
                </BrowserRouter>,

                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/Contacto/);
            expect(element).toBeInTheDocument();
        });
        test('Then it should render the menu with login', () => {
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
            render(
                <BrowserRouter>
                    <Menu></Menu>
                </BrowserRouter>,

                {
                    preloadedState,
                    reducer,
                }
            );
            const element = screen.getByText(/Contacto/);
            expect(element).toBeInTheDocument();
        });
    });
});
